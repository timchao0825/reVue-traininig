<template lang="pug">
div
  .vuexModule
    h1 module store
    h2 show todo id ==> {{showTodos}}
    h3 {{id}}
  hr
  .vuexIndex(v-if="isLoading")
    h1 Loading
  .vuexIndex(v-else)
    h1 vuex - index
    h2 {{count}}
    h3 Getters num list length {{numListTotal}}
    h3 Getters num list Sort {{numListSort}}
    //- map mutation 可直接傳入payload
    button(@click="addCount(2)") count++
    hr
    ul(v-for="item in userData" :key="item.id")
      li id:{{item.id}} | first-name: {{item.first_name}}
</template>

<script>
import moduleStore from './module.store'
import { mapMutations, mapState, mapGetters, mapActions } from 'vuex'

export default {
  name: 'vuexIndex',
  mounted() {
    // 原始呼叫 action 用法
    // this.$store.dispatch('fetchData')
    // mapAction 引入直接呼叫即可
    this.fetchData()
    moduleStore.dispatch('todos/fetchTodoList')
  },
  // 另外可以多寫一些computed function 的用法
  computed: {
    ...mapState(['count', 'userData', 'isLoading']),
    ...mapGetters(['numListTotal', 'numListSort']),
    ...mapState('todos', ['id']),
    showTodos() {
      return moduleStore.state.todos.count
    },
    // ...mapState 也可以是物件
    // ...mapState({
    //  storeCount : 'count', template的 {{count}} 可以更名為storeCount
    // 如果指定成函式(可經過一些處理)
    // stoureCount(state){
    //   return state.count
    // }
    // })
  },
  // 單一呼叫vuex state 的用法
  // computed: mapState([
  //   'count',
  //   'username',
  //   'list',
  // ]),
  // 另外可以多寫 methods 的呼叫vuex mutations 的用法
  methods: {
    ...mapMutations(['addCount']),
    ...mapActions(['fetchData']),
  },

  // methods: mapMutations({
  //   // 可以更名為add 上放的click事件需寫成add
  //   add: 'addCount',
  // }),
  // methods: {
  //   addCount() {
  //     // this.$store.commit('addCount', 2)
  //     // 傳入物件的寫法
  //     this.$store.commit({
  //       type: 'addCount',
  //       step: 2,
  //     })
  //   },
  // },
}
</script>

<style></style>
