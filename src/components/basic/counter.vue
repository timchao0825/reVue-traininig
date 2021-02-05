<template>
  <div>

    <h3>Counter Component</h3>
    <h2>-- {{count}} --</h2>
    <button @click="count+=1">+++</button>
  </div>
</template>

<script>
  export default {
    // props:{
    //   start:{
    //     type:Number,
    //     default:100
    //   }
    // },
    props:['start'],
    data() {
      return {
        count:this.start,
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>