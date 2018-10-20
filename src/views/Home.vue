<template>
	<v-container>
	  <v-layout row wrap my-4>
	    <v-flex>
	      <h1 class="display-4">Enjoy Music</h1>
	    </v-flex>
	  </v-layout>
	  <v-layout row wrap my-4>
	  </v-layout>
	  <v-layout :class="[{'opacity1': isCntLoaded}, 'opacityTrans']" row wrap my-4>
	    <v-flex>
	      <h4 class="display-1">{{songsCnt}} songs</h4>
	      <h4 class="display-1">{{albumsCnt}} albums </h4>
	      <h4 class="display-1">from {{artistsCnt}} artists</h4>
	    </v-flex>
	  </v-layout>
	  <v-layout row wrap my-4>
		    <v-flex xs12 sm4 pa-1 v-for="(card, index) in cards" :key="index">
			  	<router-link :to="card.router">
			  		<v-hover>
				      <v-card
				      	slot-scope="{hover}"
								:class="`elevation-${hover?18:2}`"
				      >
				        <v-card-title primary-title>
				        	<div>
					          <h3>{{ card.title }}</h3>
				        	</div>
				        </v-card-title>
				        <v-card-text>
			        		<div>{{ card.text }}</div>
				        </v-card-text>
				      </v-card>
			  		</v-hover>
			  	</router-link>
		    </v-flex>
	  </v-layout>
	</v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {

  name: 'home',

  data() {
  	return {
  		cards: [{
  			title: 'Browser',
  			text: '',
  			router: {path: '/browser'}
  		}, {
  			title: 'Collections',
  			text: '',
  			router: {path: '/collections'}
  		}, {
  			title: 'Setting',
  			text: '',
  			router: {path: '/setting'}
  		}],
  	}
  },

  computed: {
  	...mapState({
  		songsCnt: state => state.home.songsCnt,
  		albumsCnt: state => state.home.albumsCnt,
  		artistsCnt: state => state.home.artistsCnt,
  		isCntLoaded: state => state.home.isCntLoaded,
  	})
  },

  mounted: function() {
		this.$store.dispatch('home/updateCountsAction');
  }

}
</script>
