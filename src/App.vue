<template>
  <div id="app">
    <img class="logo" alt="Vue logo" src="./assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <!-- <Es6Review /> -->
    <!-- <HelloWorld /> -->
    <Basic></Basic>
  </div>
</template>

<script>
// import Es6Review from "./components/es6-review/Es6Review";
// import HelloWorld from "./components/basic/helloworld";
import Basic from "./components/basic/basic";
export default {
  name: "App",
  components: {
    // Es6Review,
    // HelloWorld
    Basic
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
}
.logo{
  /* position: absolute; */
  /* top:10px; */
  /* left:10px; */
  display: flex;
  max-width: 80px;
}
</style>
