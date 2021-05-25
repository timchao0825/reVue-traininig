<template lang="pug">
.indexChild
  h1 vuex - index child
  h2(v-if="parentText") Parent to child = {{parentText}}
  h3 Child to parent = {{childText}}
  input(type="text" , v-model="childText")
  button(@click="this.textToParent") To parent
</template>

<script>
export default {
  name: 'indexChild',
  props: ['parentText'],
  data() {
    return {
      childText: '',
    }
  },
  methods: {
    textToParent() {
      // console.log(this.childText)
      this.$emit('textToParent', this.childText)
    },
  },
}
</script>

<style></style>
