<template>
<v-hover>
  <v-list-tile
    slot-scope="{hover}"
    :class="`elevation-${hover?18:0}`"
  >
    <v-list-tile-action>
      <v-btn icon @click="playSong">
        <v-icon color="indigo">play_arrow</v-icon>
      </v-btn>
    </v-list-tile-action>
    <v-list-tile-content>
      <v-list-tile-title>{{ name }}<span class="grey--text">{{ alias }}</span></v-list-tile-title>
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
</v-hover>
</template>
<script>
export default {
  props: {
    song: {
      type: Object,
      required: true
    },
  },
  computed: {
    id: function() {
      return this.$props.song.id;
    },
    name: function() {
      return this.$props.song.name;
    },
    alias: function() {
      const _alias = this.$props.song.alias 
      return (_alias instanceof Array && _alias.length > 0) ? ` / ${_alias.join('/')}`: ''
    },
    artists: function() {
      const artists = this.$props.song.artists || this.$props.song.ar || []
      return artists.map((artist) => artist.name).join(", ");
    },
    album: function() {
      const album = this.$props.song.album || this.$props.song.al || {name: ''}
      return album.name;
    },
  },
  methods: {
    markSong: function() {
      console.log(`Mark ${this.name}...`);
    },
    playSong: function() {
      console.log(`Play ${this.name}...`);
    }
  }
};
</script>

