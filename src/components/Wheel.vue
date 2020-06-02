
<template>
  <div class="wheel">
    <!-- {{wheelStyle}} -->
    <div
      v-for="({name}, key) in games"
      v-bind:key="key"
      :class="['wheel__element',
         key === activeElementKey ? activeClassName : '',
        key === activeElementKey - 1 ? previousClassName : '',
        key === activeElementKey + 1 ? nextClassName: '']"
    >{{ key + 1 }}. {{ name }}</div>
    <img
      class="wheel__image"
      :src="games[activeElementKey] && games[activeElementKey].background_image"
    />
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component({
  components: {}
})
export default class Wheel extends Vue {
  @Prop({ required: true }) games!: any[];
  private activeElementKey: number = 0;
  private activeClassName: string = "";
  private previousClassName: string = "";
  private nextClassName: string = "nextDown";
  async mounted() {
    const wheelElement = document.querySelector(".wheel");
    wheelElement && wheelElement.addEventListener("wheel", this.handleScroll);
  }
  unmounted() {
    const wheelElement = document.querySelector(".wheel");
    wheelElement &&
      wheelElement.removeEventListener("wheel", this.handleScroll);
  }
  handleScroll(event: any) {
    const direction = event.deltaY && event.deltaY >= 0 ? "down" : "up";
    if (direction === "up") {
      this.activeElementKey -= 1;
      this.activeClassName = "activeUp";
      this.previousClassName = "previousUp";
      this.nextClassName = "nextUp";
    } else {
      this.activeElementKey += 1;
      this.activeClassName = "activeDown";
      this.previousClassName = "previousDown";
      this.nextClassName = "nextDown";
    }
    if (this.activeElementKey < 0) {
      this.activeElementKey = 0;
    }
    if (this.activeElementKey > this.games.length - 1) {
      this.activeElementKey = this.games.length - 1;
    }
  }
}
</script>
<style lang="scss">
@import "../styles/wheel.scss";
</style>