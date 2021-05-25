<template lang="pug">
.vuex-index
  h1 vuex - index parent
  h2 Parent = {{indexText}}
  input(type="text" , v-model="indexText")
  button(@click="this.propsToChild") To child
  hr
  VuexIndexChild(:parentText="textProps" @textToParent="setText")
</template>

<script>
import VuexIndexChild from './indexChild'
export default {
  name: 'index',
  data() {
    return {
      indexText: '',
      textProps: '',
    }
  },
  components: {
    VuexIndexChild,
  },
  methods: {
    propsToChild() {
      this.textProps = this.indexText
    },
    setText(val) {
      console.log('set text func')
      console.log('text from child', val)
    },
  },
}
</script>

<style></style>
