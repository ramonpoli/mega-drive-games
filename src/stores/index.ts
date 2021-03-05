import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

export const UPDATE_GAMES = 'UPDATE_GAMES';
export const SET_LOADING = 'SET_LOADING';
export const SET_GAMES = 'SET_GAMES';

export default new Vuex.Store({
  state,
  mutations,
  actions,
});
