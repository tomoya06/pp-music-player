<template>
  <v-app dark>
    <v-navigation-drawer fixed clipped app v-model="drawer">
      <v-list>
        <v-list-tile
          v-for="(router, index) in routers"
          :key="index"
          :to="{path: router.to}"
        >
          <v-list-tile-action>
            <v-icon>{{ router.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ router.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Music Player</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <v-fade-transition mode="out-in">
          <router-view></router-view>
        </v-fade-transition>
      </v-container>
    </v-content>
    <v-footer>
      <!-- <player-bar></player-bar> -->
      <h4>This will be the player bar</h4>
    </v-footer>
  </v-app>
</template>

<script>
import PlayerBar from "@/components/PlayerBar.vue";

const routers = [
  {
    icon: "accessible",
    to: "/",
    title: "Browser"
  },
  {
    icon: "home",
    to: "/collection",
    title: "Collection"
  }
];

export default {
  name: "App",
  data() {
    return {
      routers,
      drawer: false
    };
  },
  components: {
    // PlayerBar
  }
};
</script>
