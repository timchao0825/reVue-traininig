<template>
  <div>
    <h1>Event</h1>
    <!-- basic event -->
    <!-- <h2>{{count}}</h2>
    <button @click="add">add</button> -->
    <!-- image load event -->
    <!-- <h4 v-if="loading">Loading</h4>
    <h4 v-else>complete</h4>
    <img :class="imgClass" @load="loadImg" src="https://loremflickr.com/320/240"> -->
    <!-- detect button -->
    <!-- <input />
    <ul>
      <li></li>
    </ul> -->
    <!-- click sugar function -->
    <!-- @click.stop =  stoppropagation  防止event傳出去 -->
    <!-- @click.self 當事件從本身發出才算 -->
    <!-- @click.once 第一次有效 -->
    <div class="box" @click.stop="btnMsg='c'">
      <div class="box" @click.stop="btnMsg='b'">
        <div class="box" @click.stop="btnMsg='a'">
        </div>
      </div>
    </div>
    <h2>{{btnMsg}}</h2>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        count:0,
        loading:true,
        list:[],
        btnMsg: '',
      }
    },
    methods: {
      add(){
        this.count += 1;
      },
      loadImg(){
        this.loading = false;
      },
    },
    computed:{
      imgClass(){
        if(this.loading){
          return "img hide";
        }else{
          return "img";
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .img{
    transition: all .3s;
    &.hide{
      opacity: 0;
    }
  }
  .box{
    min-width:50px;
    min-height:50px;
    padding:40px;
    border:2px solid red;
    
  }
</style>