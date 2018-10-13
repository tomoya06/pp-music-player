<template>
<v-layout>
  <v-flex xs2>
    <v-card>
      <v-img
        src="coverURL"
        aspect-ratio="1.0"
      ></v-img>
      <v-card-title>
        <div>
          <h3>{{ name }}</h3>
        </div>
      </v-card-title>
      <v-card-text>
        <div>
          <h5>{{ artists }}</h5>
          <h5>{{ album }}</h5>
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn icon @click="playSong"><v-icon>play</v-icon></v-btn>
        <v-btn icon @click="markSong"><v-icon>add</v-icon></v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</v-layout>
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

