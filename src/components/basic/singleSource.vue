<template>
  <div>
    <h1>Single Source</h1>
    <hr>
    <label>
      <!-- <input type="checkbox" :checked="a" @change="select('a')"> -->
      <input
        v-model="a"
        type="checkbox"
      >
      <span>a</span>
    </label>
    <label>
      <!-- <input type="checkbox" :checked="b" @change="select('b')"> -->
      <input
        v-model="b"
        type="checkbox"
      >
      <span>b</span>
    </label>
    <label>
      <!-- <input type="checkbox" :checked="c" @change="select('c')"> -->
      <input
        v-model="c"
        type="checkbox"
      >
      <span>c</span>
    </label>
    <p>{{ selected }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      a: false,
      b: false,
      c: false
      // selected:[],
    }
  },
  computed: {
    selected () {
      // const result = [];
      // if(this.a) result.push('a');
      // if(this.b) result.push('b');
      // if(this.c) result.push('c');
      // return result;
      return ['a', 'b', 'c'].filter(item => this[item])
    }
  }
  // methods:{
  //   select(item){
  //     // const idx = this.selected.indexOf(item);
  //     // if(idx === -1){
  //       // this.selected.push(item);
  //       // this[item] = true;

  //     // }else{
  //       // this.selected.splice(idx , 1);
  //       // this[item] = false;
  //     // }
  //      this[item] = !this[item];
  //   }
  // }
}
</script>

<style lang="scss" scoped>

</style>
