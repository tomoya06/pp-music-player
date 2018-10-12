<template>
  <div class="search-result-list">
    <div v-if="filters.xiami && xiamiSongs">
      <div class="setion-title">xiami</div>
      <song-item 
        v-for="song in xiamiSongs"
        :key="song.id"
        :song="song"
        :source="'xiami'"
      ></song-item>
    </div>
    <div v-if="filters.netease">
      <div class="setion-title">netease</div>
      <song-item 
        v-for="song in neteaseSongs"
        :key="song.id"
        :song="song"
        :source="'netease'"
      ></song-item>
    </div>
    <div v-if="filters.qq">
      <div class="setion-title">qq</div>
      <song-item 
        v-for="song in qqSongs"
        :key="song.id"
        :song="song"
        :source="'qq'"
      ></song-item>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";

import SongItem from "@/components/Common/SongItem.vue";
import AlbumItem from "@/components/Common/AlbumItem.vue";

export default {
  name: "search-result-list",
  computed: {
    ...mapState({
      filters: state => state.browser.searchFilters,
      qqSongs: state => state.browser.searchedSongs.qq.songList,
      xiamiSongs: state => state.browser.searchedSongs.xiami.songList,
      neteaseSongs: state => state.browser.searchedSongs.netease.songList,
    })
  },
  components: {
    SongItem
  }
};
</script>

