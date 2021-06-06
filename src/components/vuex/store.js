// import Vue from 'vue'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    username: '',
    list: [],
    numList: [1, 2, 3, 4, 5, 6, 7, 8],
    userData: [],
    isLoading: false,
    inputText: '',
  },
  // mutations 只能進行同步操作，非同步處理使用actions
  // mutations 對應的是 commit
  mutations: {
    setInputText(state, payload) {
      console.log('vuex set input text', payload.target.value)
      state.inputText = payload.target.value
    },
    addCount(state, payLoad) {
      state.count += payLoad
      // store commit 寫成物件的方式 指定step
      // state.count += payLoad.step
    },
    setData(state, data) {
      state.userData = data
    },
    setLoading(state, loading) {
      console.log('is loading ==> ', loading)
      state.isLoading = loading
    },
  },
  // getters 類似store裡面的computed
  getters: {
    numListTotal(state) {
      return state.numList.length
    },
    numListSort(state) {
      console.log('origin num list => ', state.numList)
      let result = state.numList.filter(function(num) {
        return num % 2 == 0
      })
      console.log('num list sort result => ', result)
    },
  },
  // actions 不能直接修改state 需要呼叫mutations修改state
  // actions 對應的是 dispatch
  actions: {
    // 原始寫法
    // fetchData(context)
    // fetchData({ commit }) 解構 context
    fetchData({ commit }) {
      commit('setLoading', true)
      fetch('https://reqres.in/api/users?page=1')
        .then(res => {
          return res.json()
        })
        .then(res => {
          console.log(res.data)
          commit('setData', res.data)
          setTimeout(function() {
            commit('setLoading', false)
          }, 3000)
        })
    },
  },
})

export default store
