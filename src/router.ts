import Vue from 'vue';
import Router from 'vue-router';
import Games from './views/Games.vue';
import About from './views/About.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'games',
      component: Games,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
  ],
});
