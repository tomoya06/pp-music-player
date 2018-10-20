<template>
<v-container grid-list-md>
  <v-layout row wrap v-if="!isLoaded">
    <v-flex xs12 sm8>
      <loading></loading>
    </v-flex>
  </v-layout>
  <v-layout row wrap v-if="isLoaded && !isError">
    <v-flex xs12 sm4 order-sm2>
      <album-sidebar
        :album="album"
      ></album-sidebar>
    </v-flex>
    <v-flex xs12 sm8>
      <songs-list
        :songs="songs"
      ></songs-list>
    </v-flex>
  </v-layout>
  <!-- TODO: error indicator -->
</v-container>
</template>

<script>

import { albumDetailsService } from '@/services/details.js'
import { mapState } from 'vuex'

import AlbumSidebar from '@/components/Details/AlbumSidebar.vue'
import SongsList from '@/components/Common/SongsList.vue'
import Loading from '@/components/Common/Loading.vue'

export default {

  name: 'album-details',

  data () {
    return {
    	album_id: this.$route.params.id,
    	songs: [],
    	album: {},
      isLoaded: false,
      isError: false,
    }
  },

  computed: {
  	...mapState({
  		host: state => `${state.host}${state.searchSource?'': '/local'}`,
  	})
  },

  mounted: function() {
  	// const that = this
  	console.log(this.host, this.album_id);

  	albumDetailsService(this.host, this.album_id)
  		.then((json) => {

        this.songs = json.songs;
        this.album = json.album;

        this.isLoaded = true;

        // console.log(this.songs, this.album);
  		})
  		.catch((error) => {

  		})

  },

  components: {
    AlbumSidebar,
    SongsList,
    Loading,
  }

}
</script>
