import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const UPDATE_GAMES = 'UPDATE_GAMES';
const SET_LOADING = 'SET_LOADING';

export default new Vuex.Store({
  state: {
    games: [],
    loading: false,
  },
  getters: {
    games(state) {
      return state.games;
    },
  },
  mutations: {
    [UPDATE_GAMES](state, games) {
      console.log('mutate users', games);
      // state.games = games;
      console.log(state);
    },
    [SET_LOADING](state, loading) {
      console.log('state', state);
      // state.loading = loading;
    },
  },
  actions: {
    getGames({ commit }) {
      commit(SET_LOADING, true);
      return axios
        .get(
          'https://api-2445582011268.apicast.io/games/?filter[release_dates.platform][eq]=29&limit=50',
          {
            headers: {
              'user-key': '7191274b86e57094c29666d7c875e3a3',
              Accept: 'application/json',
            },
          },
        )
        .then((gamesParsed: any) => {
          commit(UPDATE_GAMES, gamesParsed);
          commit(SET_LOADING, false);
        });
    },
  },
});
