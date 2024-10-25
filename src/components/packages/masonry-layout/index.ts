import { CSSProperty } from '@packages/css-property'
import { createStylesheet } from '@packages/utils'

export class MasonryLayoutElement extends HTMLElement {
  #columns = new CSSProperty<number>(this, '--columns', 2)

  #columnElements: Array<HTMLElement> = []

  #mutationObserver: MutationObserver = null!

  constructor() {
    super()

    const root = this.attachShadow({ mode: 'open' })

    root.adoptedStyleSheets = [
      createStylesheet({
        ':host': {
          display: 'grid',
          gridTemplateColumns: 'repeat(var(--columns), 1fr)',
        },
        '.column': {
          display: 'grid',
          width: '100%',
          gap: 'var(--gap, 0rem)',
          gridAutoRows: 'max-content',
        },
      }),
    ]
  }

  protected connectedCallback() {
    this.#mutationObserver = new MutationObserver(this.#mutationListener)

    this.#mutationObserver.observe(this, {
      childList: true,
    })

    this.#columns.subscribe((e) => {
      this.shadowRoot!.innerHTML = ''
      this.#columnElements = []

      for (let index = 0; index < e.current; index++) {
        const column = document.createElement('div')
        column.classList.add('column')
        column.innerHTML = `<slot name="col-${index}"></slot>`

        this.#columnElements.push(column)

        this.shadowRoot?.appendChild(column)
      }

      this.#distribute()
    })

    this.#columns.observe()
  }

  protected disconnectedCallback() {
    this.#columns.close()

    this.#mutationObserver.disconnect()

    this.classList.remove('distributed')
  }

  #mutationListener: MutationCallback = () => {
    this.#distribute()
  }

  #distribute() {
    const children = [...this.children]

    children.forEach((el, i) => {
      el.slot = `col-${i % this.#columns.current}`
    })

    this.classList.add('distributed')
  }
}

if (!customElements.get('e-masonry-layout')) {
  customElements.define('e-masonry-layout', MasonryLayoutElement)
}

declare global {
  interface HTMLElementTagNameMap {
    'e-masonry-layout': MasonryLayoutElement
  }
}