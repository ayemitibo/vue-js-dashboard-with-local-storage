import Vue from 'vue'
import App from './App.vue'
import vueResource from 'vue-resource'
import vueRouter from "vue-router"
import { routes } from "./router.js"
import store from "./store.js"
import vuelidate from "vuelidate"

Vue.use(vuelidate)
Vue.use(vueRouter)
Vue.use(vueResource)
const router = new vueRouter({
  routes,
  mode : "history"
})
// Vue.http.interceptors.push((request, next) => {
//   request.headers.set('Authorization', 'Bearer ' + localStorage.getItem('id'));
//   request.headers.set('Accept', 'application/json');
//   next();
//   });

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
