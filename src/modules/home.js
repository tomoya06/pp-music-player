import { homeService } from '@/services/home.js'

const state = {
  songsCnt: 0,
  albumsCnt: 0,
  artistsCnt: 0,
  isCntLoaded: false
}

const mutations = {
  _update_all_cnts (state, { songs, albums, artists }) {
    state.isCntLoaded = true
    state.songsCnt = songs
    state.albumsCnt = albums
    state.artistsCnt = artists
  },
  _reset_all_cnts (state) {
    state.songCnt = 0
    state.albumCnt = 0
    state.artistsCnt = 0
    state.isCntLoaded = false
  }
}

const actions = {
  updateCountsAction ({ state, commit, rootGetters, rootState }) {
    if (state.isCntLoaded) { return }
    homeService(rootGetters.urlHost)
      .then((json) => {
        console.log(json)
        commit('_update_all_cnts', {
          songs: json.songs_cnt,
          albums: json.albums_cnt,
          artists: json.artists_cnt
        })
        console.log(state)
      })
      .catch((error) => {
        commit('_reset_all_cnts')
      })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
