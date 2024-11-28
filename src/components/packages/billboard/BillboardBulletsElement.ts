import { findParentElement, isBrowser } from '@packages/utils'
import { BillboardElement, BillboardEvents } from './BillboardElement'

export class BillboardBulletsElement extends HTMLElement {
  #billboardElement: BillboardElement | null = null
  #buttonElements: Array<HTMLElement> = []

  protected connectedCallback() {
    this.#billboardElement = findParentElement(this, BillboardElement)

    if (this.#billboardElement) {
      customElements.whenDefined('e-billboard').then(() => {
        if (this.isConnected) {
          const length = this.#billboardElement!.itemElements.length

          for (let index = 0; index < length; index++) {
            const button = document.createElement('button')
            this.#buttonElements.push(button)
            this.appendChild(button)
          }

          this.#buttonElements.forEach((element) => {
            element.addEventListener('click', this.#clickListener)
          })

          this.#billboardElement?.addEventListener(
            'billboardChange',
            this.#billboardChangeListener
          )

          this.#billboardChangeListener()
        }
      })
    }
  }

  protected disconnectedCallback() {
    this.#buttonElements.forEach((element) => {
      element.removeEventListener('click', this.#clickListener)
    })

    this.#billboardElement?.removeEventListener(
      'billboardChange',
      this.#billboardChangeListener
    )

    this.innerHTML = ''

    this.#buttonElements = []
  }

  #clickListener = (e: Event) => {
    const ct = e.currentTarget as HTMLElement

    const index = this.#buttonElements.findIndex((el) => el === ct)

    if (index >= 0) {
      this.#billboardElement!.set(index)
    }
  }

  #billboardChangeListener = () => {
    this.#buttonElements.forEach((element, i) => {
      if (i === this.#billboardElement!.counter) {
        element.classList.add('current')
      } else {
        element.classList.remove('current')
      }
    })
  }
}

if (isBrowser && !customElements.get('e-billboard-bullets')) {
  customElements.define('e-billboard-bullets', BillboardBulletsElement)
}

declare global {
  interface HTMLElementTagNameMap {
    'e-billboard-bullets': BillboardBulletsElement
  }
}
