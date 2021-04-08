<template lang="pug">
.select
  select 
    option(v-for="(item , idx) in options" :value="idx") {{item.name}}
</template>

<script>
export default {
  name: 'select',
  props:['value','options'],
}
</script>

<style lang="scss" scoped></style>
