<template>
  <div id="app">
    <img class="logo" alt="Vue logo" src="./assets/logo.png" />
    <!-- class start -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <!-- <Es6Review /> -->
    <!-- /// -->
    <!-- basic pratice -->
    <!-- /// -->
    <!-- <HelloWorld /> -->
    <!-- <Basic></Basic> -->
    <!-- <Lifecycle></Lifecycle> -->
    <!-- <BindEl></BindEl> -->
    <!-- <Ifelse></Ifelse> -->
    <!-- <Vfor></Vfor> -->
    <!-- <Event></Event> -->
    <!-- <Form></Form> -->
    <!-- <ComponentR ></ComponentR> -->
    <!-- <component :is="content"></component> -->
    <!-- <Layout></Layout> -->

    <!-- ///  -->
    <!-- pratical file -->
    <!-- /// -->
    <!-- <PasswordCheck></PasswordCheck> -->
    <!-- <SingleSource></SingleSource> -->    
    
    <!-- <Props v-for="post in posts" :text="post.text" :author="post.author"></Props> -->
    <!-- <Props v-for="(post , idx) in posts" :text="post.text" :author="post.author" :key="idx"></Props> -->
    <!-- <h1>{{count}}</h1>
    <button @click="count+=1">+ 1</button>
    <Props :count="count"></Props> -->
  </div>
</template>

<script>
// ---
// es6 review
// ---
// import Es6Review from "./components/es6-review/Es6Review";

// ---
// basic pratice
// ---
// import HelloWorld from "./components/basic/helloworld";
// import Basic from "./components/basic/basic";
// import Lifecycle from './components/basic/lifecycle.vue';
// import SingleSource from './components/basic/singleSource';
// import BindEl from './components/basic/bindEl';
// import Ifelse from './components/basic/ifelse';
// import Vfor from './components/basic/vfor'
// import Event from './components/basic/event'
// import Form from './components/basic/form'
// import ComponentR from './components/basic/componentR.vue';
// import Layout from './components/basic/layout'
// import Props from './components/basic/props'

// ---
// practical
// ---
// import PasswordCheck from './components/practical/passwordCheck';


export default {
  components: {
    // ---
    // es6 review
    // ---
    // Es6Review,

    // ---
    // basic pratice
    // ---
    // HelloWorld
    // Basic
    // Lifecycle
    // BindEl
    // Ifelse
    // Vfor
    // Event
    // Form
    // ComponentR
    // Layout
    // Props 

// ---
    // practical
    // ---
    // PasswordCheck
    // SingleSource
  },
  data() {
    return {
      count:0,
      posts:[
        {text:'hello' , author:'john'},
        {text:'world' , author:'jack'},
      ]
    }
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
