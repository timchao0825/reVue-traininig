<template>
  <section>
    <h1>test123</h1>
    <hr />
    <input type="text" v-model="searchText" />
    <ol class="lesson">
      <li class="lesson-list" v-for="lesson in lessons" :key="lesson.id">
        {{ lesson.title }} ${{ lesson.price }}
      </li>
    </ol>
  </section>
</template>

<script>
function debounce(func, timeout = 500) {
  let timer
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, timeout)
  }
}
export default {
  data() {
    return {
      searchText: '',
      lessons: [],
    }
  },
  watch: {
    searchText(val) {
      this.searchDebounce(val)
    },
  },
  created() {
    this.searchDebounce = debounce(this.search)
  },
  methods: {
    search(val) {
      fetch(
        `https://api.hiskio.com/v2/courses?type=arrival&word=${val}&status=ALL&professions=1&tags=13&page=1&limit=8&course_type=ALL`
      )
        .then(rs => rs.json())
        .then(rs => {
          console.log(rs)
          this.lessons = rs.data
        })
    },
  },
}
</script>
