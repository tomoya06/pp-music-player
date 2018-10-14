import { searchSongs, searchAlbums } from '@/services/browser.js'

const baseSearchSources = ['netease', 'xiami', 'qq']
const baseSearchTypes = ['song', 'album']

const state = {
  searchSources: baseSearchSources,
  selectedSource: baseSearchSources[0],
  searchTypes: baseSearchTypes,
  selectedType: baseSearchTypes[0],
  searchedSongs: [],
  searchedAlbums: [],
  isSearching: false,
  isSearchError: false,
  currentError: ''
}

const mutations = {
  _reset_searched_songs(state) {
    state.isSearching = true
    state.isSearchError = false
    state.currentError = ''
    state.searchedSongs = []
  },
  _reset_searched_albums(state) {
    state.isSearching = true
    state.isSearchError = false
    state.currentError = ''
    state.searchedAlbums = [] 
  },
  _update_searched_songs(state, { songs }) {
    state.searchedSongs = songs
    state.isSearchError = false
    state.isSearching = false
  },
  _update_searched_album(state, { albums }) {
    state.searchedAlbums = albums
    state.isSearchError = false
    state.isSearching = false
  },
  _update_searched_songs_error(state, { error }) {
    state.searchedSongs = []
    state.isSearchError = true
    state.isSearching = false
    state.currentError = error 
  },
  _update_searched_albums_error(state, { error }) {
    state.searchedAlbums = []
    state.isSearchError = true
    state.isSearching = false  
    state.currentError = error 
  },
  _update_search_source(state, { selectedSource }) {
    state.selectedSource = selectedSource
  },
  _update_search_type(state, { selectedType }) {
    state.selectedType = selectedType
  }
}

const actions = {
  searchSongsAction({ commit }, { source, key, page }) {
    commit('_reset_searched_songs')
    searchSongs(source, key, page)
      .then((json) => {
        commit('_update_searched_songs', { songs: json.songList })
      })
      .catch((error) => {
        commit('_update_searched_songs_error', { error })
      })
  },
  searchAlbumsAction({ commit }, { source, key, page }) {
    // TODO: change to the exact albums    
    commit('_reset_searched_albums')
    searchAlbums(source, key, page)
      .then((json) => {
        commit('_update_searched_album', { albums: json.albumList })
      })
      .catch((error) => {
        commit('_update_searched_albums_error', { error })
      })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
