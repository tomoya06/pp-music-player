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

const baseSearchSources = ['netease', 'xiami', 'qq']

const state = {
  searchSources: baseSearchedSongs,
  selectedSource: baseSearchedSongs[0],
  searchedSongs: [],
  searchedAlbums: [],
  isSearching: false,
  isSearchError: false,
}

const mutations = {
  _reset_searched_songs(state) {
    state.isSearching = true
    state.isSearchError = false
    state.searchedSongs = []
  },
  _update_searched_songs(state, { songs }) {
    state.searchedSongs = songs
    state.isSearchError = false
    state.isSearching = false
  },
  _update_searched_songs_error(state, { error }) {
    state.searchedSongs = []
    state.isSearchError = true
    state.isSearching = false
  },
  _update_searched_album(state, { albums }) {
    state.searchedAlbums = albums
  },
  _update_search_source(state, { selectedSource }) {
    state.selectedSource = selectedSource
  }
}

const actions = {
  searchSongsAction({ commit }, { source, key, page }) {
    // commit('_update_search_source', { selectedSource: source })
    commit('_reset_searched_songs')
    searchSongs(source, key, page)
      .then((json) => {
        commit('_update_searched_songs', { songs: json.songList })
      })
      .catch((error) => {
        commit('_update_searched_songs_error', { error })
      })
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
