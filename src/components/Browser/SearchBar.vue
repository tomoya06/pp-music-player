<template>
  <v-container grid-list-sm>
    <v-form ref="form" lazy-validation>
      <v-layout row wrap>
        <v-flex xs12 sm9>
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
        <v-flex xs12 sm3>
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
      searchKey: {
        get: function() {
          return this.$store.state.browser.currentKeyword;
        },
        set: function(newValue) {
          this.$store.commit("browser/_update_current_keyword", {keyword: newValue})
        }
      },
    },

    methods: {
      
      launchSearch() {
        if (!this.$refs.form.validate()) {
          return;
        }

        this.$store.dispatch('browser/searchAction', {
          type: this.selectedType,
          page: 0,
          limit: 20
        })

    }
  }
};
</script>
