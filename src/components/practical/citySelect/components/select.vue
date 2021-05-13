<template lang="pug">
.select
  select(v-model="index")
    option(v-for="(item , idx) in options" :value="idx") {{item.name}}
</template>

<script>
export default {
  name: 'Select',
  props: ['value', 'options'],
  computed: {
    index: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
