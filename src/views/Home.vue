<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <!-- <p>Count of the games: {{ games.length }}</p> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import axios from "axios";

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  games = [];

  mounted() {
    axios({
  url: "https://api-v3.igdb.com/games",
  method: 'POST',
  headers: {
      'Accept': 'application/json',
      'user-key': "7191274b86e57094c29666d7c875e3a3"
  },
  data: "fields age_ratings,aggregated_rating,aggregated_rating_count,alternative_names,artworks,bundles,category,collection,cover,created_at,dlcs,expansions,external_games,first_release_date,follows,franchise,franchises,game_engines,game_modes,genres,hypes,involved_companies,keywords,multiplayer_modes,name,parent_game,platforms,player_perspectives,popularity,pulse_count,rating,rating_count,release_dates,screenshots,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,time_to_beat,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos,websites;"
})
  .then(response => {
      console.log(response.data);
  })
  .catch(err => {
      console.error(err);
  });
    // axios
    //   .post("https://api-v3.igdb.com/games", {
    //     headers: {
    //       Accept: "application/json",
    //       "user-key": "7191274b86e57094c29666d7c875e3a3"
    //     }
    //   })
    //   .then((gamesParsed: any) => {
    //     console.log("gamesParsed", gamesParsed);
    //   })
    //   .catch(error => console.log(error));
  }
}
</script>
