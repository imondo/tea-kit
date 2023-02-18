import { TeaButton } from '@tea-kit/components'
import Components from './components'
import { App } from 'vue'
import 'uno.css'
import './styles/button.less'

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