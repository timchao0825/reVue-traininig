import Vue from 'vue'
import App from './App.vue'
import store from './components/vuex/store'
// import router from './components/router/router'
// import router from './components/practical/spa/router'

Vue.config.productionTip = false

new Vue({
  // router,
  store,
  render: h => h(App),
}).$mount('#app')
