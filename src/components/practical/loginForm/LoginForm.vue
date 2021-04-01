<template lang="pug">
.login-form
  h1 login form
  form(@submit.prevent="formSubmit")
    label User Name
    input(type="text" v-model="username" :disabled="inputLoading")
    br
    label PassWord
    input(type="text" v-model="password" :disabled="inputLoading")
    br
    button(type="submit" :disabled="inputLoading") submit
    span(v-if="error") {{error}}
</template>

<script>
import axios from 'axios'
export default {
  name: 'LoginForm',
  data() {
    return {
      username:'',
      password:'',
      loggedUser: null, 
      error:'',
      inputLoading:false,
    }
  },
  methods: {
    formSubmit(){
      this.inputLoading = true;
      // fake api , not login api
      axios.get(`https://jsonplaceholder.typicode.com/todos/1`)
      .then(res=>{
        console.log(res.data.completed);
        if(res.data){
          this.inputLoading = false;
          this.loggedUser = res.data.id;
        }else{
          this.error = 'incorrect userName / password'
        }
      });
    }
  },
}
</script>

<style lang="scss" scoped></style>
