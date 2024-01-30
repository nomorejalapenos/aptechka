// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'
import dtsPlugin from 'vite-plugin-dts'
import packageJson from './package.json'
import { vitePluginHTMLComponents } from 'vite-plugin-html-components'

export default defineConfig((e) => {
  const isLibMode = e.mode === 'lib'

  return {
    plugins: isLibMode
      ? [
          dtsPlugin({
            include: ['./src/components/packages'],
            copyDtsFiles: true,
            exclude: '**/playground/**',
          }),
        ]
      : [vitePluginHTMLComponents({ pages: ['index.html'] })],
    build: isLibMode
      ? {
          copyPublicDir: false,
          emptyOutDir: true,
          outDir: 'lib',
          target: 'es2016',
          lib: {
            name: 'Aptechka',
            entry: {
              'animation/index': './src/components/packages/animation/index.ts',
              'attribute/index': './src/components/packages/attribute/index.ts',
              'canvas-2d/index': './src/components/packages/canvas-2d/index.ts',
              'controls/index': './src/components/packages/controls/index.ts',
              'css-unit-parser/index': './src/components/packages/css-unit-parser/index.ts',
              'custom-element/index': './src/components/packages/custom-element/index.ts',
              'device/index': './src/components/packages/device/index.ts',
              'element-constructor/index': './src/components/packages/element-constructor/index.ts',
              'en3/index': './src/components/packages/en3/index.ts',
              'image/index': './src/components/packages/image/index.ts',
              'intersector/index': './src/components/packages/intersector/index.ts',
              'ladder/index': './src/components/packages/ladder/index.ts',
              'layout-box/index': './src/components/packages/layout-box/index.ts',
              'loading/index': './src/components/packages/loading/index.ts',
              'measurer/index': './src/components/packages/measurer/index.ts',
              'media/index': './src/components/packages/media/index.ts',
              'morph/index': './src/components/packages/morph/index.ts',
              'notifier/index': './src/components/packages/notifier/index.ts',
              'order/index': './src/components/packages/order/index.ts',
              'resizer/index': './src/components/packages/resizer/index.ts',
              'router/index': './src/components/packages/router/index.ts',
              'scroll/index': './src/components/packages/scroll/index.ts',
              'scroll-entries/index': './src/components/packages/scroll-entries/index.ts',
              'source/index': './src/components/packages/source/index.ts',
              'store/index': './src/components/packages/store/index.ts',
              'ticker/index': './src/components/packages/ticker/index.ts',
              'utils/index': './src/components/packages/utils/index.ts',
              'video/index': './src/components/packages/video/index.ts',
            },
            formats: ['es', 'cjs'],
            fileName: (format, entryName) => `${entryName}.${format === 'es' ? 'js' : 'cjs'}`,
          },
          rollupOptions: {
            external: Object.keys({
              ...packageJson.peerDependencies,
            }),
          },
        }
      : {},
    resolve: {
      alias: {
        '@packages': resolve(__dirname, 'src/components/packages'),
      },
    },
  }
})
