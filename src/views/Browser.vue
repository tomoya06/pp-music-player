<template>
  <div>
    <search-bar></search-bar>
    <search-songs-result-list></search-songs-result-list>
  </div>
</template>
<script>
import SearchBar from '@/components/Browser/SearchBar.vue'
import SearchSongsResultList from '@/components/Browser/SearchSongsResultList.vue'

export default {
  name: 'browser',
  components: {
    SearchBar,
    SearchSongsResultList
  }
}
</script>
