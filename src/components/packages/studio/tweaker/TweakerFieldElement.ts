import '@packages/accordion'

import { Store, activeStores } from '@packages/store'

import { CustomElement, define } from '@packages/custom-element'

import {
  div,
  element,
  createStylesheet,
  button,
} from '@packages/element-constructor'

import { StoreManagerType } from '@packages/store/Store'

import copyIcon from '@assets/icons/copy.svg?raw'
import resetIcon from '@assets/icons/reset.svg?raw'

import { tweakerManagerConstructors } from './tweakerManagerConstructors'
import { aptechkaTheme } from '@packages/theme'
import { dispatchSizeChangeEvent } from '@packages/utils'

const stylesheet = createStylesheet({
  ':host': {
    display: 'grid',
    gridAutoFlow: 'column',
    gridTemplateColumns: '0.3fr 1fr',
    alignItems: 'center',
    color: aptechkaTheme.colorLight.var,
    gap: aptechkaTheme.gapMedium.var,
  },

  ':host(.disabled)': {
    pointerEvents: 'none',
    opacity: 0.5,
  },

  '.head': {
    fontSize: aptechkaTheme.fontSizeMedium.var,
    display: 'flex',
    alignItems: 'center',
    gap: aptechkaTheme.gapExtraSmall.var,
  },

  '.head-buttons': {
    display: 'flex',
  },

  '.head-button': {
    width: '14px',
    height: '14px',

    padding: '0',
    margin: '0',
    border: 'none',
    background: 'none',

    fill: aptechkaTheme.colorLight.var,
    transitionDuration: aptechkaTheme.durationShort.var,
    transitionProperty: `fill, opacity`,
    opacity: '0',
  },

  ':host(:hover) .head-button': {
    opacity: '1',
  },

  '.head-button:hover': {
    fill: aptechkaTheme.colorActive.var,
  },

  '.head-button svg': {
    width: '100%',
    height: '100%',
  },
})

export interface TweakerFieldParameters {
  store: Store<any, StoreManagerType, any>
}

@define('e-tweaker-field')
export class TweakerFieldElement extends CustomElement {
  #store: Store<any, StoreManagerType, any> = null!
  #key: string
  #name: string
  #pointerEnter = false

  constructor(parameters: TweakerFieldParameters) {
    super()
    this.#store = parameters.store
    this.#key = this.#store.passport!.name
    this.#name = this.#key.split('.').slice(-1).toString()

    this.openShadow(stylesheet)

    const type = this.#store.passport?.manager?.type || 'string'

    element(this, {
      class: {
        disabled: this.#store.passport?.manager?.disabled || false,
      },
      events: {
        pointerleave: () => {
          this.#pointerEnter = false
        },

        pointerenter: () => {
          this.#pointerEnter = true
        },
      },
      shadowChildren: [
        div({
          class: 'head',
          children: [
            div({ class: 'name', children: this.#name + ':' }),
            div({
              class: 'head-buttons',
              children: [
                button({
                  class: 'head-button',
                  children: copyIcon,
                  events: {
                    click: () => {
                      navigator.clipboard.writeText(this.#store.current)
                    },
                  },
                }),
                button({
                  class: 'head-button',
                  children: resetIcon,
                  events: {
                    click: () => {
                      this.#store.reset()
                    },
                  },
                }),
              ],
            }),
          ],
        }),
        new tweakerManagerConstructors[type](this.#store),
      ],
    })
  }

  public get key() {
    return this.#key
  }

  public get name() {
    return this.#name
  }

  public get store() {
    return this.#store
  }

  protected connectedCallback() {
    activeStores.subscribe(this.#storesChangeListener)
    addEventListener('keydown', this.#keydownListener)
    dispatchSizeChangeEvent(this)
  }

  protected disconnectedCallback() {
    activeStores.unsubscribe(this.#storesChangeListener)
    removeEventListener('keydown', this.#keydownListener)
  }

  #storesChangeListener = () => {
    if (!activeStores.current.includes(this.#store)) {
      this.remove()
    }
  }

  #keydownListener = (e: KeyboardEvent) => {
    if (this.#pointerEnter) {
      if ((e.metaKey || e.ctrlKey) && e.code === 'KeyC') {
        navigator.clipboard.writeText(this.#store.current)
      } else if ((e.metaKey || e.ctrlKey) && e.code === 'KeyR') {
        this.#store.reset()
        e.preventDefault()
      }
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'e-tweaker-field': TweakerFieldElement
  }
}
