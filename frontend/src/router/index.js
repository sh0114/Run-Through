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
      path: '/producer/theater/info',
      name: 'ProducerTheaterInfo',
      component: () => import('../views/ProducerTheaterInfo.vue')
    },
    {

      path: '/theater-manager/bookingCalendar',
      name: 'BookingCalendar',
      component: () => import('../views/TM/BookingCalendar.vue')
    },
    {
      path: '/theater-manager/statistics',
      name: 'Statistics',
      component: () => import('../views/TM/Statistics.vue')
    },
    {
      path: '/theater-manager/review',
      name: 'Review',
      component: () => import('../views/TM/Review.vue')
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
