import { createRouter, createWebHashHistory } from 'vue-router'
// 导入公共布局
import Layout from '@/views/Layout'
import Home from '@/views/home'
import Login from '@/views/login'
import Cart from '@/views/cart'
// 详情页
import GoodsDetail from '@/views/goods/index.vue'
const Oreder = () => import('@/views/Member/order/index.vue')
const Pay = () => import('@/views/Member/pay')
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
      },
      {
        path: '/cart',
        component: Cart
      },
      {
        path: '/order',
        component: Oreder
      },
      {
        path: '/pay',
        component: Pay
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
  routes,
  // 每次跳转页面的另一个页面都会在顶部
  scrollBehavior () {
    return {
      left: 0, top: 0
    }
  }
})

export default router
