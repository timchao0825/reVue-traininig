<template>
  <div>
    <h1>password check</h1>
    <hr/>
    <input type="text" v-model="password">
    <p>{{strength}}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        password:'',
      };
    },
    computed:{
      strength(){
        let score = this.password.length;
        if(/[A-Z]/.test(this.password)) score *= 1.25;
        if(/[a-z]/.test(this.password)) score *= 1.25;
        if(/[0-9]/.test(this.password)) score *= 1.25;
        if(/[A-Za-z0-9]/.test(this.password)) score *= 1.25;

        if(score > 40) return 'Perfect';
        if(score > 20) return 'Great';
        if(score > 10) return 'Good';
        return 'Weak';
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>