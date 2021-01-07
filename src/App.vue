<template>
  <div id="app">
    <img class="logo" alt="Vue logo" src="./assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <!-- <Es6Review /> -->
    <!-- <HelloWorld /> -->
    <!-- <Basic></Basic> -->
    <!-- <Lifecycle></Lifecycle> -->
    <!-- pratical file -->
    <!-- <PasswordCheck></PasswordCheck> -->
    <!-- <SingleSource></SingleSource> -->
    <BindEl></BindEl>
  </div>
</template>

<script>
// import Es6Review from "./components/es6-review/Es6Review";
// import HelloWorld from "./components/basic/helloworld";
// import Basic from "./components/basic/basic";
// import Lifecycle from './components/basic/lifecycle.vue';
// import PasswordCheck from './components/practical/passwordCheck';
// import SingleSource from './components/basic/singleSource';
import BindEl from './components/basic/bindEl';
export default {
  name: "App",
  components: {
    // Es6Review,
    // HelloWorld
    // Basic
    // Lifecycle

    // PasswordCheck
    // SingleSource

    BindEl
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
  display: flex;
  max-width: 80px;
}
</style>
