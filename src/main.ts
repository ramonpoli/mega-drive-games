import Vue from 'vue';
import './plugins/axios';
import App from './App.vue';
import router from './router';
import store from './stores/.';
import './registerServiceWorker';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h: any) => h(App),
}).$mount('#app');
