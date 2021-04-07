<template lang="pug">
.customEvent
  h1 Custom Event
  h2 {{count}}
  //- CustomBtn(@emit-count="returnClick")
  //- CustomBtn(@click.native="nativeClick")
  //- CustomBtn(@emit-sync="returnClick" :outerCount="count")

  //- v-model 解構
  //- CustomBtn(:value="outerCount" @input="this.returnClick")
  //- CustomBtn(v-model="outerCount")
  
</template>

<script>
import CustomBtn from './customBtn'
export default {
  name: 'customEvent',
  components:{
    CustomBtn
  },
  data() {
    return {
      count:10,
      outerCount:5,
    }
  },
  methods: {
    returnClick(count){
      this.count = count;
    },
    nativeClick(){
      console.log('native click');
    }
  },
}
</script>

<style lang="scss" scoped></style>
