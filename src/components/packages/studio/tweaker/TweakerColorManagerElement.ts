import { Store } from '@packages/store/Store'
import { define } from '@packages/custom-element'
import { TweakerStoreManagerElement } from './TweakerStoreManagerElement'
import { createStylesheet, element, input } from '@packages/element-constructor'
import { aptechkaTheme } from '@packages/theme'

const stylesheet = createStylesheet({
  ':host': {
    width: '100%',
    display: 'inline-flex',
    height: 'max-content',
  },

  input: {
    width: '100%',
    height: aptechkaTheme.heightInput.var,
    padding: '0',
    background: 'none',
    borderRadius: aptechkaTheme.borderRadius.var,
    border: 'none',
    blockSize: 'unset',
  },

  'input::-webkit-color-swatch, input::-webkit-color-swatch-wrapper': {
    boxSizing: 'border-box',
    padding: '0px',
    border: 'none',
    borderRadius: aptechkaTheme.borderRadius.var,
    height: `calc(${aptechkaTheme.heightInput.var} * 0.93)`,
  },
})

@define('e-tweaker-color-manager')
export class TweakerColorManagerElement extends TweakerStoreManagerElement<
  string,
  'color'
> {
  constructor(...stores: Array<Store<string, 'color'>>) {
    super(...stores)

    this.openShadow(stylesheet)

    element(this, {
      shadowChildren: [
        input({
          attributes: {
            type: 'color',
            value: this.firstStore,
          },
          events: {
            input: (e) => {
              this.updateStores((e.currentTarget as HTMLInputElement).value)
            },
          },
        }),
      ],
    })
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'e-tweaker-color-manager': TweakerColorManagerElement
  }
}
