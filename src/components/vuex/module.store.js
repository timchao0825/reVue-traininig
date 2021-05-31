import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const todos = {
  // 如兩個module有重複性function , mutations , getters , ...
  // 可用namespaced = true
  namespaced: true,
  state: {
    todo: [],
    id: 0,
    count: 222,
  },
  mutations: {
    setLists() {
      console.log('set list log == ')
    },
  },
  getters: {
    // getLength(state , gtters , rootState , rootGetters) {
    // 尋找 store 根目錄的 module store
    // rootState.member.userInfo[0].id
    // },
  },
  actions: {
    // fetchList({commit, dispatch, state, getters, rootState, rootGetters}){
    // },
    // context 參數
    // fetchList(context) {
    //   const {
    //     commit,
    //     dispatch,
    //     state,
    //     getters,
    //     rootState,
    //     rootGetters,
    //   } = context
    // },
    fetchTodoList({ dispatch }) {
      console.log('module todo action => fetch todo list')
      // 如果要呼叫其他module裡面的 actions
      dispatch('member/getUserInfo', [0, 1, 2, 3, 4, 5], { root: true })
    },
  },
}
const member = {
  // 如兩個module有重複性function , mutations , getters , ...
  // 可用namespaced = true
  namespaced: true,
  state: {
    userInfo: [
      {
        id: 0,
        name: 'aaa',
      },
      {
        id: 1,
        name: 'bbb',
      },
    ],
  },
  mutations: {},
  actions: {
    getUserInfo(state, payload) {
      console.log('member actions => get user info', payload)
    },
  },
}
const moduleStore = new Vuex.Store({
  modules: {
    todos: todos,
    member: member,
  },
})

export default moduleStore
