<template lang="pug">
#app
  img.logo(alt='Vue logo' src='./assets/logo.png')
  //- router-view
  VuexIndex
</template>

<script>
// import VuexIndex from './components/vuex/index'
import VuexIndex from './components/vuex/vuexIndex'
export default {
  name: 'app',
  components: {
    VuexIndex,
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
}
.logo {
  display: flex;
  max-width: 80px;
}
</style>
