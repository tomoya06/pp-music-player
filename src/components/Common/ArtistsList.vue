<template>
	<v-container
	grid-list-xs fluid
	>
	<v-layout row wrap>
		<artist-item
		v-for="artist in artists"
		:artist="artist"
		:key="artist.id"
		></artist-item>
	</v-layout>		
</v-container>   
</template>

<script>

import { mapState } from 'vuex'
import ArtistItem from '@/components/Common/ArtistItem.vue'

export default {

  name: 'artists-list',

  props: {
  	artists: {
  		type: Array,
  		required: true,
  	}
  },
  // computed: {
  // 	...mapState({
  // 		searchedArtists: state => state.browser.searchedResources['artist'],
  // 	})
  // },

  components: {
  	ArtistItem
  }

}
</script>

<style lang="css" scoped>
</style>