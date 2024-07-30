import '@packages/checkbox'
import { Store } from '@packages/store/Store'
import { TweakerStoreManagerElement } from './TweakerStoreManagerElement'
import { createStylesheet, element } from '@packages/element-constructor'
import { aptechkaTheme } from '@packages/theme'

const stylesheet = createStylesheet({
  ':host': {
    width: '100%',
    display: 'inline-flex',
    height: 'max-content',
  },
  'e-checkbox': {
    '--size': 'calc(var(--height-input) * 0.8)',
    width: 'var(--size)',
    height: 'var(--size)',
    borderRadius: aptechkaTheme.borderRadiusSmall.var,
  },
})

export class TweakerBooleanManagerElement extends TweakerStoreManagerElement<
  Store<boolean, 'boolean'>
> {
  constructor(...stores: Array<Store<boolean, 'boolean'>>) {
    super(...stores)

    const shadow = this.attachShadow({ mode: 'open' })
    shadow.adoptedStyleSheets.push(stylesheet)

    element(this, {
      children: [
        element('e-checkbox', {
          onChange: (e) => {
            this.updateStores((e.currentTarget as HTMLInputElement).checked)
          },
          ref: (e) => {
            this.firstStore.subscribe((d) => {
              e.checked = d.current
            })
          },
        }),
      ],
    })
  }
}

if (!customElements.get('e-tweaker-boolean-manager')) {
  customElements.define(
    'e-tweaker-boolean-manager',
    TweakerBooleanManagerElement
  )
}

declare global {
  interface HTMLElementTagNameMap {
    'e-tweaker-boolean-manager': TweakerBooleanManagerElement
  }
}
