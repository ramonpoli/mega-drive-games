<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <p>Count of the games: {{ games.length }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import axios from 'axios';

@Component({
  components: {}
  })
export default class Home extends Vue {
  games = [];

  mounted() {
    this.games = [];
    axios('https://api.rawg.io/api/games', {
      method: 'GET',
      params: {
        ordering: 'popularity',
        page_size: 10,
        platforms: 167,
      },
    })
      .then((response) => {
        this.games = response.data.results;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
</script>
