<template>
<v-container grid-list-xs fluid>
	<v-layout row wrap>
		<album-item
		v-for="album in albums"
		:album="album"
		:key="album.id"
		></album-item>
	</v-layout>		
</v-container>   
</template>

<script>
	import { mapState } from 'vuex'

	import AlbumItem from '@/components/Common/AlbumItem.vue'

	export default {
		name: 'albums-list',

		props: {
			albums: {
				type: Array,
				required: true,
			}
		},

		// computed: {
		// 	...mapState({
		// 		searchedAlbums: state => state.browser.searchedResources['album'],				
		// 	}),
			
		// },

		components: {
			AlbumItem,
		}
	}
</script>