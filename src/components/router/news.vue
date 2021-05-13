<template lang="pug">
.news
  h1 news
  h2 {{id}}
</template>

<script>
const newsId = {
  18: 'hot news',
  19: 'latest news',
  20: 'weather news',
}
export default {
  name: 'News',
  computed: {
    id() {
      return newsId[this.$route.params.id]
    },
  },
}
</script>

<style lang="scss" scoped></style>
