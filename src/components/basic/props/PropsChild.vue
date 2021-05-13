<template lang="pug">
.PropsChild
  h2 Props child
  //- h3 >> {{myMessage}}
  h3 {{author}} : {{text}}
</template>

<script>
export default {
  name: 'PropsChild',
  // props:['myMessage']
  props: ['author', 'text']
}
</script>

<style lang="scss" scoped></style>
