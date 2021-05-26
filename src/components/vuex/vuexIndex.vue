<template lang="pug">
.vuexIndex
  h1 vuex - index
  h2 {{count}}
  button(@click="addCount") count++
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'vuexIndex',
  // 另外可以多寫一些computed function 的用法
  computed: {
    ...mapState(['count']),
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
