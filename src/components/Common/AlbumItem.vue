<template>
	<v-flex xs6 sm4 pa-1>
		<v-hover>
			<v-card
				slot-scope="{hover}"
				:class="`elevation-${hover?18:2}`"
			>
			<v-img
				:src="coverURL"
				aspect-ratio="1"
			></v-img>
			<v-card-text primary-title>
				<h3 class="singleLine">{{ name }}</h3>
				<div class="singleLine">{{ artists }}</div>
			</v-card-text>
			<v-card-actions>
				<v-btn icon><v-icon>add</v-icon></v-btn>
				<v-btn icon><v-icon>star</v-icon></v-btn>
			</v-card-actions>
		</v-card>
	</v-hover>
</v-flex>
</template>

<script>
	export default {

		name: 'album-item',

		props: {
			album: {
				type: Object,
				required: true,
			},
			source: {
				type: String,
				required: true,
			}
		},

		computed: {
			name: function() {
				return this.$props.album.name 
			},
			artists: function() {
				return this.$props.album.artist.name
			},
			coverURL: function() {
				return this.$props.album.picUrl 
			},
			size: function() {
				return this.$props.album.size
			},
			type: function() {
				return this.$props.album.type 
			},
			year: function() {
				return (new Date(this.$props.album.publishTime)).getFullYear()
			}
		}
	}
</script>
