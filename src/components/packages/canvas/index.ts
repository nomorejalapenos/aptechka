import { CSSProperty } from '@packages/css-property'
import { define, CustomElement } from '@packages/custom-element'
import {
  canvas,
  createStylesheet,
  element,
} from '@packages/element-constructor'
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

export interface Canvas2DRenderDetail {
  pixelRatio: number
  width: number
  height: number
  element: HTMLElement
  canvasElement: HTMLCanvasElement
  context: CanvasRenderingContext2D
  timestamp: number
  elapsed: number
}

export type Canvas2DRenderCallback = (entry: Canvas2DRenderDetail) => void

@define('e-canvas')
export class CanvasElement extends CustomElement {
  #fpsCSSProperty = new CSSProperty<number>(this, '--fps', 0)

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
      children: canvas({
        ref: (e) => {
          this.#canvasElement = e
          this.#context = e.getContext('2d')!
        },
      }),
    })

    this.#fpsCSSProperty.subscribe((e) => {
      if (typeof e.previous !== 'undefined' && e.current !== e.previous) {
        this.#run()
      }
    })
  }

  public get fpsCSSProperty() {
    return this.#fpsCSSProperty
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

  public get detail(): Canvas2DRenderDetail {
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
    this.#fpsCSSProperty.observe()

    elementResizer.subscribe(this, this.#resizeListener)

    this.#run()
  }

  protected disconnectedCallback() {
    this.#fpsCSSProperty.unobserve()

    elementResizer.unsubscribe(this.#resizeListener)

    this.#stop()
  }

  #run() {
    ticker.unsubscribe(this.#tickListener)

    if (!this.hasAttribute('static')) {
      ticker.subscribe(this.#tickListener, {
        culling: this,
        maxFPS: this.#fpsCSSProperty.current,
      })
    }
  }

  #stop() {
    ticker.unsubscribe(this.#tickListener)
  }

  #resizeListener: ElementResizerCallback = (e) => {
    this.#pixelRatio = clamp(devicePixelRatio, 1, 2)

    this.#width = e.contentRect.width
    this.#height = e.contentRect.height

    this.#canvasElement.width = this.#width * this.pixelRatio
    this.#canvasElement.height = this.#height * this.pixelRatio

    this.context.scale(this.pixelRatio, this.pixelRatio)

    this.#dispatchRenderEvent()
  }

  #tickListener: TickerCallback = (e) => {
    this.#timestamp = e.timestamp
    this.#elapsed = e.elapsed

    this.#dispatchRenderEvent()
  }

  #dispatchRenderEvent() {
    this.dispatchEvent(
      new CustomEvent('canvasRender', {
        composed: true,
        detail: this.detail,
      })
    )
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'e-canvas': CanvasElement
  }

  interface HTMLElementEventMap {
    canvasRender: CustomEvent<Canvas2DRenderDetail>
  }
}
