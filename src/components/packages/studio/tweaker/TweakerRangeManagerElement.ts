import { Store } from '@packages/store/Store'
import { define } from '@packages/custom-element'
import { createStylesheet, input } from '@packages/element-constructor'

import { TweakerNumberManagerElement } from './TweakerNumberManagerElement'
import { aptechkaTheme } from '@packages/theme'

const stylesheet = createStylesheet({
  ':host': {
    width: '100%',
  },

  '.text-input': {
    width: '60px',
    marginRight: aptechkaTheme.gapLarge.var,
    textAlign: 'center',
  },

  '.range-input': {
    boxSizing: 'border-box',
    '-webkit-appearance': 'none',

    height: '8px',
    width: '100%',

    margin: '0',
    padding: '0',

    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: aptechkaTheme.borderRadius.var,
  },

  '.range-input::-webkit-slider-thumb': {
    '-webkit-appearance': 'none',

    height: `calc(${aptechkaTheme.heightInput.var} * 0.7)`,
    width: aptechkaTheme.borderRadius.var,
    borderRadius: aptechkaTheme.borderRadius.var,

    backgroundColor: aptechkaTheme.colorLight.var,
    transitionProperty: 'background-color',
    transitionDuration: aptechkaTheme.durationShort.var,
  },

  '.range-input:focus::-webkit-slider-thumb': {
    backgroundColor: aptechkaTheme.colorActive.var,
  },

  '.range-input::-webkit-slider-runnable-track': {
    '-webkit-appearance': 'none',
    'box-shadow': 'none',
    border: 'none',
    background: 'transparent',
  },
})

@define('e-tweaker-range-manager')
export class TweakerRangeManagerElement extends TweakerNumberManagerElement<'range'> {
  constructor(store: Store<number, 'range'>) {
    super(store)

    this.shadowRoot!.adoptedStyleSheets.push(stylesheet)

    this.appendContent(
      input({
        class: 'range-input',
        attributes: {
          type: 'range',
          min: this.min,
          max: this.max,
          step: this.step,
          value: this.store,
        },
        events: {
          input: (e) => {
            this.store.current = parseFloat(
              (e.currentTarget as HTMLInputElement).value
            )
          },
        },
      })
    )
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'e-tweaker-range-manager': TweakerRangeManagerElement
  }
}
