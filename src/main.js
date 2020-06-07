import Vue from 'vue'
import App from './App.vue';
import router from './router/index';
import store from './store/index';

import obj from 'components/common/toast';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'

Vue.use(obj);

Vue.prototype.$bus = new Vue();

Vue.config.productionTip = false

const app = new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
