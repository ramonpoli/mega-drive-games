import axios from 'axios';
import { rawgParams } from '@/stores/actions';

export default {
  getGames: async (params: rawgParams) => {
    const result = await axios('https://api.rawg.io/api/games', {
      method: 'GET',
      params: {
        ordering: params.ordering,
        page_size: params.count,
        page: params.page,
        platforms: 167,
      },
    });
    return result.data.results;
  },
};
