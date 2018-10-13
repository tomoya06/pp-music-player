<template>
  <div>
    <search-bar></search-bar>
    <search-result-list></search-result-list>
  </div>
</template>
<script>
import SearchBar from '@/components/Browser/SearchBar.vue'
import SearchResultList from '@/components/Browser/SearchResultList.vue'

export default {
  name: 'browser',
  components: {
    SearchBar,
    SearchResultList
  }
}
</script>
