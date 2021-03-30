<template lang="pug">
.DynamicComponent
  h1 DYC
  button(@click="toggleLesson") lessons
  button(@click="toggleClass") Class
  component(:is="content") 
</template>

<script>
import Lessons from './Lessons'
import Class from './Class'
export default {
  name: 'DynamicComponent',
  components:{
    Lessons,
    Class
  },
  data() {
    return {
      content:'Lessons'
    }
  },
  methods: {
    toggleLesson(){
      this.content = 'Lessons';
    },
    toggleClass(){
      this.content = 'Class';
    }
  },
}
</script>

<style lang="scss" scoped></style>
