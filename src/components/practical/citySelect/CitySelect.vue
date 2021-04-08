<template lang="pug">
.CitySelect
  h1 City Select
  Select(v-model :options="")
</template>

<script>
import Select from './components/select'
export default {
  name: 'CitySelect',
  components:{
    Select
  },
  data() {
    return {
      
    }
  },
}
</script>

<style lang="scss" scoped></style>
