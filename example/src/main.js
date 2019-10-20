import Vue from 'vue'
import App from './App.vue'
import raScrolltop from 'ra-scrolltop'

Vue.config.productionTip = false

Vue.use(raScrolltop)

new Vue({
  render: h => h(App),
}).$mount('#app')
