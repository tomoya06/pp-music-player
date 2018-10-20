<template>
  <v-list three-line>
    <song-item
    v-for="song in songs"
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
    name: "songs-list",

    props: {
      songs: {
        type: Array,
        required: true,
      }
    },

    // computed: {
    //   ...mapState({
    //     searchedSongs: state => state.browser.searchedResources['song'],
    //   })
    // },
    components: {
      SongItem,
    }
  };
</script>

