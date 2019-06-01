import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: () => import('../views/MainPage.vue')
    },
    {
      path: '/producer',
      name: 'ProducerMain',
      component: () => import('../views/ProducerMain.vue')
    },
    {
      path: '/theater-manager',
      name: 'TheaterManager',
      component: () => import('../views/TheaterManagerMain.vue')
    },

  ]
})
