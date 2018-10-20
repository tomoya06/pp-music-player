<template>
  <v-app :dark="isDarkTheme">
    <!-- Router Drawer -->
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
  <!-- Top Toolbar -->
  <v-toolbar app fixed clipped-left :color="toolbarColor">
    <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    <router-link :to="{path: '/'}">
      <v-btn flat>
        <v-toolbar-title>{{ title }}</v-toolbar-title>
      </v-btn>
    </router-link>
    </v-toolbar>
  <!-- Main Content -->
  <v-content>
    <v-container fluid>
      <v-fade-transition mode="out-in">
        <router-view></router-view>
      </v-fade-transition>
    </v-container>
  </v-content>
  <!-- Bottom Footer -->
  <v-footer>
    <v-spacer></v-spacer>
    <div class="grey--text caption">Powered By Vue-Cli</div>
  </v-footer>
</v-app>
</template>

<script>
  import '@/main.css'
  import { mapState } from 'vuex'
  // import PlayerBar from "@/components/PlayerBar.vue";

  const routers = [
  {
    icon: 'home',
    to: '/',
    title: 'Home'
  },
  {
    icon: "accessible",
    to: "/browser",
    title: "Browser"
  },
  {
    icon: "home",
    to: "/collection",
    title: "Collection"
  }, {
    icon: "settings",
    to: "/setting",
    title: "Setting"
  }
  ];

  export default {
    name: "App",
    data() {
      return {
        routers,
        title: 'PP Music',
        drawer: false
      };
    },
    computed: {
      ...mapState({
        isDarkTheme: state => state.isDarkTheme,
        toolbarColor: state => {
          switch (state.searchSource) {
            case 0: return 'indigo';
            case 1: return 'red';
            default: return 'black';
          }
        }
      })
    },
    components: {
    // PlayerBar
  }
};
</script>
