import { getCollectionsService, keywords, markLikeService } from '@/services/collection.js'

const state = {

  // index: 0: songs; 1: albums; 2: artists;
  likedResources: [null, null, null],

  // Status: 1: loading, 2: loaded, 3: error, 0: error reset
  loadStatus: [1, 1, 1],

  loadErrors: [null, null, null],

}

const mutations = {
  _loaded_liked_resources (state, { resources, index }) {
    state.likedResources[index] = resources
    state.loadStatus[index] = 2
    state.loadStatus = [...state.loadStatus]

    console.log(state.likedResources, state.loadStatus)
  },
  _load_liked_error (state, { index, error }) {
    state.loadStatus[index] = 3
    state.loadStatus = Object.assign(state.loadStatus)

    state.loadErrors[index] = error

    console.log(state)
  }
}

const actions = {

  getCollectionsAction ({ state, commit, rootGetters, rootState }) {
    const host = rootGetters.urlHost

    const userId = rootState.userId

    for (let i = 0; i < 3; i++) {
      getCollectionsService(host, userId, i)
        .then((results) => {
          commit('_loaded_liked_resources', {
            resources: results[keywords[i]],
            index: i
          })
        })
        .catch((error) => {
          commit('_load_liked_error', {
            index: i,
            error
          })
        })
    }
  },

  markLikesAction ({state, rootGetters, dispatch, rootState}, {resourceId, typeId, markLike}) {
    const userId = rootState.userId
    const host = rootGetters.urlHost

    if (userId) {
      markLikeService(host, userId, resourceId, typeId, markLike)
        .then((results) => {
          dispatch('getCollectionsAction')
        })
        .catch((error) => {
          console.log(error)
        })
    } else {
      console.log(`[USER ERROR]: No user's login yet.`)
    }
  }

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
