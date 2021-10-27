<template>
  <div class="lesson_item">
    <img :src="lesson.image" />
    <span class="title">{{ lesson.title }}</span>
    <span class="price">$ {{ lesson.price }}</span>
    <span class="teachers">{{ lesson.teachers }}</span>
  </div>
</template>

<script>
export default {
  name: 'LessonItem',
  props: ['lesson'],
}
</script>

<style lang="scss" scoped>
.lesson_item {
  display: flex;
  align-items: center;
  border: 2px solid red;
  margin-bottom: 20px;
  img {
    width: 100%;
    max-width: 350px;
  }
  .title {
    margin-left: 20px;
  }
  .price {
    margin-left: 20px;
    color: red;
    font-weight: bold;
  }
}
</style>
