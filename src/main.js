import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入重置样式的文件
import 'normalize.css'
import '@/styles/common.less'
// 引入全局组件
import componentPlugin from '@/components'
createApp(App).use(store).use(router).use(componentPlugin).mount('#app')
