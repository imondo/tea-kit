import DefaultTheme from 'vitepress/theme'
import TeaUI from '@tea-kit/ui'
import '@tea-kit/ui/styles/button.less'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    console.log(TeaUI, 1111)
    app.use(TeaUI)
  }
}