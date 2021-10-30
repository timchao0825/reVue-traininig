import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const LESSONS_URL =
  'https://api.hiskio.com/v2/courses?type=arrival&word=&status=ALL&professions=1&tags=13&page=1&limit=8&course_type=ALL'
const store = new Vuex.Store({
  state: {
    lessons: [],
    cart: [],
  },
  getters: {
    lessonsInCart(state) {
      return state.cart.length
    },
    priceInCart(state) {
      console.log(state)
      return state.cart.reduce((acc, lesson) => {
        return acc + lesson.price
      }, 0)
    },
    isLessonInCart(state) {
      return lesson => {
        return (
          state.cart.findIndex(({ id }) => {
            return id === lesson.id
          }) !== -1
        )
      }
    },
  },
  mutations: {
    setLessons(state, lessons) {
      state.lessons = lessons
    },
    addToCart(state, lesson) {
      state.cart.push(lesson)
    },
  },
  actions: {
    fetchLessons({ commit }) {
      console.log('actions fetch lessons')
      fetch(LESSONS_URL)
        .then(rs => rs.json())
        .then(rs => {
          console.log(rs.data)
          commit('setLessons', rs.data)
        })
    },
  },
})

export default store
