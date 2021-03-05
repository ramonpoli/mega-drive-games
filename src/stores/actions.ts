import AxiosHelper from '@/helpers/axios';

export interface rawgOrderingTypes {
  popularity: 'popularity';
  byName: 'name'; // name is a reserved word
  released: '-released';
  added: 'added';
  created: 'created';
  rating: 'rating';
}
export interface rawgParams {
  count: number;
  ordering: rawgOrderingTypes;
  page: number
}

export default {
  async getGames({ state, commit }: any, params: rawgParams) {
    commit('setLoading', true);
    const games = await AxiosHelper.getGames({
      count: params.count || 20,
      ordering: params.ordering || 'popularity',
      page: params.page || 1,
    });
    commit('setGames', games);
    commit('setLoading', false);
  },
};
