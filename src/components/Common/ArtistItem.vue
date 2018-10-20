<template>
	<v-flex xs6 sm4 pa-1>
		<v-hover>
			<v-card
				slot-scope="{hover}"
				:class="`elevation-${hover?18:2}`"
			>
			<v-img
				:src="avatarURL"
				aspect-ratio="1"
				style="border-radius: 50%; margin: 6px"
			></v-img>
			<v-card-text primary-title>
				<h3 class="singleLine">{{ name }}</h3>
				<div class="singleLine grey--text"><pre>{{ alias }} </pre></div>
				<div class="singleLine grey--text">{{ albumSize }}</div>
			</v-card-text>
			<v-card-actions>
				<v-btn icon><v-icon>star</v-icon></v-btn>
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

  name: 'artist-item',

  props: {
  	artist: {
  		type: Object,
  		required: true,
  	}
  },

  data () {
    return {

    }
  },

  computed: {
    artistId: function() {
      return this.$props.artist.id 
    },
  	avatarURL: function() {
  		return this.$props.artist.picUrl
  	},
    name: function() {
    	return this.$props.artist.name
    },
    albumSize: function() {
    	const _size = this.$props.artist.albumSize
    	return _size + (_size>1 ? ' albums': ' album')
    },
    alias: function() {
    	var _alias = ''
    	const _artist = this.$props.artist
    	if (!_artist.alias && _artist.alias instanceof Array && _artist.alias.length > 0) {
    		_alias += _artist.alias.join('/')
    	}
    	if (_artist.trans) {
    		_alias += (_alias > '') ? '/': ''
    		_alias += _artist.trans
    	}
    	return _alias
    },
    routerTo: function() {
      return {
        path: `/details/artist/${this.artistId}`
      }
    }
  }
}
</script>