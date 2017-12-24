<template>
  <!-- if you want automatic padding use "layout-padding" class -->
  <div>
    <q-toolbar slot="header" color="primary">
      <q-toolbar-title>
        Title
      </q-toolbar-title>
    </q-toolbar>
    <!-- your content -->
    <data-area class="float-left"></data-area>
    <chart-area class="float-left"></chart-area>
  </div>
</template>

<script>
import DataArea from './DataArea'
import ChartArea from './ChartArea'
import {
  QBtn, QIcon,
  QToolbar, QToolbarTitle
} from 'quasar'
import 'quasar-extras/material-icons' // https://material.io/icons

export default {
  components: {
    DataArea,
    ChartArea,
    QBtn,
    QIcon,
    QToolbar,
    QToolbarTitle
  },
  data () {
    return {}
  }
}
</script>

<style>
</style>
