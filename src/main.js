import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Vue.component('test',{
//   template:`
//   <div>
//     <h1>test component</h1>
//   </div>
//   `,
// })
Vue.component('global' , {
  template:`
    <div>test global component</div>
  `,
});
new Vue({
  render: h => h(App),
}).$mount('#app')



