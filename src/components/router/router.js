import Vue from 'vue'
import VueRouter from 'vue-router'

import routerIndex from './index.vue'
import routerAbout from './about.vue'
import routerNews from './news.vue'
// nest route
import aboutCompany from './about/company.vue'
import aboutGoal from './about/ourgoal.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  // router 預設的 mode 是hash mode
  // 設定成history 網址將會變乾淨
  // 但是如果要設定history時，要設定URL write
  // 因為url/about 會去找/about資料夾裡面的資料
  // 單一cli產出的檔案，不會包含有/about的資料夾
  routes: [
    {
      path: '/',
      component: routerIndex,
      children: [
        {
          path: 'about',
          name: 'about',
          // alias: 'story',
          alias: ['test111', 'test222', 'test333'],
          component: routerAbout,
          children: [
            { path: 'company', name: 'about-company', component: aboutCompany },
            { path: 'goal', name: 'about-goal', component: aboutGoal },
          ],
        },
        {
          path: 'news/:id',
          name: 'news',
          component: routerNews,
          // props: true,
          // 如果設定props = true ,
          // path:'news/:id' , :id將會變成props
          // props: { id: 3 },
          // 指定成一個物件每次指定到路由時，每次都會帶入3
          props: route => {
            return {
              id: route.params.id,
            }
          },
          // 也可以指定成一個函式
        },
        {
          path: '*',
          redirect: '/about/company',
        },
      ],
    },
  ],
})
