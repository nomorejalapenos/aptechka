import { CustomElement, define } from '@packages/custom-element'
import { PopoverElement } from './PopoverElement'
import {
  createStylesheet,
  button,
  slot,
  element,
} from '@packages/element-constructor'
import { isBrowser } from '@packages/utils'
import { StoreEntry } from '@packages/store'

export type PopoverButtonType = 'open' | 'close' | 'toggle'

const stylesheet = createStylesheet({
  button: {
    all: 'inherit',
  },
})

@define('e-popover-button')
export class PopoverButtonElement extends CustomElement {
  #popoverElement: PopoverElement | undefined

  constructor() {
    super()

    this.openShadow(stylesheet)

    if (isBrowser) {
      element(this, {
        children: [
          button({
            onClick: () => {
              if (this.#popoverElement) {
                const type = this.getAttribute('type') || 'open'

                if (
                  type === 'open' ||
                  (type === 'toggle' && !this.#popoverElement.opened.current)
                ) {
                  this.#popoverElement.open()
                } else if (
                  type === 'close' ||
                  (type === 'toggle' && this.#popoverElement.opened.current)
                ) {
                  this.#popoverElement.close()
                }
              }
            },
            children: [slot()],
          }),
        ],
      })
    }
  }

  public get popoverElement() {
    return this.#popoverElement
  }

  protected connectedCallback() {
    const targetId = this.getAttribute('target')

    if (targetId) {
      const popoverElement =
        document.querySelector(`#${targetId}`) ||
        (this.getRootNode() as ParentNode).querySelector(`#${targetId}`)

      if (popoverElement) {
        this.#popoverElement = popoverElement as PopoverElement

        this.#popoverElement.addEventListener(
          'popoverTriggered',
          this.#popoverTriggeredListener
        )
        this.#popoverElement.addEventListener(
          'popoverOpened',
          this.#popoverOpenedListener
        )
        this.#popoverElement.addEventListener(
          'popoverClosing',
          this.#popoverClosingListener
        )
        this.#popoverElement.addEventListener(
          'popoverClosed',
          this.#popoverClosedListener
        )
      } else {
        console.warn(this, `target ${targetId} not found`)
      }
    }
  }

  protected disconnectedCallback() {
    if (this.#popoverElement) {
      this.#popoverElement.removeEventListener(
        'popoverTriggered',
        this.#popoverTriggeredListener
      )
      this.#popoverElement.removeEventListener(
        'popoverOpened',
        this.#popoverOpenedListener
      )
      this.#popoverElement.removeEventListener(
        'popoverClosing',
        this.#popoverClosingListener
      )
      this.#popoverElement.removeEventListener(
        'popoverClosed',
        this.#popoverClosedListener
      )
    }
  }

  #popoverTriggeredListener = () => {
    this.classList.add('triggered')
  }

  #popoverOpenedListener = () => {
    this.classList.add('opened')
  }

  #popoverClosingListener = () => {
    this.classList.remove('opened')
  }

  #popoverClosedListener = () => {
    this.classList.remove('triggered')
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'e-popover-button': PopoverButtonElement
  }
}
