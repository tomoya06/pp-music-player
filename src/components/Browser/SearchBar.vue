<template>
  <v-container>
    <v-form ref="form" lazy-validation>
      <v-layout row wrap>
        <v-flex xs12 md6 sm12 px-1>
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
        <v-flex xs12 md3 sm6 px-1>
          <v-select
            v-model="selectedSources"
            :items="sources"
            attach
            multiple
            label="Search From..."
            @change="updateSources"
          ></v-select>
        </v-flex>
        <v-flex xs12 md3 sm6 px-1>
          <v-select
            v-model="searchType"
            :items="searchTypes"
            label="Filter"
          ></v-select>
        </v-flex>
      </v-layout>
    </v-form>
  </v-container>
</template>
<script>
import { mapActions } from "vuex";

const _searchTypes = ["Songs", "Albums"];

export default {
  name: "search-bar",
  data() {
    return {
      searchKey: "",
      searchTypes: _searchTypes,
      searchType: _searchTypes[0],
      keywordRules: [v => !!v || "Keyword is required"],
      sources: ["xiami", "netease", "qq"],
      selectedSources: ["xiami", "netease", "qq"]
    };
  },
  methods: {
    switchType(index) {
      this.searchType = this.searchTypes[index];
    },
    updateSources() {
      console.log(this.selectedSources);
      this.$store.commit("browser/_update_search_sources", {
        selectedSources: this.selectedSources
      });
    },
    launchSearch() {
      if (!this.$refs.form.validate()) {
        return;
      }

      console.log(`Search keyword ${this.searchKey} for ${this.searchType}...`);
      this.$store.commit("browser/_reset_searched_songs");
      switch (this.searchType) {
        case _searchTypes[0]:
          this.$store.dispatch("browser/searchSongsAction", {
            key: this.searchKey,
            page: 1
          });
          break;
        case _searchTypes[1]:
          break;
        default:
          break;
      }
    }
  }
};
</script>
