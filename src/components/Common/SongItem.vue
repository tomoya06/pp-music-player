<template>
  <div class="song-item">
    <img :src="coverURL" alt="cover">
    <span>{{ name }}</span>
    <span> - </span>
    <span>{{ artists }}</span>
    <span> | </span>
    <span>{{ album }}</span>
    <button @click="markSong()">Mark</button>
    <button @click="playSong()">Play</button>
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
      return this.$props.song.name
    },
    artists: function() {
      return this.$props.song.artists.map((artist, index) => artist.name).join(', ')
    },
    album: function() {
      return this.$props.song.album.name
    },
    coverURL: function() {
      return this.$props.song.album.cover
    },
    needPay: function() {
      return this.$props.song.needPay
    }
  },
  methods: {
    markSong: function() {
      console.log(`Mark ${this.name} from ${this.$props.source}...`)
    },
    playSong: function() {
      console.log(`Play ${this.name}...`)
    },
  }
};
</script>

