<template>
  <v-container>
    <v-form ref="form" lazy-validation>
      <v-layout row wrap>
        <v-flex xs12 sm9 px-1>
          <v-text-field
          v-model="searchKey"
          label="Search Keyword"
          :rules="keywordRules"
          :append-icon="'search'"
          required
          @click:append="launchSearch"
          @keyup.enter="launchSearch"
          ></v-text-field>
        </v-flex>
        <v-flex xs12 sm3 px-1>
          <v-select
          v-model="selectedType"
          :items="searchTypes"
          item-text="display"
          label="Filter"
          return-object
          ></v-select>
        </v-flex>
      </v-layout>
    </v-form>
  </v-container>
</template>
<script>
  import { mapActions, mapState } from "vuex";

  export default {
    name: "search-bar",
    data() {
      return {
        searchKey: "",
        keywordRules: [v => !!v || "Keyword is required"]
      };
    },
    computed: {
      ...mapState({
        searchTypes: state => state.browser.searchTypes,
      }),
      selectedType: {
        get: function() {
          return this.$store.state.browser.selectedType;
        },
        set: function(newValue) {
          this.$store.commit("browser/_update_search_type", {
            selectedType: newValue
          });
          this.launchSearch();
        }
      },
    },

    methods: {
      // switchType(index) {
      //   this.searchType = this.searchTypes[index];
      // },

      launchSearch() {
        if (!this.$refs.form.validate()) {
          return;
        }

        console.log(`Search keyword ${this.searchKey} for ${this.selectedType.text}...`)

        this.$store.dispatch('browser/searchAction', {
          type: this.selectedType,
          key: this.searchKey,
          page: 0,
          limit: 20
        })

    }
  }
};
</script>
