<template lang="pug">
li.TodoItem {{data}}
</template>

<script>
export default {
  name: 'TodoItem',
  props:['data'],
}
</script>

<style lang="scss" scoped></style>
