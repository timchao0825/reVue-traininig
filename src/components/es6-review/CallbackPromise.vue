<template lang="pug">
.callbackPromise
</template>

<script>
import $ from 'jquery'
export default {
  name: 'callbackPromise',
  mounted() {
    console.clear();
    console.log('call back promise component');
    $.ajax({
      url:'https://randomuser.me/api',
      dataType: 'json',
      success:function(data){
        console.log(data)
      }
    })

  },
}
</script>

<style></style>
