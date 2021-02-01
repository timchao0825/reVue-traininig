<template>
  <div>
    <h1>v for</h1>
    <!-- <h2 v-for="item in todo">{{item}}</h2>
    <select name="" id="">
      <option v-for="(item , index) in month" :value="index+1">{{item}}</option>
    </select>     -->
    
    <!-- <h3 v-for="(value , key) in me">{{key}} , {{value}}</h3> -->
    <!-- <h3 v-for="item in me">{{item.prop}} - {{item.value}}</h3> -->
  </div>
</template>

<script>
  export default {
    data() {
      return {
        todo:[
          "learn javascript",
          "learn vue",
          "take a job",
          "good salary",
        ],
        month:[1,2,3,4,5,6,7,8,9,10,11,12],
        // 順序不一定會照著物件走
        // me:{
        //   name:'tim',
        //   id:'scars',
        //   age:22,
        //   password:'test123',
        //   18:'list1',
        //   8:'list2',
        //   4:'list3',
        // }
        // 變 array
        // me:[
        //   {prop:'name',value:'tim'},
        //   {prop:'id',value:'chao'},
        //   {prop:8,value:'list1'},
        //   {prop:12,value:'list2'},
        // ]
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>