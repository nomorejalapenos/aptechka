import { createTheme } from '@packages/element-constructor'

export const studioTheme = createTheme({
  colorDark: '#1c1c1c',
  colorLight: '#ffffff',
  colorDarkAux: '#282828',
  colorDarxAux2: '#4d4d4d',
  colorSharedFont: '#dbdbdb',
  colorPropertyBaackground: '#424242',
  colorFieldController: '#ffffff',
  colorFieldName: '#c8c8c8',
  colorActive: '#00E5B0',
  sizeTweakerWidth: '480px',
  sizeFolderFont: '20px',
  sizePropertyNameFont: '16px',
  sizePropertyValueFont: '14px',
  sizeBorderRadius: '12px',
  sizeControllerRadius: '8px',
  sizePaddingLarge: '16px',
  sizePaddingMedium: '12px',
  sizePaddingSmall: '8px',
  sizePaddingExtraSmall: '4px',
  sizeBreakpoint: '600px',
  sizeControllerHeight: '24px',
  sizeSmallInput: '60px',
  miscDisabledOpacity: '0.1',
  durationShort: '0.2s',
} as const)
