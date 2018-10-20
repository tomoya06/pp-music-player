import Vue from 'vue'
import Vuex from 'vuex'

import home from '@/modules/home.js'
import browser from '@/modules/browser.js'
import collection from '@/modules/collection.js'

Vue.use(Vuex)

const defaultHost = `${window.location.protocol}//${document.domain}:3000` || 'http://localhost:3000'
const defaultIsDarkTheme = true

export default new Vuex.Store({
	state: {
		host: defaultHost,
		isDarkTheme: defaultIsDarkTheme,

	  // 0: DB only; 1: 163 only
	  searchSource: 0,

	  // Current User ID.
	  userId: 13,
	},

	getters: {
		urlHost: state => {
			return `${state.host}${state.searchSource? '': '/local'}`
		}
	},

	mutations: {
		_update_host(state, {host}) {
			state.host = host 
			console.log(state.host)
		},
		_update_app_theme(state, {isDarkTheme}) {
			state.isDarkTheme = isDarkTheme
		},
	  _update_search_source(state, {source}) {
	    state.searchSource = source
	  },
	},

	modules: {
		home,
		browser,
		collection,
	}
})
