import Vue from 'vue'
import App from './App.vue'
import {Vcode} from '../packages';
Vue.use(Vcode);
new Vue({
  el: '#app',
  render: h => h(App)
})
