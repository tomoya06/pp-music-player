import { searchSongs, searchAlbums } from '@/services/browser.js'

const baseSearchedSongs = {
  xiami: {
    songList: []
  },
  qq: {
    songList: []
  },
  netease: {
    songList: []
  }
}

const state = {
  searchedSongs: baseSearchedSongs,
  searchSources: ['xiami', 'netease', 'qq'],
  searchedAlbums: []
}

const mutations = {
  _reset_searched_songs(state) {
    state.searchedSongs = baseSearchedSongs
  },
  _update_searched_songs(state, { songs }) {
    state.searchedSongs = songs
  },
  _update_searched_album(state, { albums }) {
    state.searchedAlbums = albums
  },
  _update_search_sources(state, { selectedSources }) {
    state.searchSources = selectedSources
  }
}

const actions = {
  searchSongsAction({ commit }, { key, page }) {
    searchSongs(key, page)
      .then((songs) => {
        commit('_update_searched_songs', { songs })
      })
      .catch((error) => { })
  },
  searchAlbumsAction({ commit }, { key, page }) {
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
