import { defineConfig } from 'vitepress'
import { demoBlockPlugin } from 'vitepress-theme-demoblock'

export default defineConfig({
  base: '/tea-kit/',
  title: '杯具',
  layout: 'home',
  head: [
    [
      'link',{ rel: 'icon', href: '/imgs/favicon.png' }
    ]
  ],
  themeConfig: {
    logo: '/imgs/tea.svg',
    socialLinks: [{ icon: 'github', link: 'https://github.com/imondo/tea-kit' }],
    nav: [
      { text: '指南', link: '/guide/' },
      { text: '组件', link: '/components/button' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '介绍', link: '/guide/' },
          ]
        },
      ],
      '/components/': [
        {
          text: '基础组件',
          items: [
            { text: 'Button 按钮', link: '/components/button' },
            { text: 'Checkbox 多选框', link: '/components/checkbox' },
          ]
        },
        {
          text: '个性组件',
          items: [
            { text: 'Magnifier 放大镜', link: '/components/magnifier' },
            { text: 'Watermark 水印', link: '/components/watermark' },
          ]
        },
      ]
    }
  },
  markdown: {
    config: (md) => {
      md.use(demoBlockPlugin)
    }
  }
})

function getDemoblock() {
  return {
    '/': {
      'hide-text': 'Hide',
      'show-text': 'Expand',
      'copy-button-text': 'Copy',
      'copy-success-text': 'Copy success'
    },
    '/zh': {
      'hide-text': '隐藏代码',
      'show-text': '显示代码',
      'copy-button-text': '复制代码片段',
      'copy-success-text': '复制成功'
    }
  }
}