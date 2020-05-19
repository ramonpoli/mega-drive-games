import { Vue } from "vue-property-decorator";
import axios from "axios";

export default class axiosHelper extends Vue {
  getGames = async () => {
    const result = await axios("https://api.rawg.io/api/games", {
      method: "GET",
      params: {
        ordering: "popularity",
        page_size: 10,
        platforms: 167,
      },
    });
    return result.data.results;
  };
}
