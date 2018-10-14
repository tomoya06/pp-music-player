<template>
  <div>
    <search-bar></search-bar>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 sm10 md8>
          <v-card>
            <!-- Switch Result Lists on Type -->
            <div v-if="!isSearching">
              <search-songs-result-list
              v-if="selectedType==='song'"
              ></search-songs-result-list>
              <search-albums-result-list
              v-else-if="selectedType==='album'"
              ></search-albums-result-list> 
              <search-artists-result-list
              v-else-if="selectedType==='artist'"
              ></search-artists-result-list> 
              <search-playlists-result-list
              v-else-if="selectedType==='playlist'"
              ></search-playlists-result-list> 
            </div>
            <!-- Loading & Error Indicator -->
            <loading v-else-if="!isSearchError"></loading>
            <v-alert type="info" :value="!isSearching && isSearchError && currentError">
              oops: {{currentError}}
            </v-alert>
          </v-card>     
        </v-flex>
      </v-layout>
      <v-snackbar
        v-model="countZero"
        :timeout="3000"
      >
        {{currentCountMessage}} 
        <v-btn flat color="primary" @click.native="countZero = false">Close</v-btn>
      </v-snackbar>
    </v-container>
  </div>
</template>
<script>
  import SearchBar from '@/components/Browser/SearchBar.vue'
  import Loading from '@/components/Common/Loading.vue'

  import SearchSongsResultList from '@/components/Browser/SearchSongsResultList.vue'
  import SearchAlbumsResultList from '@/components/Browser/SearchAlbumsResultList.vue'
  import SearchArtistsResultList from '@/components/Browser/SearchArtistsResultList.vue'
  import SearchPlaylistsResultList from '@/components/Browser/SearchPlaylistsResultList.vue'

  import { mapState } from 'vuex'

  export default {
    name: 'browser',
    computed: {
     ...mapState({
      selectedType: state => state.browser.selectedType.text,
      isSearching: state => state.browser.isSearching,
      isSearchError: state => state.browser.isSearchError,
      currentError: state => state.browser.currentError,

      currentCountMessage: state => {
        const _count = state.browser.currentResourcesCount
        return _count>0? `${_count} ${state.browser.selectedType.text}${_count?'s':''} found.` : `oops. nothing's found. `
      },
    }),
     countZero: {
      get: function() {
        return this.$store.state.browser.turnOnZeroSnackbar
      },
      set: function(newValue) {
        this.$store.commit('browser/_turn_off_zero_snackbar')
      }
     }
  },
  components: {
    SearchBar,
    SearchSongsResultList,
    SearchAlbumsResultList,
    SearchArtistsResultList,
    SearchPlaylistsResultList,
    Loading,
  }
}
</script>
