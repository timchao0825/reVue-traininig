<template>
  <div>
    <h1>Form</h1>
    <!--
      v-model
      v-bind:data
      methods this.data event.target.value
    -->
    <!-- <input type="text" v-model="message">
    <h2>{{message}}</h2> -->
    <!-- bind check box -->
    <!-- <input type="checkbox" name="" id="chk1" value="first" v-model="checkArr">
    <label for="chk1">check or not</label>
    <input type="checkbox" name="" id="chk2" value="second" v-model="checkArr">
    <label for="chk2">check or not</label>
    <input type="checkbox" name="" id="chk3" value="third" v-model="checkArr">
    <label for="chkˇ3">check or not</label>
    <h2>{{checkArr}}</h2> -->

    <!-- bind radio button -->
    <!-- <input type="radio" name="" id="r1" value="1" v-model="gender">
    <label for="r1">Male</label>
    <input type="radio" name="" id="r2" value="2" v-model="gender">
    <label for="r2">feMale</label>

    <h2>{{gender}}</h2> -->

    <!-- <select name="" id="" v-model="year">
      <option value="" disabled>select year</option>
      <option value="15">2015</option>
      <option value="16">2016</option>
      <option value="17">2017</option>
    </select>
    <h1>{{year}}</h1> -->

    <!-- <input type="file"  @change="fileSelect">
    <img :src="image" width="200"> -->

    <!-- sugar Modifier lazy-->
    <input
      v-model.lazy="num"
      type="text"
    >
    <h2>{{ num }}</h2>
    <!-- sugar Modifier lazy-->
    <input
      v-model.trim="text"
      type="text"
    >
    <h2>[{{ text }}]</h2>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: '',
      agree: false,
      checkArr: [],
      gender: '1',
      year: '',
      image: '',
      num: '',
      text: ''
    }
  },
  methods: {
    submit () {
      if (this.agree !== true) {
        alert('please agree')
      }
    },
    fileSelect (e) {
      const file = e.target.files.item(0)
      const reader = new FileReader()
      reader.addEventListener('load', this.imageLoaded)
      reader.readAsDataURL(file)
    },
    imageLoaded (e) {
      this.image = e.target.result
    }
  }
}
</script>
