<template>
  <div>
    <h1>Basic</h1>
    <!-- double mustache -->
    <div>
      <h2>{{message}}</h2>
      <input type="checkbox" v-bind:checked="selected">
      <button v-on:click="toggle">Toggle</button>
    </div>

    <div>
      <!-- v-model -->
      <input type="text" :value="text">
      <br/>
      {{text}}
      <!-- <input type="text" v-model="text">
      <br/>
      {{text}} -->
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        message:'Hello world !',
        selected:false,
        text:'Hello',
      };
    },
    methods: {
      toggle(){
        this.selected = !this.selected;
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>