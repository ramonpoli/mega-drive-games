<template>
  <div class="gameCard">
    <h3 class="gameCard__title">{{game.name}}</h3>
    <div class="gameCard__media">
      <div class="gameCard__image-wrapper">
        <img v-if="game.background_image" class="gameCard__image" :src="game.background_image" />
      </div>
    </div>
    <div class="gameCard__rating">{{`${game.rating} out of 5`}}</div>
    <div class="gameCard__release-date"></div>
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
