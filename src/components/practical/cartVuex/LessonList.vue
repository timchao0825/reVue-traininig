<template>
  <div>
    <h1>Lesson list</h1>
    <hr />
    <LessonItem v-for="lesson in lessons" :key="lesson.id" :lesson="lesson" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import LessonItem from './LessonItem'
export default {
  components: {
    LessonItem,
  },
  computed: {
    ...mapState(['lessons']),
  },
  methods: {
    ...mapActions(['fetchLessons']),
  },
  mounted() {
    this.fetchLessons()
  },
}
</script>

<style lang="scss" scoped></style>
