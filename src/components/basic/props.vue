<template>
  <div>

    <h2>{{count}}</h2>
    <button @click="count+=1"> props +1</button>
    <!-- <h2>This is props component >> {{text}}</h2> -->
    <!-- <h2>{{author}} {{text}}</h2> -->
  </div>
</template>

<script>
  export default {
    props:['text' , 'author' , 'count'],
    
  }
</script>

<style lang="scss" scoped>

</style>