import Vue from 'vue';
import Vuex from 'vuex';
import AxiosHelper from '@/helpers/axios';

Vue.use(Vuex);

const UPDATE_GAMES = 'UPDATE_GAMES';
const SET_LOADING = 'SET_LOADING';

export default new Vuex.Store({
  state: {
    games: [],
    loading: false,
    axiosHelper: new AxiosHelper(),
  },
  getters: {
    async games(state) {
      const gamesResult = await state.axiosHelper.getGames();
      console.log('gamesResult :', gamesResult);
    },
  },
  mutations: {
    [UPDATE_GAMES](state, games) {
      console.log('mutate users', games);
      state.games = games;
      console.log(state);
    },
    [SET_LOADING](state, loading) {
      console.log('state', state);
      state.loading = loading;
    },
  },
  actions: {
    async getGames({ state, commit }) {
      commit(SET_LOADING, true);

      const gamesResult = await state.axiosHelper.getGames();
      console.log('gamesResult :', gamesResult);

      commit(UPDATE_GAMES, gamesResult);
      commit(SET_LOADING, false);
    },
  },
});
