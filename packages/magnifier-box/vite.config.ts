import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      entry: './index.ts',
      name: 'magnifier-box',
      fileName: (format) => `magnifier-box.${format}.js`
    },
    rollupOptions: {
      // 处理不想打包进库的依赖
      external: ['vue']
    },
    cssCodeSplit: true
  },
  plugins: [
    vue(),
    dts()
  ]
})