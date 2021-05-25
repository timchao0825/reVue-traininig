<template lang="pug">
.vuexIndex
  h1 vuex - index
  h2 {{count}}
  button(@click="addCount") count++
</template>

<script>
export default {
  name: 'vuexIndex',
  data() {
    return {}
  },
  computed: {
    count() {
      return this.$store.state.count
    },
  },
  methods: {
    addCount() {
      this.$store.commit('addCount')
    },
  },
}
</script>

<style></style>
