<template>
  <div>
    <search-bar></search-bar>
    <search-songs-result-list
    	v-if="selectedType==='song'"
    ></search-songs-result-list>
    <search-albums-result-list
    	v-else-if="selectedType==='album'"
    ></search-albums-result-list>
  </div>
</template>
<script>
import SearchBar from '@/components/Browser/SearchBar.vue'
import SearchSongsResultList from '@/components/Browser/SearchSongsResultList.vue'
import SearchAlbumsResultList from '@/components/Browser/SearchAlbumsResultList.vue'

import { mapState } from 'vuex'

export default {
  name: 'browser',
  computed: {
  	...mapState({
  		selectedType: state => state.browser.selectedType
  	})
  },
  components: {
    SearchBar,
    SearchSongsResultList,
    SearchAlbumsResultList,
  }
}
</script>
