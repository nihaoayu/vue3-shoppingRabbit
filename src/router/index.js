import { createRouter, createWebHashHistory } from 'vue-router'
// 导入公共布局
import Layout from '@/views/Layout'
import Home from '@/views/home'
const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        component: Home
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
