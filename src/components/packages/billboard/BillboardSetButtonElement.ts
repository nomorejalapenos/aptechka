import { findParentElement, isBrowser } from '@packages/utils'
import { BillboardElement } from './BillboardElement'
import { CSSProperty } from '@packages/css-property'

export class BillboardSetButtonElement extends HTMLElement {
  #index = new CSSProperty(this, '--index', 0)
  #billboardElement: BillboardElement | null = null

  constructor() {
    super()

    this.addEventListener('click', () => {
      if (this.#billboardElement) {
        this.#billboardElement.set(this.#index.current)
      }
    })
  }

  protected connectedCallback() {
    this.tabIndex = 0

    this.#billboardElement = findParentElement(this, BillboardElement)

    this.#billboardElement?.addEventListener(
      'billboardChange',
      this.#changeListener
    )

    customElements.whenDefined('e-billboard').then(() => {
      if (this.isConnected) {
        this.#changeListener()
      }
    })

    this.#index.observe()
  }

  protected disconnectedCallback() {
    this.removeAttribute('tabindex')

    this.#index.unobserve()

    this.#billboardElement?.removeEventListener(
      'billboardChange',
      this.#changeListener
    )
  }

  #changeListener = () => {
    if (this.#index.current === this.#billboardElement?.counter) {
      this.classList.add('current')
    } else {
      this.classList.remove('current')
    }
  }
}

if (isBrowser && !customElements.get('e-billboard-set-button')) {
  customElements.define('e-billboard-set-button', BillboardSetButtonElement)
}

declare global {
  interface HTMLElementTagNameMap {
    'e-billboard-set-button': BillboardSetButtonElement
  }
}
