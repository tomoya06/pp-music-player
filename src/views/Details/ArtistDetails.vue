<template>
	<v-container grid-list-md>
		<v-layout row wrap v-if="!isLoaded">
		  <loading></loading>
		</v-layout>
		<v-layout row wrap v-else>
		  <v-flex xs12 md4>
		    <artist-header :artist="artistInfo"></artist-header>
		  </v-flex>
		  <v-flex xs12 md8>
		    <v-tabs
		      color="primary"
		      dark
		      slider-color="primary"
		      v-model="activeTab"
		    >
		      <v-tab
		      	v-for="(tab, index) in tabs"
		      	:key="index"
		      	ripple
		      >
		        {{ tab.text }}
		      </v-tab>
		    </v-tabs>
		    <v-tabs-items v-model="activeTab">
		      <v-tab-item :href="'#songs'">
		      	<v-card>
			        <songs-list :songs="hotSongs"></songs-list>
		      	</v-card>
		      </v-tab-item>
		      <v-tab-item :href="'#albums'">
		      	<v-card>
			        <albums-list :albums="albums"></albums-list>
		      	</v-card>
		      </v-tab-item>
		    </v-tabs-items>
		  </v-flex>
		</v-layout>
	</v-container>
</template>

<script>
import ArtistHeader from '@/components/Details/ArtistHeader.vue'
import Loading from '@/components/Common/Loading.vue'
import SongsList from '@/components/Common/SongsList.vue'
import AlbumsList from '@/components/Common/AlbumsList.vue'

import { artistDetailsService, artistAlbumsService } from '@/services/details.js'

import { mapState } from 'vuex'

export default {

  name: 'artist-details',

  data() {
  	return {
  		artistId: this.$route.params.id,
  		hotSongs: [],
  		albums: [],
  		artistInfo: {},
  		isLoaded: false,
  		isError: false,
  		isAlbumsLoaded: false,
  		isAlbumsError: false,

  		activeTab: 0,
  		tabs: [{
  			text: 'Hot Songs',
  		}, {
  			text: 'Albums',
  		}]
  	}
  },

	computed: {
		...mapState({
			host: state => `${state.host}${state.searchSource?'': '/local'}`,
		})
	}, 

	mounted: function() {

		console.log(this.host, this.artistId);

		artistDetailsService(this.host, this.artistId)
			.then((result) => {
				this.artistInfo = result.artist;
				this.hotSongs = result.hotSongs;
				this.isLoaded = true;
			})
			.catch((error) => {
				this.isError = true;
				this.isLoaded = true;
			})

		artistAlbumsService(this.host, this.artistId)
			.then((result) => {
				this.albums = result.hotAlbums;
				this.isLoaded = true;
			})
			.catch((error) => {
				this.isLoaded = true;
				this.isAlbumsError = true;
			})

	},

  components: {
  	ArtistHeader,
  	AlbumsList,
  	SongsList,
  	Loading,
  }
}
</script>

<style lang="css" scoped>
</style>