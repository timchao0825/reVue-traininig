<template lang="pug">
div
  h1.index index
  // component
  //- router-link(:to="{name:'about'}") About
  router-link(to="/about") About
  <br/>
  router-link(:to="{name:'news' , params:{id:19}}") News

  router-view
</template>

<script>
export default {
  name: 'index',
}
</script>

<style></style>
