import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  build: {
    lib: {
      entry: './index.ts',
      name: 'watermark',
      fileName: (format) => `watermark.${format}.js`
    },
    rollupOptions: {
      // 处理不想打包进库的依赖
      external: ['vue']
    },
    cssCodeSplit: true
  },
  plugins: [
    vue()
  ]
})