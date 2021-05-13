<template>
  <div>
    <!-- <h1>Component</h1> -->
    <!-- <Props :testProp="test123"></Props> -->

    <h2>{{ count }}</h2>
    <button @click="addCount">
      +1
    </button>

    <!-- <Counter :start="count"></Counter> -->
    <Von />
  </div>
</template>

<script>
// import Props from './props.vue';
// import Counter from './counter';
import Von from './vonTemplate'
export default {
  components: {
    // Props
    // Counter
    Von
  },
  data () {
    return {
      test123: 'default text',
      count: 10
    }
  },
  methods: {
    addCount () {
      this.count += 1
    },
    clicked () {
      alert('clicked')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
