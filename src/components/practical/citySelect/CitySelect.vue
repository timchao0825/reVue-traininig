<template lang="pug">
.CitySelect

  h1 City Select
  Select(v-model="cityIdx" :options="cityData")
  br
  Select(v-model="areaIdx" :options="areas")
  hr
  h3 {{cityIdx}} - {{areaIdx}} - {{zip}}
</template>

<script>
import Select from './components/select'
export default {
  name: 'CitySelect',
  components: {
    Select
  },
  data () {
    return {
      cityIdx: 0,
      areaIdx: 0,
      cityData: [
        {
          name: '基隆縣',
          areas: [
            { name: 'Area仁愛區', zip: '100' },
            { name: 'Area信義區', zip: '101' }
          ]
        },
        {
          name: '台北市',
          areas: [
            { name: 'Area中正區 - 1', zip: '200' },
            { name: 'Area大同區 - 2', zip: '201' }
          ]
        },
        {
          name: '新北市',
          areas: [
            { name: 'Area新北市 - 1', zip: '300' },
            { name: 'Area新北市 - 2', zip: '301' }
          ]
        },
        {
          name: '宜蘭縣',
          areas: [
            { name: 'Area宜蘭縣 - 1', zip: '400' },
            { name: 'Area宜蘭縣 - 2', zip: '401' }
          ]
        }
      ]
    }
  },
  computed: {
    areas () {
      return this.cityData[this.cityIdx].areas
    },
    zip () {
      return this.areas[this.areaIdx].zip
    }
  },
  watch: {
    cityIdx () {
      this.areaIdx = 0
    }
  }
}
</script>

<style lang="scss" scoped></style>
