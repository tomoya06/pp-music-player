<template>
	<v-container>
		<v-layout row wrap>
			<v-flex xs12 sm10 md8>
				<v-card>
					<v-container 
					v-if="!isSearching"
					grid-list-xs fluid
					>
					<v-layout row wrap>
						<album-item
						v-for="album in searchedAlbums"
						:album="album"
						:source="selectedSource"
						></album-item>
					</v-layout>		
				</v-container>
				<loading v-else-if="!isSearchError"></loading>
				<v-alert type="info" :value="!isSearching && isSearchError && currentError">
					oops: {{currentError}}
				</v-alert>
			</v-card>	      
		</v-flex>
	</v-layout>
</v-container>	
</template>

<script>
	import { mapState } from 'vuex'

	import Loading from '@/components/Common/Loading.vue'
	import AlbumItem from '@/components/Common/AlbumItem.vue'

	export default {
		name: 'search-albums-result-list',

		computed: {
			...mapState({
				searchedAlbums: state => state.browser.searchedAlbums,
				selectedSource: state => state.browser.selectedSource,
				isSearching: state => state.browser.isSearching,
				isSearchError: state => state.browser.isSearchError,
				// currentError: state => state.browser.currentError,
			}),
			currentError: {
				get: function() {
					const _error = this.$store.state.browser.currentError
					console.log('get error: ', _error)

					return _error
				},
			}
		},

		components: {
			AlbumItem,
			Loading,
		}
	}
</script>