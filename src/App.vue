<template lang="pug">
#app
  img.logo(alt='Vue logo' src='./assets/logo.png')
  // component
  router-link(to="/index") index
  router-link(to="/about") About
  router-link(:to="{name:'news' , params:{id:19}}") News
  router-link(to="/both") both

  router-view
  router-view(name="a")
  router-view(name="b")
</template>

<script>
import VueRouter from 'vue-router'
import RouterIndex from './components/router/index'
import RouterAbout from './components/router/about'
import RouterNews from './components/router/news'
// nest route
import AboutCompany from './components/router/about/company'
import AboutGoal from './components/router/about/ourgoal'
export default {
  components: {},
  router: new VueRouter({
    routes: [
      {
        path: '/index',
        component: RouterIndex,
      },
      {
        path: '/about',
        component: RouterAbout,
        children: [
          { path: 'company', name: 'about-company', component: AboutCompany },
          { path: 'goal', name: 'about-goal', component: AboutGoal },
        ],
      },
      { path: '/news/:id', name: 'news', component: RouterNews },
      {
        path: '/both',
        components: {
          a: RouterIndex,
          b: RouterNews,
        },
      },
    ],
  }),
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
