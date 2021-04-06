<template lang="pug">
.Props
  h1 Props Component
  PropsChild
</template>

<script>
import PropsChild from './PropsChild'
export default {
  name: 'Props',
  components:{
    PropsChild
  }
}
</script>

<style lang="scss" scoped></style>
