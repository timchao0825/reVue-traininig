<template>
  <h1>ES6 Review Component</h1>
</template>

<script>
console.log('vue review component')
// object shorthand
// ====================
function makePoint (x, y) {
  return {
    // before shorthand
    // x:x,
    // y:y,
    // after shorthand
    x,
    y
  }
}
makePoint()

// 函式縮寫 function shorthand
const options = {
  name: 'Options',
  level: 10,
  before: function () {

  },
  after () {

  }
}
options

// 解構賦值 destructuring assignment
// 陣列解構
// const nums = [1, 2, 3,];
// const [first, second] = nums;
// >預設值
// const nums = [10, 20];
// const [first, second , third= = 30] = nums;
// >忽略元素
// const nums = [1,2,3,4];
// const [, , third] = nums;
// >變數交換
// let a = 1;
// let b = 2;
// [a, b] = [b, a];
// 剩餘數值
// const nums = [1,2,3,4];
// const [first, ...others] = nums;

// 物件解構
// const point = {x:100 , y:150,}
// const {x , y} = point
// >預設值
// const {x , y , z = 200} = point;
// >指派新名稱
// original method >> const px = point.x;
// const {x:px , y:py} = point;
// new val will be px & py
// 額外補充 - 陣列解構沒有指派新名稱

// 解構函式參數
// original method
// function distance(point){
//   return Math.sqrt(point.x * point.x + point.y * point.y);
// }
// 解構
// function distance({x,y}){
//   return Math.sqrt(x*x + y*y);
// }

// 字串模板
// const value = hello;
// const text = `test 123 ${value}`;

</script>

<style lang="scss" scoped>
h1 {
  color: red;
}
</style>
