<template>
  <div>
    <h1>v for</h1>
    <!-- <h2 v-for="item in todo">{{item}}</h2>
    <select name="" id="">
      <option v-for="(item , index) in month" :value="index+1">{{item}}</option>
    </select>     -->
    
    <!-- <h3 v-for="(value , key) in me">{{key}} , {{value}}</h3> -->
    <!-- <h3 v-for="item in me">{{item.prop}} - {{item.value}}</h3> -->
    <!-- <ul>
      <li v-for="num in nums" :key="num">{{num}}</li>
    </ul>
    <button @click="org">All</button>
    <button @click="sort">Sort</button> -->

  </div>
</template>

<script>
  // const orgNums = [3,2,1,5,6,7,4];
  export default {
    methods: {
      action(){
        // this.month.push(this.month.length+1);
        // this.month.pop();
        // this.month.shift();
        // this.month.unshift();
        // this.month.splice();
        // this.month.reverse();
        // this.month = this.month.filter(el => el % 2 === 0 );

        // 無法作用
        // this.month[0] = 10;
        // 可作用
        // this.month.splice(0,1,10);
        // 無法作用
        // this.month.length = 3;
        // 可作用
        // this.month.splice(0)
      },
      reverse(){
        // this.month.reverse();
      },
      all(){
        // this.nums = orgNums;
      },
      even(){
        // this.nums = this.nums.filter(el => el % 2 === 0);
      },
      org(){
        // this.nums = orgNums;
      },
      sort(){
        // this.nums = orgNums.slice().sort();
      }
    },
    data() {
      return {
        // todo:[
        //   "learn javascript",
        //   "learn vue",
        //   "take a job",
        //   "good salary",
        // ],
        // nums:orgNums,
        // month:[1,2,3,4,5,6,7,8,9,10,11,12],
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