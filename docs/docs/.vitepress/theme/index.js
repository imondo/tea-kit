import DefaultTheme from 'vitepress/theme'
import TeaUI from '@tea-kit/ui'
import '@tea-kit/ui/styles/button.less'
import '@tea-kit/ui/styles/checkbox.less'

import TeaMagnifier from '@tea-kit/magnifier-box'
import '@tea-kit/magnifier-box/dist/index.css'

import './styles/index.css'

// 显示 Demo 组件
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
import Demo from 'vitepress-theme-demoblock/dist/client/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/dist/client/components/DemoBlock.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(TeaUI)
    app.use(TeaMagnifier)
    app.component('Demo', Demo)
    app.component('DemoBlock', DemoBlock)
  }
}