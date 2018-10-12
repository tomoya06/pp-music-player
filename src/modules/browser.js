import { searchSongs, searchAlbums } from '@/services/browser.js'

const state = {
  searchedSongs: [],
  searchedAlbums: []
}

const mutations = {
  _update_searched_songs (state, { songs }) {
    state.searchedSongs = songs
  },
  _update_searched_album (state, { albums }) {
    state.searchedAlbums = albums
  }
}

const actions = {
  searchSongsAction ({ commit }, { key, page }) {
    const songs = searchSongs(key, page)
    commit('_update_searched_songs', { songs })
  },
  searchAlbumsAction ({ commit }, { key, page }) {
    // TODO: change to the exact albums
    commit('_update_searched_album', { albums: [] })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
