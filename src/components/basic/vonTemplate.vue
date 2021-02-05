<template>
  <div>
    <h1>v on cunstom methods</h1>
    <button @click="clicked">1111</button>
  </div>
</template>

<script>
  export default {
    methods: {
      clicked(){
        this.$emit('my-click');
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>