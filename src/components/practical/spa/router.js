import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Index from './index.vue'
import About from './about.vue'
import Booking from './booking.vue'
import Courses from './courses.vue'
import courseList from './courseList.vue'
import courseDetail from './courseDetail.vue'

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Index,
      children: [
        {
          path: 'about',
          component: About,
        },
        {
          path: 'courses',
          component: Courses,
          children: [
            {
              path: '',
              component: courseList,
            },
            {
              path: ':id',
              component: courseDetail,
            },
          ],
        },
        {
          path: 'booking',
          component: Booking,
        },
      ],
    },
  ],
})
