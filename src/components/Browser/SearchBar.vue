<template>
  <div>
    <span>
      <input type="text" v-model="searchKey">
      <button @click="launchSearch()">search!</button>
    </span>
    <span v-for="type in searchTypes" :key="type" >
      <input type="radio" :id="type" :value="type" v-model="searchType">
      <label for="type">{{ type }}</label>
    </span>
  </div>
</template>
<script>
import { mapActions } from 'vuex'

const _searchTypes = ['Songs', 'Albums']

export default {
  name: 'search-bar',
  data () {
    return {
      searchKey: '',
      searchTypes: _searchTypes,
      searchType: _searchTypes[0]
    }
  },
  methods: {
    launchSearch () {
      console.log(`Search keyword ${this.searchKey} for ${this.searchType}...`)
      this.$store.commit('browser/_reset_searched_songs');
      switch (this.searchType) {
        case _searchTypes[0]:
          this.$store.dispatch('browser/searchSongsAction', {
            key: this.searchKey,
            page: 1
          })
          break
        case _searchTypes[1]:
          break
        default:
          break
      }
    }
  }
}
</script>
