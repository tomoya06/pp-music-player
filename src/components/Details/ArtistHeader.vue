<template>
	<v-layout row wrap>
		<v-flex xs12>
			<v-card>
				<v-img
					:src="avatarUrl"
					aspect-ratio="1"
					style="max-width: 240px"
				></v-img>		      
			</v-card>
		</v-flex>
    <v-flex xs12>
    	<v-card>
	      <v-card-text primary-title>
	        <div>
	        	<h3 class="headline mb-2">{{ name }}</h3>
	        	<div>{{ albumSize }} / {{ songSize }}</div>
	        </div>
	      </v-card-text>
    	</v-card>
    </v-flex>
		<v-flex xs12>
			<v-hover>
			  <v-card
			  slot-scope="{hover}"
				:class="`elevation-${hover?18:2}`"
			  >
			    <v-card-text>
			      <p style="white-space: pre-wrap;">{{ briefDesc }}</p>
			    </v-card-text>
			  </v-card>
			</v-hover>
		</v-flex>
	</v-layout>
</template>

<script>
export default {

  name: 'artist-header',

  props: {
  	artist: {
  		type: Object,
  		required: true,
  	},
  },

  computed: {
  	avatarUrl: function () { return this.$props.artist.picUrl },
  	name: function() { return this.$props.artist.name },
  	albumSize: function () {
  		const _size = this.$props.artist.albumSize;
  		return `${_size} album${_size>1?'s': ''}`
  	},
  	songSize: function () {
  		const _size = this.$props.artist.musicSize;
  		return `${_size} song${_size>1?'s': ''}`
  	},
  	briefDesc: function () { return this.$props.artist.briefDesc || 'Oops... No Description Yet -(' },
  }

}
</script>
