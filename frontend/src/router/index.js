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
      path: '/producerResult',
      name: 'ProducerResult',
      component: () => import('../views/ProducerResult.vue')
    },
    {
      path: '/theaterManager',
      name: 'TheaterManager',
      component: () => import('../views/TheaterManagerMain.vue')
    },
    {
      path: '/producerSearch',
      name: 'ProducerSearch',
      component: () => import('../views/ProducerSearch.vue')
    },
    {
      path: '/producerTheaterInfo',
      name: 'ProducerTheaterInfo',
      component: () => import('../views/ProducerTheaterInfo.vue')
    },
  ]
})
