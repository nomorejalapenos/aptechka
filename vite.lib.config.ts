import { UserConfig } from 'vite'
import dtsPlugin from 'vite-plugin-dts'
import packageJson from './package.json'
import { sharedConfig } from './vite.shared.config'

export function libConfig() {
  const config: UserConfig = {
    plugins: [
      dtsPlugin({
        include: ['./src/components/packages'],
        copyDtsFiles: true,
        exclude: '**/playground/**',
      }),
    ],
    build: {
      copyPublicDir: false,
      emptyOutDir: true,
      outDir: 'lib',
      target: 'es2016',
      lib: {
        name: 'Aptechka',
        entry: {
          'animation/index': './src/components/packages/animation/index.ts',
          'attribute/index': './src/components/packages/attribute/index.ts',
          'class-linked-status/index':
            './src/components/packages/class-linked-status/index.ts',
          'connector/index': './src/components/packages/connector/index.ts',
          'controls/index': './src/components/packages/controls/index.ts',
          'css-property/index':
            './src/components/packages/css-property/index.ts',
          'css-unit-parser/index':
            './src/components/packages/css-unit-parser/index.ts',
          'css-value-parser/index':
            './src/components/packages/css-value-parser/index.ts',
          'dev/index': './src/components/packages/dev/index.ts',
          'device/index': './src/components/packages/device/index.ts',
          'element-resizer/vanilla/index':
            './src/components/packages/element-resizer/vanilla/index.ts',
          'en3/index': './src/components/packages/en3/index.ts',
          'element-resizer/react/index':
            './src/components/packages/element-resizer/react/index.ts',
          'intersector/vanilla/index':
            './src/components/packages/intersector/vanilla/index.ts',
          'intersector/react/index':
            './src/components/packages/intersector/react/index.ts',
          'ladder/index': './src/components/packages/ladder/index.ts',
          'layout-box/index': './src/components/packages/layout-box/index.ts',
          'loading/index': './src/components/packages/loading/index.ts',
          'media/index': './src/components/packages/media/index.ts',
          'media-elements/index':
            './src/components/packages/media-elements/index.ts',
          'morph/index': './src/components/packages/morph/index.ts',
          'notifier/index': './src/components/packages/notifier/index.ts',
          'order/index': './src/components/packages/order/index.ts',
          'pointer/index': './src/components/packages/pointer/index.ts',
          'router/index': './src/components/packages/router/index.ts',
          'scroll/vanilla/index':
            './src/components/packages/scroll/vanilla/index.ts',
          'scroll/react/index':
            './src/components/packages/scroll/react/index.ts',
          'scroll-entries/index':
            './src/components/packages/scroll-entries/index.ts',
          'slicer/index': './src/components/packages/slicer/index.ts',
          'source/index': './src/components/packages/source/index.ts',
          'store/index': './src/components/packages/store/index.ts',
          'ticker/vanilla/index':
            './src/components/packages/ticker/vanilla/index.ts',
          'ticker/react/index':
            './src/components/packages/ticker/react/index.ts',
          'need_redo_tweaker/index':
            './src/components/packages/need_redo_tweaker/index.ts',
          'utils/index': './src/components/packages/utils/index.ts',
          'window-resizer/vanilla/index':
            './src/components/packages/window-resizer/vanilla/index.ts',
          'window-resizer/react/index':
            './src/components/packages/window-resizer/react/index.ts',
        },
        formats: ['es', 'cjs'],
        fileName: (format, entryName) =>
          `${entryName}.${format === 'es' ? 'js' : 'cjs'}`,
      },
      rollupOptions: {
        external: Object.keys({
          ...packageJson.peerDependencies,
        }),
      },
    },
    ...sharedConfig(),
  }

  return config
}
