<template>
  <div>
    <search-bar></search-bar>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 sm10 md8>
          <v-card>
            <!-- Switch Result Lists on Type -->
            <div v-if="!isSearching">
              <songs-list
                v-if="selectedType==='song'"
                :songs="currentSearchedResources"
              ></songs-list>
              <albums-list
                v-else-if="selectedType==='album'"
                :albums="currentSearchedResources"
              ></albums-list> 
              <artists-list
                v-else-if="selectedType==='artist'"
                :artists="currentSearchedResources"
              ></artists-list> 
              <playlists-list
                v-else-if="selectedType==='playlist'"
                :playlists="currentSearchedResources"
              ></playlists-list> 
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

  import SongsList from '@/components/Common/SongsList.vue'
  import AlbumsList from '@/components/Common/AlbumsList.vue'
  import ArtistsList from '@/components/Common/ArtistsList.vue'
  import PlaylistsList from '@/components/Common/PlaylistsList.vue'

  import { mapState } from 'vuex'

  export default {
    name: 'browser',
    computed: {
     ...mapState({
      selectedType: state => state.browser.selectedType.text,
      isSearching: state => state.browser.isSearching,
      isSearchError: state => state.browser.isSearchError,
      currentError: state => state.browser.currentError,

      currentSearchedResources: state => state.browser.searchedResources[state.browser.selectedType.text],

      currentCountMessage: state => {
        const _count = state.browser.currentResourcesCount
        return _count>0? `${_count} ${state.browser.selectedType.text}${_count?'s':''} found.` : `Oops. Nothing's found. `
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
    SongsList,
    AlbumsList,
    ArtistsList,
    PlaylistsList,
    Loading,
  }
}
</script>
