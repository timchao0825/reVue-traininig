<template lang="pug">
  li.TodoItem {{label}}
</template>

<script>
export default {
  name: 'TodoItem',
  props: ['label']
}
</script>

<style lang="scss" scoped></style>
