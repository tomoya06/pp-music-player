<template>
<div>
  <v-list-tile>
    <v-list-tile-action>
      <v-btn icon @click="playSong">
        <v-icon color="indigo">play_arrow</v-icon>
      </v-btn>
    </v-list-tile-action>
    <v-list-tile-content>
      <v-list-tile-title>{{ name }}</v-list-tile-title>
      <v-list-tile-sub-title class="text--primary">{{ artists }}</v-list-tile-sub-title>
      <v-list-tile-sub-title>{{ album }}</v-list-tile-sub-title>
    </v-list-tile-content>
    <v-list-tile-action>
      <v-btn icon @click="markSong">
        <v-icon>star</v-icon>
      </v-btn>
    </v-list-tile-action>
  </v-list-tile>
  <v-divider></v-divider>
</div>
</template>
<script>
export default {
  props: {
    song: {
      type: Object,
      required: true
    },
    source: {
      type: String,
      required: true
    }
  },
  computed: {
    name: function() {
      return this.$props.song.name;
    },
    artists: function() {
      return this.$props.song.artists
        .map((artist, index) => artist.name)
        .join(", ");
    },
    album: function() {
      return this.$props.song.album.name;
    },
    coverURL: function() {
      return this.$props.song.album.cover;
    },
    needPay: function() {
      return this.$props.song.needPay;
    }
  },
  methods: {
    markSong: function() {
      console.log(`Mark ${this.name} from ${this.$props.source}...`);
    },
    playSong: function() {
      console.log(`Play ${this.name}...`);
    }
  }
};
</script>

