import { createStore, createLogger } from 'vuex'
// 导入数据持久化插件
import createPersistedstate from 'vuex-persistedstate'

// 导入模块化数据
import user from './modules/user'
import cart from './modules/cart'

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user,
    cart
  },
  plugins: [
    createPersistedstate({
      key: 'vue3-githubrabbit',
      paths: ['user', 'cart']
    }),
    createLogger()
  ]
})
