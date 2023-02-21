import { createApp } from 'vue'
import TeaMagnifier from '@tea-kit/magnifier-box'
import '@tea-kit/magnifier-box/dist/index.css'
import './style.css'
import App from './App.vue'

createApp(App).use(TeaMagnifier).mount('#app')
