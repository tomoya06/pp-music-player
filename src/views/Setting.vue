<template>
	<v-container>
		<v-form>
			<v-text-field
			label="Host"
			outline
			v-model="host"
			@blur.prevent="updateHost"
			></v-text-field>
		</v-form>
		<v-snackbar
		v-model="snackbarOn"
		bottom
		right
		:timeout="3000"
		>
		Settings are updated. 
		<v-btn flat color="primary" @click.native="snackbarOn = false">Close</v-btn>
	</v-snackbar>
</v-container>
</template>

<script>
	export default {

		name: 'setting',

		data() {
			return {
				snackbarOn: false,
			}
		},

		computed: {
			host: {
				get: function() {
					return this.$store.state.browser.host
				},
				set: function(newValue) {
  			// this.host = newValue
  			this.$store.commit('browser/_update_host', {host: newValue})
  		}
  	}
  },

  methods: {
  	updateHost() {
  		this.snackbarOn = true 
  		this.$store.commit('browser/_update_host', {host: this.host})
  	},
  }
}
</script>