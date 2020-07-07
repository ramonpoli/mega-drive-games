
<template>
  <div class="wheel d-flex">
    <div class="wheel__game-titles flex-grow-1">
      <div
        v-for="(game, key) in games"
        v-bind:key="key"
        :class="['wheel__element',
          key === activeElementKey ? activeClassName : '',
          key === activeElementKey - 1 ? previousClassName : '',
          key === activeElementKey + 1 ? nextClassName: '']"
      >{{ key + 1 }}. {{ game.name }}</div>
    </div>
    <GameCard v-if="games[activeElementKey]" class="flex-grow-1" :game="games[activeElementKey]" />
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import GameCard from './GameCard.vue';
@Component({
  components: {
  GameCard
  }
  })
export default class Wheel extends Vue {
  @Prop({ required: true }) games!: any[];
  private activeElementKey: number = 0;
  private activeClassName: string = 'activeDown';
  private previousClassName: string = '';
  private nextClassName: string = 'nextDown';
  private startPosition: number = 0;
  async mounted() {
    const wheelElement = document.querySelector('.wheel');
    if (wheelElement) {
      wheelElement.addEventListener('wheel', this.handleScroll);
      wheelElement.addEventListener('touchstart', this.handleTouchStart);
    }
  }
  unmounted() {
    const wheelElement = document.querySelector('.wheel');
    if (wheelElement) {
      wheelElement.removeEventListener('wheel', this.handleScroll);
      wheelElement.removeEventListener('touchstart', this.handleTouchStart);
    }
  }
  handleScroll(event: any) {
    const direction = event.deltaY && event.deltaY >= 0 ? 'down' : 'up';
    this.scrollContent(direction);
    event.preventDefault();
  }
  private scrollContent(direction: string) {
    if (direction==='up') {
      this.activeElementKey-=1;
      this.activeClassName='activeUp';
      this.previousClassName='previousUp';
      this.nextClassName='nextUp';
    } else {
      this.activeElementKey+=1;
      this.activeClassName='activeDown';
      this.previousClassName='previousDown';
      this.nextClassName='nextDown';
    }
    if (this.activeElementKey<0) {
      this.activeElementKey=0;
    }
    if (this.activeElementKey> this.games.length-1) {
      this.activeElementKey=this.games.length-1;
    }
  }

  handleTouchStart(event: any) {
    const firstTouch = event.changedTouches[0];
    this.startPosition = parseInt(firstTouch.clientY, 10);
    const wheelElement = document.querySelector('.wheel');
    if (wheelElement) {
      wheelElement.addEventListener('touchend', this.handleTouchEnd);
    }
    event.preventDefault();
  }
  handleTouchEnd(event: any) {
    const firstTouch = event.changedTouches[0];
    const distanceTouched = parseInt(firstTouch.clientY, 10) - this.startPosition;
    this.scrollContent(distanceTouched > 0 ? 'up': 'down');
    event.preventDefault();
    const wheelElement = document.querySelector('.wheel');
    if (wheelElement) {
      wheelElement.removeEventListener('touchend', this.handleTouchEnd);
    }
  }
}
</script>
<style lang="scss">
@import "../styles/wheel.scss";
</style>
