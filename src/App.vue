<template>
  <v-app>
    <v-app-bar app color="primary" dense class="d-flex">
      <v-toolbar-title>Mega-drive games</v-toolbar-title>
      <v-spacer></v-spacer>

      <div class="ml-4">
        <router-link to="/" class="ml-2 light-green--text text--darken-1"
          >Games</router-link
        >
        <router-link to="/about" class="ml-2 light-green--text text--darken-1"
          >About</router-link
        >
      </div>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
    <v-footer>
      Powered by
      <a
        href="https://rawg.io/"
        target="blank"
        class="ml-2 light-green--text text--darken-1"
        >Rawg.io</a
      >
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',

  data: () => ({
    //
  }),
});
</script>

<style lang="scss">
@import "~vuetify/src/styles/styles.sass";
@import "~vuetify/src/styles/main.sass";
// .v-application .v-toolbar a {
//   color: var(--v-accent-darken1);
// }
</style>
