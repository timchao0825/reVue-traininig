<template>
  <div>
    <h1>Bind</h1>
    <hr/>
    <input type="text" v-model="text">
    <button :class="btnClass">Submit</button>
    <hr/>
    <h2 :style="h2Style">Style element red</h2>
    <hr />
    <h3 :style="hStyle">Test font size</h3>
    <button @click="shrink">shrink</button>
  </div>
</template>

<script>
  const commonStyle = {
    color:'red',
    fontSize:'40px'
  }
  export default {
    data() {
      return {
        text:'',
        // h2Style:'color: red',
        // h2Style:{
        //   color:'green',
        // }
        h2Style:[
          commonStyle,

          // {
          //   color:'green',
          // }
        ],
        size:40,
      }
    },
    computed:{
      btnClass(){
        return{
          submit:true,
          disabled:this.text.length===0,
        }
        // if(this.text.length === 0){
        //   // return 'submit disabled'
        //   return {
        //     submit:true,
        //     disabled:true,
        //   }
        // }else{
        //   // return 'submit';
        //   return{
        //     submit:true,
        //     disabled:false,
        //   }
        // }
      },
      hStyle(){
        return {
          fontSize:`${this.size}px`,
        };
      },
    },
    methods: {
      shrink(){
        this.size--;
      }
    },
  }
</script>

<style lang="scss" scoped>
#app{
  text-align: center;
  border:2px solid red;
}
.submit{
  background-color: #28a745;
  color: white;
  border:none;
  border-radius: 8px;
  padding:4px 8px;
  margin:0 10px;
  &.disabled{
    background-color: #aaa;
  }
}

</style>