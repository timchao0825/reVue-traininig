<template>
  <div>
    <h1>Basic</h1>
    <!-- double mustache -->
    <!-- <div>
      <h2>{{message}}</h2>
      <input type="checkbox" v-bind:checked="selected">
      <button v-on:click="toggle">Toggle</button>
    </div> -->
    <div>
      <!-- v-model -->
      <!-- <input type="text" :value="text">
      <br/>
      {{text}} -->
      <!-- <input type="text" v-model="text">
      <br/>
      {{text}} -->

      <!-- vue methods -->
      <!-- <h3 v-once>{{count}}</h3>
      <button @click="addCount"> +1 </button> -->
      <!-- end -->

      <!-- vue methods count -->
      <!-- <h3>{{count}}</h3>
      <button @click="addStep">{{step}}</button> -->

      <!-- vue computed -->
      <input v-model="a" type="number" />
      +
      <input v-model="b" type="number" />
      =
      <!-- <span>{{c}}</span> -->
      <input v-model="c" type="number" />
      <br />
      {{ a }} + {{ b }} = {{ c }}
      <br />
      <br />
      <!-- vue watch -->
      <input v-model="value.a" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello world !',
      selected: false,
      text: 'Hello',
      count: 0,
      step: 1,
      a: 0,
      b: 0,
      value: {
        a: 0,
        b: 1,
      },
    }
  },
  // computed: {
  // 最初寫法
  //   c(){
  //     return parseInt(this.a , 10) + parseInt(this.b , 10);
  //   }
  // },
  // computed 拆分可變為
  computed: {
    c: {
      get() {
        return parseInt(this.a, 10) + parseInt(this.b, 10)
      },
      set(val) {
        this.b = parseInt(val, 10) - parseInt(this.a, 10)
      },
    },
  },
  watch: {
    // value(val,oldVal){
    // console.log(`${oldVal} ==> ${val}`)
    // }
    // 拆分寫法
    value: {
      handler(val, oldVal) {
        console.log(`${oldVal.a} ==> ${val.a}`)
      },
      deep: true, // 監聽陣列或是物件裡的東西改變的設定
    },
  },
  methods: {
    // 原始作法
    // toggle: function(){
    //
    // }
    // 常用寫法 object shorthand
    toggle() {
      this.selected = !this.selected
    },
    addCount() {
      this.count += 1
    },
    addStep() {
      this.count += this.step
      this.step += 1
    },
  },
}
</script>

<style lang="scss" scoped></style>
