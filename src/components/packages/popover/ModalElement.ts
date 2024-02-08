import './PopoverButtonElement'
import { define } from '@packages/custom-element'
import { PopoverElement } from './PopoverElement'
import {
  createStylesheet,
  element,
  div,
  slot,
  custom,
  span,
} from '@packages/element-constructor'
import { isBrowser } from '@packages/utils'

const stylesheet = createStylesheet({
  ':host': {
    position: 'fixed',
    top: '0',
    left: '0',

    zIndex: '1',

    width: '100%',
    height: '100%',

    transition: 'opacity 0.3s',
  },

  ':host::before': {
    content: '""',
    position: 'fixed',
    top: '0',
    left: '0',
    zIndex: '-1',
    width: '100%',
    height: '100%',
    backgroundColor: 'var(--backdrop, rgba(0, 0, 0, 0.8))',
  },

  '.inner': {
    width: '100%',
    height: '100%',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    overflow: 'hidden auto',
  },

  '.overflow .inner': {
    alignItems: 'flex-start',
  },

  '.content': {
    position: 'relative',
  },

  '.close-button': {
    position: 'absolute',
    top: 'var(---close-button-top, 0.5em)',
    right: 'var(---close-button-right, 0.5em)',

    background: 'none',
    border: 'none',
    fontFamily: 'inherit',
    fontSize: 'inherit',
    fontWeight: 'inherit',
  },

  '.close-button-default': {
    width: 'var(---close-button-size, 2em)',
    height: 'var(---close-button-size, 2em)',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    transition: 'transform 0.2s',
    willChange: 'transform',
  },

  '.close-button:hover .close-button-default': {
    transform: 'scale(0.9)',
  },

  '.close-button:active .close-button-default': {
    transform: 'scale(0.7)',
  },

  '.close-button-default::before, .close-button-default::after': {
    content: '""',

    position: 'absolute',

    width: 'var(---close-button-thickness, 0.1em)',
    height: '100%',

    backgroundColor: 'var(--close-button-color, black)',
  },

  '.close-button-default::before': {
    transform: 'rotate(-45deg)',
  },

  '.close-button-default::after': {
    transform: 'rotate(45deg)',
  },
})

@define('e-modal')
export class ModalElement extends PopoverElement {
  #resizeObserver: ResizeObserver = null!
  #innerElement: HTMLElement = null!

  constructor() {
    super()

    if (isBrowser) {
      this.attachShadow({ mode: 'open' }).adoptedStyleSheets.push(stylesheet)

      element(this, {
        shadowChildren: div({
          class: 'inner',
          attributes: {
            outside: true,
          },
          children: div({
            class: 'content',
            children: [
              custom('e-popover-button', {
                attributes: {
                  type: 'close',
                  target: this.id,
                },
                class: 'close-button',
                children: [
                  slot({
                    attributes: {
                      name: 'close-button',
                    },
                    children: span({ class: 'close-button-default' }),
                  }),
                ],
              }),
              slot(),
            ],
          }),
          created: (e) => (this.#innerElement = e),
        }),
      })

      this.#resizeObserver = new ResizeObserver(() => {
        if (this.#innerElement.scrollHeight > this.#innerElement.clientHeight) {
          this.classList.add('overflow')
        } else {
          this.classList.remove('overflow')
        }
      })
    }
  }

  protected override connectedCallback() {
    super.connectedCallback()

    this.#resizeObserver.observe(this)
  }

  protected override disconnectedCallback() {
    super.disconnectedCallback()

    this.#resizeObserver.disconnect()
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'e-modal': ModalElement
  }
}
