import Vue from 'vue'
import VueRouter from 'vue-router'

// import App from '../../App.vue'
import RouterIndex from './index.vue'
import RouterAbout from './about.vue'
import RouterNews from './news.vue'
// nest route
import AboutCompany from './about/company.vue'
import AboutGoal from './about/ourgoal.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      // component: App,
      children: [
        {
          path: 'index',
          component: RouterIndex,
        },
        {
          path: 'about',
          component: RouterAbout,
          children: [
            { path: 'company', name: 'about-company', component: AboutCompany },
            { path: 'goal', name: 'about-goal', component: AboutGoal },
            {
              path: 'both',
              components: {
                default: RouterIndex,
                another: RouterNews,
              },
            },
          ],
        },
        { path: 'news/:id', name: 'news', component: RouterNews },
        {
          path: 'both',
          components: {
            a: RouterIndex,
            b: RouterNews,
          },
        },
        {
          path: '/aaa',
          component: RouterAbout,
          alias: ['test123'],
        },
      ],
    },
  ],
})
