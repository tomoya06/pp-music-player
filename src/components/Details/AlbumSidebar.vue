<template>
	<v-hover>
		<v-card
			slot-scope="{hover}"
			:class="`elevation-${hover?18:2}`"
		>
			<v-img
				:src="avatarURL"
				aspect-ratio="1"
			></v-img>	  
			<v-card-title primary-title>
				<div>
					<h3 class="headline mb-2">{{ name }}</h3>
				  <div>{{ artist }}</div>
				  <div class="grey--text">{{ publishTime }}</div>
				  <div class="grey--text">{{ size }}</div>
				</div>
			</v-card-title>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn icon @click="show = !show">
          <v-icon>{{ show ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}</v-icon>
        </v-btn>
      </v-card-actions>
			<v-slide-y-transition>
        <v-card-text v-show="show">
        	<p style="white-space: pre-wrap;">{{ desc }}</p>
        </v-card-text>
      </v-slide-y-transition>
		</v-card>
	</v-hover>
</template>

<script>
export default {

  name: 'album-sidebar',

  props: {
  	album: {
  		type: Object,
  		required: true,
  	}
  },

  data() {
  	return {
  		show: true,
  	}
  },

  computed: {
  	name: function() {return this.$props.album.name},
  	publishTime: function () {
			const date = new Date(this.$props.album.publishTime);
			return `${date.getFullYear()}/${date.getMonth()+1}/${date.getDay()+1}`
		},
		size: function() {
			return `${this.$props.album.size} ${this.$props.album.size>1?'songs': 'song'}`
		},
		desc: function() {
			return this.$props.album.description
		},
		avatarURL: function() {
			return this.$props.album.picUrl
		},
		artist: function () {
			return this.$props.album.artist.name
		},
  },

  methods: {
  	toggleDesc: function() {
  		this.show = !this.show;
  		console.log('toggle');
  	}
  },

  mounted: function() {
  	const that = this;
  	this.$nextTick(function() {
  		// setTimeout(function() {
  		// 	that.show = false;
  		// }, 1500)
  	})
  }

}
</script>
