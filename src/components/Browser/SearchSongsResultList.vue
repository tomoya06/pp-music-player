<template>
<v-container>
  <v-layout>
    <v-flex xs12 sm10 md8>
      <v-card>
        <v-list subheader three-line>
          <div 
            v-for="source in sources"
            :key="source"
          >
            <v-subheader>{{ source }}</v-subheader>
            <song-item
              v-for="song in searchedSongs[source].songList"
              :key="song.id"
              :source="source"
              :song="song"
            ></song-item>
            <v-divider></v-divider>
          </div>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</v-container>
</template>
<script>
import { mapState } from "vuex";

import SongItem from "@/components/Common/SongItem.vue";
import AlbumItem from "@/components/Common/AlbumItem.vue";

export default {
  name: "search-songs-result-list",
  computed: {
    ...mapState({
      sources: state => state.browser.searchSources,
      searchedSongs: state => state.browser.searchedSongs,
      // qqSongs: state => state.browser.searchedSongs.qq.songList,
      // xiamiSongs: state => state.browser.searchedSongs.xiami.songList,
      // neteaseSongs: state => state.browser.searchedSongs.netease.songList,
    })
  },
  components: {
    SongItem
  }
};
</script>

