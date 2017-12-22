<template>
  <!-- if you want automatic padding use "layout-padding" class -->
  <div class="layout-padding">
    <!-- your content -->
    Main Page
    <search-box></search-box>
    <result-list></result-list>
    <pre>
[
  { "label": "2014-01-01", "count": 10 },
  { "label": "2014-02-01", "count": 20 },
  { "label": "2014-03-01", "count": 40 },
  { "label": "2014-04-01", "count": 80 }
]
    </pre>
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
