<template>
	<v-container>
		<!-- setting container -->
		<v-layout row wrap>
		  <v-flex xs12 md8>
				<v-form>
					<!-- host setting -->
					<v-text-field
					label="Host"
					outline
					v-model="host"
					@blur.prevent="updateHost"
					></v-text-field>
					<!-- use local/online resource when searching? -->
					<v-select
					outline
					:items="searchSources"
					v-model="searchSource"
					label="Search from Where First?"
					></v-select>
					<!-- use Dark theme? -->
					<v-select
					outline
					:items="themes"
					v-model="isDarkTheme"
					label="App Theme"
					></v-select>
				</v-form>
		  </v-flex>
		</v-layout>
		<!-- Setting saved alert -->
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

				searchSources: [{
					text: 'From DB',
					value: 0,
				}, {
					text: 'From 163',
					value: 1,
				}],

				themes: [{
					text: 'Dark',
					value: true,
				}, {
					text: 'Light',
					value: false,
				}]
			}
		},

		computed: {
			host: {
				get: function() {
					return this.$store.state.host
				},
				set: function(newValue) {
					this.$store.commit('_update_host', {host: newValue})
				},
			},
			searchSource: {
				get: function() {
					return this.$store.state.searchSource 
				},
				set: function(newValue) {
					this.$store.commit('_update_search_source', {source: newValue})
					this.snackbarOn = true 
				}
			},
			isDarkTheme: {
				get: function() {
					return this.$store.state.isDarkTheme
				},
				set: function(newValue) {
					this.$store.commit('_update_app_theme', {isDarkTheme: newValue})
				}
			}
		},

		methods: {
			updateHost() {
				this.$store.commit('_update_host', {host: this.host})
				this.snackbarOn = true 
			},
		}
	}
</script>