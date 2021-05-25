<template lang="pug">
.index
  h1 SPA index
  router-link(to="/about") About 
  span / 
  router-link(to="/courses") Courses 
  span /
  router-link(to="/booking") Booking 

  router-view
</template>

<script>
export default {
  name: 'index',
}
</script>

<style></style>
