<template>
  <div v-if="loading">loading</div>
  <div v-else>
    <div class="md-games__container">
      <div class="md-games__apiForm mb-9">
        <span class="mr-2">Game count: {{ games.length }}</span>
        <v-container>
          <v-row align="center">
            <v-col cols="6">
              <v-subheader>
                Order by
              </v-subheader>
            </v-col>

            <v-col cols="6">
              <v-select
                class="md-games__ordering"
                :items="orderByValues"
                v-on:change="getGamesWithOrdering"
                v-model="orderingValue"
              ></v-select>
            </v-col>
          </v-row>
          <v-row align="center">
            <v-col cols="6">
              <v-subheader>
                Page
              </v-subheader>
            </v-col>

            <v-col cols="6">
              <v-select
                class="md-games__page"
                :items="pageValues"
                v-on:change="getGamesPage"
                v-model="pageValue"
              ></v-select>
            </v-col>
          </v-row>
        </v-container>
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
    orderByValues: ['popularity', '-released', 'name'],
    pageValues: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
  }),
  methods: {
    getGamesWithOrdering(this: any, value: string) {
      if (value) {
        this.orderingValue = value;
        this.getGames({ ordering: value });
      }
    },
    getGamesPage(this: any, page: string) {
      const pageNumber = parseInt(page, 10);
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
