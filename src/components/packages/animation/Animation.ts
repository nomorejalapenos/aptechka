import { Store, StoreEntry, StoreOptions } from '@packages/store'
import {
  TickerAddOptions,
  TickerCallback,
  TickerCallbackEntry,
  ticker,
} from '@packages/ticker'
import {
  ElementOrSelector,
  clamp,
  nullishCoalescing,
  preciseNumber,
} from '@packages/utils'
import { TICK_ORDER } from '@packages/order'

export interface AnimationEntry extends StoreEntry<number> {
  delta: number
  distance: number
  deltaProgress: number
  distanceProgress: number
  direction: number
}

export interface AnimationOptions extends TickerAddOptions {
  min?: number
  max?: number
  equalize?: boolean
  restart?: boolean
}

export type AnimationConstructorOptions<Options extends AnimationOptions> =
  StoreOptions<number, 'number'> & Options

export abstract class Animation<
  Entry extends AnimationEntry = AnimationEntry,
  Options extends AnimationOptions = AnimationOptions
> extends Store<number, 'number', Entry> {
  #maxFPS: number | undefined
  #order = TICK_ORDER.ANIMATION
  #culling: ElementOrSelector | undefined | null | false

  #isRunning = new Store(false)

  #direction = 0
  #target = 0

  #min = -Infinity
  #max = Infinity

  #from = 0

  constructor(initial?: number, options?: StoreOptions<number, 'number'>) {
    super(initial || 0, options)
    this.#target = this.current
  }

  public get direction() {
    return this.#direction
  }

  public get target() {
    return this.#target
  }

  public get min() {
    return this.#min
  }

  public set min(value: number) {
    this.#min = value

    //@ts-ignore
    this.set(this.#target, {
      equalize: true,
    })
  }

  public get max() {
    return this.#max
  }

  public set max(value: number) {
    this.#max = value

    //@ts-ignore
    this.set(this.#target, {
      equalize: true,
    })
  }

  public get from() {
    return this.#from
  }

  public get isRunning() {
    return this.#isRunning
  }

  public get delta() {
    return Math.abs(this.#target - this.#from)
  }

  public get deltaProgress() {
    return this.delta
      ? preciseNumber(Math.abs(this.current - this.#from) / this.delta, 6)
      : 0
  }

  public get distance() {
    return Math.abs(this.#max - this.#min)
  }

  public get distanceProgress() {
    return this.distance
      ? preciseNumber(Math.abs(this.current - this.#min) / this.distance, 6)
      : 0
  }

  public override get entry() {
    return {
      ...super.entry,
      from: this.#from,
      delta: this.delta,
      distance: this.distance,
      direction: this.direction,
      deltaProgress: this.deltaProgress,
      distanceProgress: this.distanceProgress,
    }
  }

  public set(value: number, options?: Options) {
    if (this.#target !== value || options?.restart) {
      if (options) {
        this.updateOptions(options)
      }

      this.#setTarget(value)

      if (this.#target !== this.current) {
        this.start()
      }
    }
  }

  public shift(value: number, options?: Options) {
    this.set(this.#target + value, options)
  }

  public override reset() {
    super.reset()

    //@ts-ignore
    this.set(this.initial, { equalize: true })
  }

  public override close() {
    super.close()
    this.reset()
    this.unlistenAnimationFrame()
  }

  public listenAnimationFrame() {
    if (!this.#isRunning.current) {
      this.#isRunning.current = true

      ticker.subscribe(this.#animationFrameListener, {
        maxFPS: this.#maxFPS,
        order: this.#order,
        culling: this.#culling,
      })
    }
  }

  public unlistenAnimationFrame() {
    if (this.#isRunning.current) {
      this.#isRunning.current = false

      ticker.unsubscribe(this.#animationFrameListener)
    }
  }

  public updateOptions(options?: AnimationOptions) {
    this.#maxFPS = nullishCoalescing(options?.maxFPS, this.#maxFPS)
    this.#order = nullishCoalescing(options?.order, this.#order)
    this.#culling = nullishCoalescing(options?.culling, this.#culling)
    this.#min = nullishCoalescing(options?.min, this.#min)
    this.#max = nullishCoalescing(options?.max, this.#max)

    if (options?.equalize) {
      this.unlistenAnimationFrame()
      this.current = this.#target
    }

    if (options?.restart) {
      this.unlistenAnimationFrame()
      this.current = this.initial
    }
  }

  protected start() {
    this.listenAnimationFrame()
  }

  protected abstract handleAnimationFrame(e: TickerCallbackEntry): void

  #setTarget(value: number) {
    this.#direction = Math.sign(value - this.#target)

    this.#target = clamp(value, this.#min, this.#max)

    this.#from = this.current
  }

  #animationFrameListener: TickerCallback = (e) => {
    this.handleAnimationFrame(e)
  }
}
