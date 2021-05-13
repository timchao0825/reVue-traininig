<template lang="pug">
#app
  img.logo(alt='Vue logo' src='./assets/logo.png')
  // component
  router-link(to="/index") index
  router-link(to="/about") About
  router-link(to="/news") News

  router-view
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
          { path: 'company', component: AboutCompany },
          { path: 'goal', component: AboutGoal },
        ],
      },
      { path: '/news/:id', component: RouterNews },
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
