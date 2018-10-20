import Vue from 'vue'
import Router from 'vue-router'

import browser from '@/views/Browser.vue'
import collection from '@/views/Collection.vue'
import setting from '@/views/Setting.vue'
import home from '@/views/Home.vue'

import details from '@/views/Details.vue'
import albumDetails from '@/views/Details/AlbumDetails.vue'
import artistDetails from '@/views/Details/ArtistDetails.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
    },
    {
      path: '/browser',
      name: 'browser',
      component: browser,
    },
    {
      path: '/collection',
      name: 'collection',
      component: collection
    },
    {
      path: '/setting',
      name: 'setting',
      component: setting
    },
    {
      path: '/details',
      component: details,
      children: [{
        path: 'album/:id',
        name: 'albumDetails',
        component: albumDetails,
      }, {
        path: 'artist/:id',
        name: 'artistDetails',
        component: artistDetails,
      }]
    }
  ]
})
