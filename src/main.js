import Vue from 'vue'
import App from './App.vue'
// import store from './components/vuex/store'
// import router from './components/router/router'
// import router from './components/practical/spa/router'

// practical
// cart
// import store from './components/practical/cartVuex/store'

Vue.config.productionTip = false

new Vue({
  // router,
  // store,
  render: h => h(App),
}).$mount('#app')
