import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/css',
    name: 'CSS',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Css.vue')
  },
  {
    path: '/animate',
    name: 'Animate',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Animate.vue')
  },
  {
    path: '/svg',
    name: 'Svg',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Svg.vue')
  },
  {
    path: '/canvas',
    name: 'Canvas',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Canvas.vue')
  },
  {
    path: '/libraries',
    name: 'Libraries',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Libraries.vue')
  },
  {
    path: '/vue-animations',
    name: 'VueAnimations',
    component: () => import(/* webpackChunkName: "about" */ '@/views/VueAnimations.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
