<template lang="pug">
  form.TodoInput(@submit.prevent="submit")
    input(type="text" v-model="text")
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
      this.$emit('input', this.text)
      this.text = ''
    }
  }
}
</script>

<style lang="scss" scoped></style>
