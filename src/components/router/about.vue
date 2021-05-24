<template lang="pug">
.about
  h1 about
  //- router-link(to="/about/company") About Company
  router-link(:to="{name:'about-company'}") About Company
  <br/>
  router-link(:to="{name:'about-goal'}") About Goal

  router-view
</template>

<script>
export default {
  name: 'About',
}
</script>

<style lang="scss" scoped></style>
