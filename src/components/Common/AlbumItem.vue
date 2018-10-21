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
				<div class="singleLine grey--text">{{ `${year} / ${size}` }}</div>
			</v-card-text>
			<v-card-actions>
				<v-btn icon @click="markAlbum"><v-icon>star</v-icon></v-btn>
				<v-spacer></v-spacer>
				<router-link :to="routerTo">
					<v-btn icon><v-icon>keyboard_arrow_right</v-icon></v-btn>
				</router-link>
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
			unlike: {
				type: Boolean,
				required: false,
			}
		},

		computed: {
			routerTo: function() {
				return {
					path: '/details/album/'+this.$props.album.id
				}
			},
			id: function() {
				return this.$props.album.id
			},
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
				const _size = this.$props.album.size
				return `${_size} ${_size>1?'songs':'song'}`
			},
			type: function() {
				return this.$props.album.type 
			},
			year: function() {
				return (new Date(this.$props.album.publishTime)).getFullYear()
			}
		},

		methods: {
			markAlbum: function() {
				const _payload = {
					resourceId: this.id,
					typeId: 10,
				}
				if (this.$props.unlike) {
					_payload.markLike = false
				} else {
					_payload.markLike = true
				}

				this.$store.dispatch('collection/markLikesAction', _payload)
			}
		},
	}
</script>
