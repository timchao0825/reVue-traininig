<template lang="pug">
.courseDetail
  h1 courseDetail

  h2 {{$route.params.id}}
  br
  router-link(to="/courses") back
</template>

<script>
export default {
  name: 'courseDetail',
}
</script>

<style></style>
