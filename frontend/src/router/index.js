import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/components/IndexPage'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login.vue')
    },
    {
      path: '/hello',
      name: 'hello',
      component: () => import('../views/hello.vue')
    }
  ]
})
