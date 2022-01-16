import { createRouter, createWebHashHistory } from 'vue-router'
// 导入公共布局
import Layout from '@/views/Layout'
import Home from '@/views/home'
import Login from '@/views/login'
// 详情页
import GoodsDetail from '@/views/goods/index.vue'
const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        component: Home
      },
      {
        path: '/detail/:id',
        component: GoodsDetail
      }
    ]
  },
  {
    path: '/login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
