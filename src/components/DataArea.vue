<template>
  <div>
    <q-input
      v-model="area"
      type="textarea"
      float-label="Textarea"
      :max-height="100"
      :min-rows="7"
    />
    <!-- changeイベントが発行されると、 M.CHANGE_CHART_DATA() という Actions に、テキストエリアの中身を渡す -->
  </div>
</template>

<script>
import { CHANGE_CHART_DATA } from '../store/types'
import { QInput } from 'quasar'
export default {
  components: {
    QInput
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
  data () {
    return {}
  }
}
</script>

<style>
</style>
