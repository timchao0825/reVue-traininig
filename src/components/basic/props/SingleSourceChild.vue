<template lang="pug">
.SingleSourceChild
  h2 {{childCount}}
  button(@click="childCount+=1") child +++
  //- h2 {{countDoubled}}
</template>

<script>
export default {
  name: 'SingleSourceChild',
  // props:['childCount'],
  // 驗證props
  props:{
    childCount:{
      type: Number,
      default: 0,
      validator(value){
        return value <= 10;
      },
    },
  },
  // computed:{
  //   countDoubled(){
  //     return this.childCount * 2;
  //   }
  // },
  // data() {
  //   return {
  //     count:this.childCount
  //   }
  // },
}
</script>

<style lang="scss" scoped></style>
