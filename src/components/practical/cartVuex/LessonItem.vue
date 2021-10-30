<template>
  <div class="lesson_item">
    <img :src="lesson.image" />
    <div class="lesson-content">
      <span class="title">{{ lesson.title }}</span>
      <span class="price">$ {{ lesson.price }}</span>
      <span class="teachers">{{ lesson.teachers }}</span>
    </div>
    <div :class="btnClass" @click="addToCart(lesson)">
      {{ btnLabel }}
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'LessonItem',
  props: ['lesson'],
  computed: {
    ...mapGetters(['isLessonInCart']),
    btnClass() {
      return {
        'add-cart': true,
        bought: this.isLessonInCart(this.lesson),
      }
    },
    btnLabel() {
      return this.isLessonInCart(this.lesson) ? '已加入購物車' : '加入購物車'
    },
  },
  methods: {
    ...mapMutations(['addToCart']),
  },
}
</script>

<style lang="scss" scoped>
.add-cart {
  margin: 20px auto;
  color: red;
  cursor: pointer;
  &.bought {
    color: #ccc;
  }
}
.lesson_item {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  border: 2px solid red;
  margin-bottom: 20px;
  width: calc(50% - 4px);
  .lesson-content {
    width: 100%;
  }
  img {
    width: 100%;
    max-width: 350px;
    margin: auto;
    margin-bottom: 20px;
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
