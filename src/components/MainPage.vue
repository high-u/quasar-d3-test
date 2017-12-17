<template>
  <!-- if you want automatic padding use "layout-padding" class -->
  <div class="layout-padding">
    <!-- your content -->
    Main Page
    <search-box></search-box>
    <result-list></result-list>
    <data-area></data-area>
    <chart-area></chart-area>
  </div>
</template>

<script>
import SearchBox from './SearchBox'
import ResultList from './ResultList'
import DataArea from './DataArea'
import ChartArea from './ChartArea'

export default {
  components: {
    SearchBox,
    ResultList,
    DataArea,
    ChartArea
  },
  data () {
    return {}
  }
}
</script>

<style>
</style>
