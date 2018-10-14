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
            v-model="selectedSource"
            :items="searchSources"
            attach
            label="Search From..."
          ></v-select>
        </v-flex>
        <v-flex xs12 md3 sm6 px-1>
          <v-select
            v-model="selectedType"
            :items="searchTypes"
            label="Filter"
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
      searchSources: state => state.browser.searchSources
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
    selectedSource: {
      get: function() {
        return this.$store.state.browser.selectedSource;
      },
      set: function(newValue) {
        this.$store.commit("browser/_update_search_source", {
          selectedSource: newValue
        });
        this.launchSearch();
      }
    }
  },
  methods: {
    switchType(index) {
      this.searchType = this.searchTypes[index];
    },

    launchSearch() {
      if (!this.$refs.form.validate()) {
        return;
      }

      console.log(
        `Search keyword ${this.searchKey} for ${this.selectedType} from ${
          this.selectedSource
        }...`
      );

      switch (this.selectedType) {
        case this.searchTypes[0]:
          this.$store.dispatch("browser/searchSongsAction", {
            source: this.selectedSource,
            key: this.searchKey,
            page: 1
          });
          break;
        case this.searchTypes[1]:
          this.$store.dispatch("browser/searchAlbumsAction", {
            source: this.selectedSource,
            key: this.searchKey,
            page: 1
          })
          break;
        default:
          break;
      }
    }
  }
};
</script>
