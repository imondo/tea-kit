import { App } from 'vue'
import watermark from './src/index.vue'

const Installer = {
  install(app: App) {
    app.component('tea-watermark', watermark)
  }
}

export default Installer