<template>
	<v-container fluid>
	<v-layout row wrap>
		<playlist-item
		v-for="playlist in playlists"
		:playlist="playlist"
		:key="playlist.id"
		></playlist-item>
	</v-layout>		
</v-container>   
</template>

<script>
	import { mapState } from 'vuex'

	import PlaylistItem from '@/components/Common/PlaylistItem.vue'

	export default {

		name: 'playlists-list',

		props: {
			playlists: {
				type: Array,
				required: true,
			}
		},
		// computed: {
		// 	...mapState({
		// 		searchedPlaylists: state => state.browser.searchedResources['playlist'],
		// 	})
		// },

		components: {
			PlaylistItem,
		}

	}
</script>
