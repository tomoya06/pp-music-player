import { searchService } from '@/services/browser.js'

const baseSearchTypes = [
  {
    display: 'Songs',
    text: 'song',
    value: 1
  },
  {
    display: 'Albums',
    text: 'album',
    value: 10
  },
  {
    display: 'Artists',
    text: 'artist',
    value: 100
  }
  // {
  //   display: 'Playlists',
  //   text: 'playlist',
  //   value: 1000,
  // }
]

const state = {
  searchTypes: baseSearchTypes,
  selectedType: baseSearchTypes[0],

  searchedResources: {
    song: [],
    album: [],
    artist: [],
    playlist: []
  },
  isSearching: false,
  isSearchError: false,
  currentError: '',
  currentResourcesCount: 0,

  currentKeyword: '',

  turnOnZeroSnackbar: false
}

const mutations = {
  _update_search_type (state, { selectedType }) {
    state.selectedType = selectedType
  },
  _launch_search_resource (state, { type }) {
    state.searchedResources[type.text] = []
    state.isSearching = true
    state.isSearchError = false
    state.currentError = ''
  },
  _finish_search_resource_error (state, { error }) {
    state.isSearching = false
    state.isSearchError = true
    state.currentError = error
  },
  _finish_search_resource_success (state, { type, resources }) {
    state.isSearching = false
    state.isSearchError = false
    state.currentError = ''
    state.searchedResources[type.text] = resources

    state.turnOnZeroSnackbar = true
    state.currentResourcesCount = resources.length
  },
  _turn_off_zero_snackbar (state) {
    state.turnOnZeroSnackbar = false
  },
  _update_current_keyword (state, { keyword }) {
    state.currentKeyword = keyword
  }
}

const actions = {
  searchAction ({ state, commit, rootGetters, rootState }, { type, page, limit }) {
    commit('_launch_search_resource', { type })
    // console.log(state.host)
    const _host = rootGetters.urlHost
    const key = state.currentKeyword

    searchService(_host, type, key, page, limit)
      .then((json) => {
        commit('_finish_search_resource_success', {
          type,
          resources: digestJson(json, type)
        })
      })
      .catch((error) => {
        commit('_finish_search_resource_error', { error })
      })
  }
}

function digestJson (_json, _type) {
  if (_json.result[`${_type.text}Count`] === 0) {
    return []
  }
  const _result = _json.result[`${_type.text}s`]
  // console.log(_json, _result);
  return _result
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
