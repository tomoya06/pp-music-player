<template>
	<v-container>
	  <v-layout row wrap>
	    <v-flex xs12 md8>
				<v-tabs
				  color="primary"
				  dark
				  slider-color="primary"
				  v-model="activeTab"
				>
				  <v-tab
				  	v-for="(tab, index) in tabs"
				  	:key="index"
				  	ripple
				  >
				    {{ tab.text }}
				  </v-tab>
				</v-tabs>
				<v-tabs-items v-model="activeTab">
				  <v-tab-item>
				  	<v-card>
				  	  <loading v-if="loadStatus[0]==1"></loading>
					    <songs-list v-else-if="loadStatus[0]==2" :songs="resources[0]"></songs-list>
				  	</v-card>
				  </v-tab-item>
				  <v-tab-item>
				  	<v-card>
				  	  <loading v-if="loadStatus[1]==1"></loading>
					    <albums-list v-else-if="loadStatus[1]==2" :albums="resources[1]"></albums-list>
				  	</v-card>
				  </v-tab-item>
				  <v-tab-item>
				  	<v-card>
				  	  <loading v-if="loadStatus[2]==1"></loading>
					    <artists-list v-else-if="loadStatus[2]==2" :artists="resources[2]"></artists-list>
				  	</v-card>
				  </v-tab-item>
				</v-tabs-items>
	    </v-flex>
	  </v-layout>
	</v-container>

</template>

<script>
import AlbumsList from '@/components/Common/AlbumsList.vue'
import SongsList from '@/components/Common/SongsList.vue'
import ArtistsList from '@/components/Common/ArtistsList.vue'
import Loading from '@/components/Common/Loading.vue'

import { getCollections } from '@/services/collection.js'
import { mapState } from 'vuex'

export default {

  name: 'collection',

  data () {
    return {
    	activeTab: 0,
    	tabs: [{
    		text: 'Songs',
    		href: 'songs'
    	}, {
    		text: 'Albums',
    		href: 'albums'
    	}, {
    		text: 'Artists',
    		href: 'artists'
    	}]
    }
  },

  computed: {
  	...mapState({
  		resources: state => state.collection.likedResources,
  		loadStatus: state => state.collection.loadStatus,
  	})
  },

  mounted: function() {
  	this.$store.dispatch('collection/getCollectionsAction');
  },

  components: {
  	AlbumsList,
  	SongsList,
  	ArtistsList,
  	Loading,
  }
}
</script>

