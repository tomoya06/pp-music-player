import Vue from 'vue'
import Router from 'vue-router'

import browser from '@/views/Browser.vue'
import collection from '@/views/Collection.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'browser',
      component: browser
    },
    {
      path: '/collection',
      name: 'collection',
      component: collection
    }
  ]
})
