import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const LESSONS_URL =
  'https://api.hiskio.com/v2/courses?type=arrival&word=&status=ALL&professions=1&tags=13&page=1&limit=8&course_type=ALL'
const store = new Vuex.Store({
  state: {
    lessons: [],
  },
  getters: {},
  mutations: {
    setLessons(state, lessons) {
      state.lessons = lessons
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
