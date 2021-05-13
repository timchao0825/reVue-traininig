<template lang="pug">
.customBtn
  //- h3 Custom Button
  //- h4 {{count}}
  //- button(@click="count += 1") +1
  //- button(@click="customClick") Emit
  //- button native
  h3 {{innerCount}}
  button(@click="innerCount += 1") +1
  button(@click="sync") sync
</template>

<script>
export default {
  name: 'CustomBtn',
  model: {
    prop: 'outerCount',
    event: 'update:event'
  },
  props: ['value'],
  data () {
    return {
      count: 0,
      innerCount: this.value
      // innerCount:this.outerCount,
    }
  },
  methods: {
    customClick () {
      console.log('button click')
      this.$emit('emit-count', this.count)
    },
    sync () {
      // this.$emit('input', this.innerCount)
      this.$emit('update:event', this.innerCount)
    }
  }
}
</script>

<style lang="scss" scoped></style>
