<template>
  <v-container>
    <v-layout>
      <v-flex xs12 sm10 md8>
        <v-card>
          <v-list v-if="!isSearching" three-line>
            <song-item
            v-for="song in searchedSongs"
            :song="song"
            :key="song.id"
            ></song-item>
          </v-list>
          <loading v-else-if="!isSearchError"></loading>
          <v-alert type="info" :value="!isSearching && isSearchError && currentError">
            oops: {{currentError}}
          </v-alert>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
  import { mapState } from "vuex";

  import SongItem from "@/components/Common/SongItem.vue";
  import AlbumItem from "@/components/Common/AlbumItem.vue";
  import Loading from "@/components/Common/Loading.vue"

  export default {
    name: "search-songs-result-list",
    computed: {
      ...mapState({
        searchedSongs: state => state.browser.searchedResources['song'],
        isSearching: state => state.browser.isSearching,
        isSearchError: state => state.browser.isSearchError,
        currentError: state => state.browser.currentError,
      // qqSongs: state => state.browser.searchedSongs.qq.songList,
      // xiamiSongs: state => state.browser.searchedSongs.xiami.songList,
      // neteaseSongs: state => state.browser.searchedSongs.netease.songList,
      })
    },
    components: {
      SongItem,
      Loading
    }
  };
</script>

