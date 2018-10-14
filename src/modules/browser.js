import { searchService } from '@/services/browser.js'

const baseSearchTypes = ['song', 'album', 'artist', 'playlist']

const state = {
  searchTypes: baseSearchTypes,
  selectedType: baseSearchTypes[0],
  searchedResources: {
    song: [],
    album: [],
    artist: [],
    playlist: [],
  },
  isSearching: false,
  isSearchError: false,
  currentError: ''
}

const mutations = {
  _update_search_type(state, { selectedType }) {
    state.selectedType = selectedType
  },
  _launch_search_resource(state, {type}) {
    state.searchedResources[type] = []
    state.isSearching = true 
    state.isSearchError = false 
    state.currentError = ''
  },
  _finish_search_resource_error(state, {error}) {
    state.isSearching = false
    state.isSearchError = true 
    state.currentError = error 
  },
  _finish_search_resource_success(state, {type, resources}) {
    state.isSearching = false
    state.isSearchError = false 
    state.currentError = '' 
    state.searchedResources[type] = resources
  }
}

const actions = {
  searchAction({commit}, {type, key, page, limit}) {
    commit('_launch_search_resource', {type})
    searchService(type, key, page, limit)
      .then((json) => {
        commit('_finish_search_resource_success', {
          type,
          resources: digestJson(json, type) 
        })
      })
      .catch((error) => {
        commit('_finish_search_resource_error', {error})
      })
  }
}

function digestJson(_json, _type) {
  const _result = _json.result[`${_type}s`]
  console.log(_json, _result);
  return _result
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
