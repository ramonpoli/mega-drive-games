
<template>
  <div>
    <div v-for="({name}, key) in games" v-bind:key="key">{{ key + 1 }}. {{ name }}</div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component({
  components: {}
})
export default class Wheel extends Vue {
  @Prop({ required: true }) games!: any[];
  async mounted() {}
}
</script>
<style lang="scss">
// @import "../styles/wheel.scss";
</style>