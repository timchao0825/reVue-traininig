<template>
  <div>
    <h1>v-if else</h1>
    <input
      v-model="checked1"
      type="checkbox"
    >
    <input
      v-model="checked2"
      type="checkbox"
    >
    <h2 v-if="checked1">
      If checked1 check
    </h2>
    <h2 v-else-if="checked2">
      If checked2 check
    </h2>
    <h2 v-else>
      else not checked
    </h2>
    <h3 v-show="checked1">
      V show element
    </h3>
  </div>
</template>

<script>
export default {
  data () {
    return {
      checked1: false,
      checked2: false
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
