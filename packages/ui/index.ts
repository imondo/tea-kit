import { TeaButton } from '@tea-kit/components'
import Components from './components'
import { App } from 'vue'
import 'uno.css'
import './styles/button.less'
import './styles/checkbox.less'

const Installer = {
  install(app: App) {
    Components.forEach(c => {
      app.use(c)
    })
  }
}

export default Installer
export {
  TeaButton
}