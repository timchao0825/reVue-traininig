// import Vue from 'vue'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    username: '',
    list: [],
  },
  // mutations 只能進行同步操作，非同步處理使用actions
  mutations: {
    addCount(state, payLoad) {
      state.count += payLoad
      // store commit 寫成物件的方式 指定step
      // state.count += payLoad.step
    },
  },
})

export default store
