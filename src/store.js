import Vue from 'vue'
import Vuex from 'vuex'

import browser from '@/modules/browser.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    browser
  }
})
