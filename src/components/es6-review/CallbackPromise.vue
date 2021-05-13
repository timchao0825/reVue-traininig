<template lang="pug">
.callbackPromise
</template>

<script>
import $ from 'jquery'
export default {
  name: 'CallbackPromise',
  mounted () {
    console.clear()
    console.log('call back promise component')
    // 傳入callback
    // function getRandomEmail(callback){
    //   $.getJSON('https://randomuser.me/api',function(data){
    //     // console.log(data);

    //     // callback function
    //     callback(data);
    //   })
    // }
    // const email = getRandomEmail();
    // console.log("🚀 ~ file: CallbackPromise.vue ~ line 18 ~ mounted ~ email", email)
    // undefind
    // getRandomEmail(function(data){
    //   console.log(data.results[0].email);
    // });
    // 可能導致callback hell
    // const emails = [];
    // getRandomEmail(function(data){
    //   emails.push(data.results[0].email);
    //   getRandomEmail(function(data){
    //     emails.push(data.results[0].email);
    //     getRandomEmail(function(data){
    //       emails.push(data.results[0].email);
    //       console.log(emails);
    //     });
    //   });
    // });

    // promise
    function getRandomEmail () {
      return new Promise(function (resolve) {
        $.getJSON('https://randomuser.me/api', function (data) {
          resolve(data.results[0].email)
        })
      })
    }
    // const emails = [];
    // getRandomEmail()
    // .then(function(email){
    //   emails.push(email);
    //   return getRandomEmail();
    // })
    // .then(function(email){
    //   emails.push(email);
    //   return getRandomEmail();
    // })
    // .then(function(email){
    //   emails.push(email);
    //   console.log(emails);
    // })

    // await / async
    const emails = []
    async function getEmails () {
      let email
      email = await getRandomEmail()
      emails.push(email)
      email = await getRandomEmail()
      emails.push(email)
      email = await getRandomEmail()
      emails.push(email)
      console.log(emails)
    }
    getEmails()
  }
}
</script>

<style></style>
