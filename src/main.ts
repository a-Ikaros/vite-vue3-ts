import { createApp } from 'vue'
import router from '@/router/index'
import { key, store } from '@/store'
import App from './App.vue'
import Vant from 'vant'
import styleImport from '@/utils/style-import'
import '@/style/basic.styl'
import mitt from 'mitt'

const Mit = mitt()

declare module 'vue' {
  export interface ComponentCustomProperties {
    $Bus: typeof Mit
  }
}
const app = createApp(App)
app.use(Vant)
app.config.globalProperties.$Bus = Mit
styleImport(app).use(router).use(store, key).mount('#app')
