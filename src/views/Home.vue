<template>
  <div class="md-home">
    <p>Count of the games: {{ games.length }}</p>
    <wheel :games="games"></wheel>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { Component, Vue } from "vue-property-decorator";
import AxiosHelper from "../helpers/axios";
import Wheel from "../components/Wheel.vue";

@Component({
  components: { Wheel }
})
export default class Home extends Vue {
  games = [];

  async mounted() {
    const axiosInstance = new AxiosHelper();
    this.games = (await axiosInstance.getGames()) as any;
    console.log(this.games);
  }
}
</script>
<style lang="scss">
@import "../styles/home.scss";
</style>
