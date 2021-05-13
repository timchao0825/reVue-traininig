<template lang="pug">
.SingleSource
  h2 {{count}}
  button(@click="count+=1") +++

  SingleSourceChild(:childCount="secondCount")
</template>

<script>
import SingleSourceChild from './SingleSourceChild'
export default {
  name: 'SingleSource',
  components: {
    SingleSourceChild
  },
  data () {
    return {
      count: 0,
      secondCount: 20
    }
  }
}
</script>

<style lang="scss" scoped></style>
