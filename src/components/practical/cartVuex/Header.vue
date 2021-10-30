<template>
  <div classe="header">
    <div class="cart">
      <span>購物車內：</span>
      <span class="lessons"> {{ lessons }} </span>
      <span>套課程，共</span>
      <span class="price"> ${{ price }} </span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Header',
  computed: {
    ...mapGetters({
      lessons: 'lessonsInCart',
      price: 'priceInCart',
    }),
  },
}
</script>

<style lang="scss" scoped></style>
