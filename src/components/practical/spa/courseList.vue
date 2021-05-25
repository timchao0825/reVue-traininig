<template lang="pug">
.courseList
  h1 courseList
  .list(v-for="course in courses")
    router-link(:to="`/courses/${course.id}`") {{course.name}}
</template>

<script>
export default {
  name: 'courseList',
  data() {
    return {
      courses: [
        {
          id: 1,
          name: 'basic',
        },
        {
          id: 2,
          name: 'aadvanced',
        },
        {
          id: 3,
          name: 'hard',
        },
      ],
    }
  },
}
</script>

<style></style>
