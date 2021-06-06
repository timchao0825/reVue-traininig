<template lang="pug">
.vuexInput
  h1 vuex input
  h2 input text ==> {{inputText}}
  //- input(v-model="text")
  input(:value="inputText" @input="setInputText")
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'vuexInput',
  computed: {
    ...mapState(['inputText']),
  },
  methods: {
    ...mapMutations(['setInputText']),
  },
  // data() {
  //   return {
  //     text: '',
  //   }
  // },
  // methods: {
  //   setText(val) {
  //     this.text = val.target.value
  //   },
  // },
}
</script>

<style lang="scss" scoped></style>
