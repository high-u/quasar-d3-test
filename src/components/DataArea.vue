<template>
  <div>
    <q-card inline style="width: 400px">
      <q-card-title>
        JSON
      </q-card-title>
      <q-card-separator />
      <q-card-main>
        <q-input
          v-model="area"
          type="textarea"
          float-label="Chart JSON"
          :min-rows="16"
          placeholder=""
          color="grey-4"
          class="bg-grey-2"
        />
      </q-card-main>
      <q-card-separator />
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
import { CHANGE_CHART_DATA } from '../store/types'
import {
  QInput,
  QBtn, QIcon,
  QCard, QCardTitle, QCardSeparator, QCardMain, QCardActions
} from 'quasar'

export default {
  components: {
    QInput,
    QBtn,
    QIcon,
    QCard,
    QCardTitle,
    QCardSeparator,
    QCardMain,
    QCardActions
  },
  computed: {
    area: {
      get () {
        // テキストエリアに入れる？
        // return JSON.stringify(this.$store.getters.getChartData)
        return this.$store.getters.getChartData
      },
      set (v) {
        this.$store.commit(CHANGE_CHART_DATA, v)
      }
    }
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
  }
}
</script>

<style>
</style>
