<template>
  <div id="app">
    <div class="nav">
      <router-link to="/">Browser</router-link>
      <router-link to="/collection">Collection</router-link>
    </div>
    <router-view></router-view>
    <player-bar></player-bar>
  </div>
</template>

<script>
import PlayerBar from '@/components/PlayerBar.vue'

export default {
  name: 'App',
  components: {
    PlayerBar
  }
}
</script>
