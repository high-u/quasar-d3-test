<template>
  <!-- if you want automatic padding use "layout-padding" class -->
  <div class="layout-padding">
    <!-- your content -->
    Main Page
    <search-box></search-box>
    <result-list></result-list>
  </div>
</template>

<script>
import SearchBox from './SearchBox'
import ResultList from './ResultList'

export default {
  components: {
    SearchBox,
    ResultList
  },
  data () {
    return {}
  }
}
</script>

<style>
</style>
