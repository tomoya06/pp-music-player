<template>
	<v-flex xs12 pa-1>
		<v-hover>
			<v-card
			slot-scope="{hover}"
			:class="`elevation-${hover?18:2}`"
			>
			<v-img
			:src="coverURL"
			aspect-ratio="2.76"
			></v-img>
			<v-card-text primary-title>
				<h3 class="singleLine">{{ name }}</h3>
				<div class="singleLine" style="color: #e0e0e0">{{ `@${creator} / ${size} songs` }}</div>
				<div><pre> </pre></div>
				<div class="singleLine grey--text">{{ desc }}</div>
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

		name: 'playlist-item',

		props: {
			playlist: {
				type: Object,
				required: true,
			}
		},

		computed: {
			name: function() {
				return this.$props.playlist.name
			},
			creator: function() {
				return this.$props.playlist.creator.nickname
			}, 
			desc: function() {
				return this.$props.playlist.description
			},
			coverURL: function() {
				return this.$props.playlist.coverImgUrl
			},
			size: function() {
				return this.$props.playlist.trackCount
			}
		}

	}
</script>
