import Vue from 'vue';
import './plugins/axios';
import App from './App.vue';
import router from './router';
import store from './stores/store';
import './registerServiceWorker';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h: any) => h(App),
}).$mount('#app');
