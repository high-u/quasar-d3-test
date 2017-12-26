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
          float-label=""
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
        // store の値をテキストエリアに入る？
        return this.$store.getters.CHANGE_CHART_DATA
      },
      set (v) {
        // store にコミットする
        this.$store.commit(CHANGE_CHART_DATA, v)
      }
    }
  },
  methods: {
    insertJson () {
      console.log('DataArea methods insertJson')
      let v = JSON.stringify([
        {label: '2017-01-01', count: 10},
        {label: '2017-02-01', count: 20},
        {label: '2017-03-01', count: 40},
        {label: '2017-04-01', count: 80}
      ], undefined, 2)
      this.$store.commit(CHANGE_CHART_DATA, v)
    }
  }
}
</script>

<style>
</style>
