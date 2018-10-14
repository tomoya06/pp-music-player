<template>
  <v-list three-line>
    <song-item
    v-for="song in searchedSongs"
    :song="song"
    :key="song.id"
    ></song-item>
  </v-list>
</template>
<script>
  import { mapState } from "vuex";

  import SongItem from "@/components/Common/SongItem.vue";
  // import AlbumItem from "@/components/Common/AlbumItem.vue";
  // import Loading from "@/components/Common/Loading.vue"

  export default {
    name: "search-songs-result-list",
    computed: {
      ...mapState({
        searchedSongs: state => state.browser.searchedResources['song'],
      })
    },
    components: {
      SongItem,
    }
  };
</script>

