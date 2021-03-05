<template>
  <div v-if="loading">loading</div>
  <div v-else>
    <div class="md-games__container">
      <div class="md-games__apiForm">
        <span class="mr-2">Game count: {{ games.length }}</span>
        <select
          class="md-games__ordering mr-2"
          v-on:change="getGamesWithOrdering"
          v-model="orderingValue"
        >
          <option disabled value="">Order by</option>
          <option value="popularity">popularity</option>
          <option value="-released">released</option>
          <option value="name">name</option>
        </select>
        <select
          class="md-games__page"
          v-on:change="getGamesPage"
          v-model="pageValue"
        >
          <option value="1">Page 1</option>
          <option value="2">Page 2</option>
          <option value="3">Page 3</option>
          <option value="4">Page 4</option>
          <option value="5">Page 5</option>
          <option value="6">Page 6</option>
          <option value="7">Page 7</option>
          <option value="8">Page 8</option>
          <option value="9">Page 9</option>
          <option value="10">Page 10</option>
        </select>
      </div>
      <wheel :games="games"></wheel>
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import { Component, Vue } from 'vue-property-decorator';
import { mapActions, mapGetters, mapState } from 'vuex';
import AxiosHelper from '../helpers/axios';
import Wheel from '../components/Wheel.vue';

export default {
  components: { Wheel },
  data: () => ({
    orderingValue: '',
    pageValue: 1,
  }),
  methods: {
    getGamesWithOrdering(this: any, event: any) {
      const {
        target: { value },
      } = event;
      if (value) {
        this.orderingValue = value;
        this.getGames({ ordering: value });
      }
    },
    getGamesPage(this: any, event: any) {
      const {
        target: { value },
      } = event;
      const pageNumber = parseInt(value, 10);
      if (pageNumber) {
        this.pageValue = pageNumber;
        this.getGames({ page: pageNumber });
      }
    },
    ...mapActions(['getGames']),
  },
  computed: {
    ...mapState(['games', 'loading']),
  },
  mounted(this: any) {
    this.getGames({ count: 20, ordering: 'popularity', page: 1 });
  },
};
</script>
<style lang="scss">
@import "../styles/games.scss";
</style>
