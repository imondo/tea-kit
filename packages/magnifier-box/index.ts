import { App } from 'vue'
import MagnifierBox from './src/index.vue'

const Installer = {
  install(app: App) {
    app.component('tea-magnifier', MagnifierBox)
  }
}

export default Installer