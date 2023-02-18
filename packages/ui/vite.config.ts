import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { presetUno, presetAttributify, presetIcons } from 'unocss'
import Unocss from 'unocss/vite'

export default defineConfig({
  build: {
    lib: {
      entry: './index.ts',
      name: 'tea-ui',
      fileName: (format) => `tea-ui.${format}.js`
    },
    rollupOptions: {
      // 处理不想打包进库的依赖
      external: ['vue']
    },
    cssCodeSplit: true
  },
  plugins: [
    vue(),
    dts(),
    Unocss({
      presets: [presetUno(), presetAttributify(), presetIcons()]
    })
  ]
})