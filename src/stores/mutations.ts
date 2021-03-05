export default {
  setGames(state: any, games: any) {
    console.log('games :', games);
    // eslint-disable-next-line
    state.games = games;
  },
  setLoading(state: any, loading: any) {
    // eslint-disable-next-line
    state.loading = loading;
  },
};
