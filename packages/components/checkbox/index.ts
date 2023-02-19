import { App, Plugin } from 'vue'
import Checkbox from './src/index.vue'
import CheckboxGroup from './src/checkbox-group.vue'

export const TeaCheckbox: Plugin = {
    install(app: App) {
        app.component('tea-checkbox-group', CheckboxGroup)
        app.component('tea-checkbox', Checkbox)
    }
}