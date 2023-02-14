import { App, Plugin } from 'vue'
import Button from './src/index.vue'

export const TeaButton: Plugin = {
    install(app: App) {
        app.component('tea-button', Button)
    }
}