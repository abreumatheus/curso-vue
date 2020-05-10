import Vue from 'vue'
import App from './App.vue'
import Counter from "./components/Counter";

Vue.config.productionTip = false
Vue.component('counter', Counter)

new Vue({
  render: h => h(App),
}).$mount('#app')
