import { CustomElement, define } from '@packages/custom-element'
import { element } from '@packages/element-constructor'
import { PopoverElement } from './PopoverElement'
import { isBrowser } from '@packages/utils'

export type PopoverButtonType = 'open' | 'close' | 'toggle'

@define('e-popover-button')
export class PopoverButtonElement extends CustomElement {
  #popoverElement: PopoverElement | undefined

  constructor() {
    super()

    if (isBrowser) {
      element(this, {
        attributes: {
          tabIndex: this.getAttribute('tabindex') || '0',
          role: 'button',
        },
        style: {
          cursor: 'default',
        },
        events: {
          click: () => {
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
        },
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
      } else {
        console.warn(this, `target ${targetId} not found`)
      }
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'e-popover-button': PopoverButtonElement
  }
}
