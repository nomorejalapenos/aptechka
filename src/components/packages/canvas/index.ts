import { define, CustomElement } from '@packages/custom-element'
import {
  canvas,
  createStylesheet,
  element,
} from '@packages/element-constructor'
import { Notifier } from '@packages/notifier'
import {
  ElementResizerCallback,
  elementResizer,
} from '@packages/element-resizer'
import { ticker, TickerCallback } from '@packages/ticker'
import { clamp } from '@packages/utils'

const stylesheet = createStylesheet({
  ':host, canvas': {
    display: 'block',
    width: '100%',
    height: '100%',
  },
})

export interface Canvas2DRenderEntry {
  pixelRatio: number
  width: number
  height: number
  element: HTMLElement
  canvasElement: HTMLCanvasElement
  context: CanvasRenderingContext2D
  timestamp: number
  elapsed: number
}

export type Canvas2DRenderCallback = (entry: Canvas2DRenderEntry) => void

@define('e-canvas')
export class CanvasElement extends CustomElement {
  #renderEvent = new Notifier<Canvas2DRenderCallback>()

  #canvasElement: HTMLCanvasElement = null!
  #context: CanvasRenderingContext2D = null!

  #width = 0
  #height = 0
  #pixelRatio = 1

  #timestamp = 0
  #elapsed = 1

  constructor() {
    super()

    this.openShadow(stylesheet)

    element(this, {
      shadowChildren: canvas({
        created: (e) => {
          this.#canvasElement = e
          this.#context = e.getContext('2d')!
        },
      }),
    })
  }

  public get renderEvent() {
    return this.#renderEvent
  }

  public get canvasElement() {
    return this.#canvasElement
  }

  public get context() {
    return this.#context
  }

  public get pixelRatio() {
    return this.#pixelRatio
  }

  public get width() {
    return this.#width
  }

  public get height() {
    return this.#height
  }

  public get detail(): Canvas2DRenderEntry {
    return {
      width: this.#width,
      height: this.#height,
      element: this,
      canvasElement: this.#canvasElement,
      pixelRatio: this.#pixelRatio,
      context: this.#context,
      timestamp: this.#timestamp,
      elapsed: this.#elapsed,
    }
  }

  protected connectedCallback() {
    elementResizer.subscribe(this, this.#resizeListener)

    if (!this.hasAttribute('static')) {
      ticker.subscribe(this.#tickListener, {
        culling: this,
        maxFPS: this.hasAttribute('fps')
          ? parseInt(this.getAttribute('fps')!)
          : undefined,
      })
    }
  }

  protected disconnectedCallback() {
    elementResizer.unsubscribe(this.#resizeListener)
    ticker.unsubscribe(this.#tickListener)

    this.#renderEvent.close()
    this.#canvasElement.remove()
  }

  #resizeListener: ElementResizerCallback = (e) => {
    this.#pixelRatio = clamp(devicePixelRatio, 1, 2)

    this.#width = e.contentRect.width
    this.#height = e.contentRect.height

    this.#canvasElement.width = this.#width * this.pixelRatio
    this.#canvasElement.height = this.#height * this.pixelRatio

    this.context.scale(this.pixelRatio, this.pixelRatio)

    this.renderEvent.notify(this.detail)
  }

  #tickListener: TickerCallback = (e) => {
    this.#timestamp = e.timestamp
    this.#elapsed = e.elapsed

    this.#renderEvent.notify(this.detail)
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'e-canvas': CanvasElement
  }
}
