<template>
  <div class="home">
    <p>Count of the games: {{ games.length }}</p>
    <div v-for="({name}, key) in games" v-bind:key="key">{{ key + 1 }}. {{ name }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axiosHelper from "../helpers/axios";
import axios from "axios";

@Component({
  components: {}
})
export default class Home extends Vue {
  games = [];

  async mounted() {
    const axiosInstance = new axiosHelper();
    this.games = (await axiosInstance.getGames()) as any;
    console.log(this.games);
  }
}
</script>
