<template>
  <!-- if you want automatic padding use "layout-padding" class -->
  <div>
    <q-toolbar slot="header" color="primary">
      <q-toolbar-title>
        Title
      </q-toolbar-title>
      <q-btn flat round small @click="$refs.layout.toggleRight()">
        <q-icon name="menu" />
      </q-btn>
    </q-toolbar>
    <!-- your content -->
    <q-card>
      <q-card-title>
        Card Title
      </q-card-title>
      <q-card-separator />
      <q-card-main>
        <data-area></data-area>
        <chart-area></chart-area>
      </q-card-main>
      <q-card-actions>
        <q-btn
          flat
          color="primary"
          @click="insertJson"
        >Example</q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
import DataArea from './DataArea'
import ChartArea from './ChartArea'
import {
  QBtn, QIcon,
  QToolbar, QToolbarTitle,
  QCard, QCardTitle, QCardSeparator, QCardMain, QCardActions
} from 'quasar'
import 'quasar-extras/material-icons' // https://material.io/icons
import { CHANGE_CHART_DATA } from '../store/types'

export default {
  components: {
    DataArea,
    ChartArea,
    QBtn,
    QIcon,
    QToolbar,
    QToolbarTitle,
    QCard,
    QCardTitle,
    QCardSeparator,
    QCardMain,
    QCardActions
  },
  methods: {
    insertJson () {
      console.log('click')
      let v = '[' + '\n' +
        '  {"label":"2014-01-01", "count":10},' + '\n' +
        '  {"label":"2014-02-01", "count":20},' + '\n' +
        '  {"label":"2014-03-01", "count":40},' + '\n' +
        '  {"label":"2014-04-01", "count":80}' + '\n' +
        ']'
      this.$store.commit(CHANGE_CHART_DATA, v)
    }
  },
  data () {
    return {}
  }
}
</script>

<style>
</style>
