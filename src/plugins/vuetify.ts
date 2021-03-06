import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: colors.grey.darken4,
        secondary: colors.grey.darken2,
        accent: colors.red.accent1,
      },
    },
  },
});
