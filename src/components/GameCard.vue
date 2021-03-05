<template>
  <div class="gameCard">
    <h3 class="gameCard__title">{{game.name}}</h3>
    <div class="gameCard__media">
      <div class="gameCard__image-wrapper">
        <img v-if="game.background_image" class="gameCard__image" :src="game.background_image" />
      </div>
    </div>
    <div class="gameCard__content">
      <div class="gameCard__property">
        <div class="gameCard__property-label">Rating: </div>
        <div class="gameCard__property-value">{{`${game.rating} out of 5`}}</div>
      </div>
      <div class="gameCard__property">
        <div class="gameCard__property-label">Release date: </div>
        <div class="gameCard__property-value">{{game.released}}</div>
      </div>
      <div class="gameCard__property">
        <div class="gameCard__property-label">Genres: </div>
        <div class="gameCard__property-value"
          v-for="(genre, key) in game.genres"
          v-bind:key="key">{{`${key > 0 ? ', ' : ''}${genre.name}`}}</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
@Component({
  components: {}
  })
export default class GameCard extends Vue {
    @Prop({ required: true }) game!: any;
}
</script>
<style lang="scss">
  @import "../styles/gameCard.scss";
</style>
