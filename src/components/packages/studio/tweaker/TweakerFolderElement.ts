import { define } from '@packages/custom-element'
import { div, element, createStylesheet } from '@packages/element-constructor'
import { AccordionElement } from '@packages/accordion'
import { Store } from '@packages/store'

import { studioTheme } from '../studioTheme'

import { TweakerFieldElement } from './TweakerFieldElement'
import { studioStorage } from '../studioStorage'
import { StoreBox } from './TweakerElement'

const stylesheet = createStylesheet({
  '.wrapper': {
    boxSizing: 'border-box',
    backgroundColor: `rgba(255, 255, 255, 0.1)`,
    borderRadius: studioTheme.sizeBorderRadius.var,
  },

  '.head': {
    boxSizing: 'border-box',

    width: '100%',
    height: '40px',

    paddingLeft: studioTheme.sizePaddingMedium.var,
    paddingRight: studioTheme.sizePaddingMedium.var,

    display: 'flex',
    alignItems: 'center',

    backgroundColor: studioTheme.colorDarkAux.var,
    borderRadius: studioTheme.sizeBorderRadius.var,
  },

  '.name': {
    fontSize: studioTheme.sizeFolderFont.var,
    color: studioTheme.colorLight.var,
  },

  '.body': {
    transitionProperty: 'height',
    transitionDuration: studioTheme.durationShort.var,
    overflow: 'hidden',
    height: '0px',
  },

  '.body-content': {
    boxSizing: 'border-box',
    padding: studioTheme.sizePaddingLarge.var,

    display: 'grid',
    gap: studioTheme.sizePaddingMedium.var,
  },
})

export interface TweakerFolderParameters {
  key: string
  storeBox?: StoreBox
}

@define('e-tweaker-folder')
export class TweakerFolderElement extends AccordionElement {
  #key: string
  #head = new Store<any>(null)
  #content = new Store<Array<TweakerFolderElement | TweakerFieldElement>>([])

  constructor(parameters: TweakerFolderParameters) {
    super()

    this.#key = parameters.key

    this.attachShadow({ mode: 'open' }).adoptedStyleSheets.push(stylesheet)

    element(this, {
      events: {
        'accordion-item-toggle': (e) => {
          e.stopPropagation()
          if (e.detail.opened) {
            studioStorage.openFolder(this.#key)
          } else {
            studioStorage.closeFolder(this.#key)
          }
        },
      },
      shadowChildren: [
        div({
          class: 'wrapper',
          children: [
            div({
              class: 'head',
              children: [
                this.#key
                  ? div({
                      class: 'name',
                      children: [this.#key.split('.').slice(-1).toString()],
                    })
                  : null,
                this.#head,
              ],
            }),
            div({
              class: 'body',
              children: div({
                class: 'body-content',
                children: this.#content,
              }),
            }),
          ],
        }),
      ],
    })

    if (parameters?.storeBox) {
      this.handleStore(parameters.storeBox)
    }
  }

  public get key() {
    return this.#key
  }

  public get head() {
    return this.#head
  }

  public get content() {
    return this.#content
  }

  protected override connectedCallback() {
    super.connectedCallback()

    setTimeout(() => {
      if (studioStorage.isFolderOpened(this.#key)) {
        this.openAll({ skipTransition: true })
      }
    }, 50)
  }

  protected handleStore(storeBox: StoreBox) {
    if (storeBox.remainingFolders.length) {
      const sname = storeBox.store.passport!.name
      const splittedName = sname.split('.')
      const key = splittedName
        .slice(0, splittedName.length - storeBox.remainingFolders.length)
        .join('.')

      const found = this.#content.current.find((v) => v.key === key)

      if (found instanceof TweakerFolderElement) {
        found.handleStore({
          store: storeBox.store,
          remainingFolders: storeBox.remainingFolders.slice(1),
        })
      } else {
        this.#content.current = [
          ...this.#content.current,
          new TweakerFolderElement({
            key,
            storeBox: {
              store: storeBox.store,
              remainingFolders: storeBox.remainingFolders.slice(1),
            },
          }),
        ]
      }
    } else {
      this.#content.current = [
        ...this.#content.current,
        new TweakerFieldElement({
          store: storeBox.store,
        }),
      ]
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'e-tweaker-folder': TweakerFolderElement
  }
}