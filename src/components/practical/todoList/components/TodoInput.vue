<template lang="pug">
form(@submit.prevent="submit")
  input(v-model="text")
  button(type="submit") submit
</template>

<script>
export default {
  name: 'TodoInput',
  data () {
    return {
      text: ''
    }
  },
  methods: {
    submit () {
      this.$emit('submit', this.text)
      this.text = ''
    }
  }
}
</script>

<style lang="scss" scoped></style>
