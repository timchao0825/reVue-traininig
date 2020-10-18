<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <!-- <Es6Review /> -->
    <HelloWorld />
  </div>
</template>

<script>
// import Es6Review from "./components/es6-review/Es6Review";
import HelloWorld from "./components/basic/helloworld";
export default {
  name: "App",
  components: {
    // Es6Review,
    HelloWorld
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
  margin-top: 60px;
}
</style>
