import DefaultTheme from 'vitepress/theme'
import TeaUI from '@tea-kit/ui'
import '@tea-kit/ui/styles/button.less'

import './styles/index.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(TeaUI)
  }
}