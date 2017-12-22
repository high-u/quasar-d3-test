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
/* import { mapActions } from 'vuex' */
import Ajv from 'ajv'
/* import { mapGetters } from 'vuex' */
import isJson from '../utils'
import { SCHEMA_CHART } from '../schema'
export default {
  components: {
    QInput
  },
  computed: {
    /* ...mapGetters({
      area: this.$store.getters.mapGetters
    }), */
    /* ...mapState({
      chartData: 'chartData'
    }) */
    area: {
      get () {
        // テキストエリアに入れる？
        return JSON.stringify(this.$store.getters.getChartData)
      },
      set (v) {
        if (!isJson(v)) {
          console.log('Invalid JSON. DataArea set.')
        }
        else {
          var schema = SCHEMA_CHART
          var ajv = new Ajv()
          var validate = ajv.compile(schema)
          var valid = validate(JSON.parse(v))
          if (!valid) {
            console.log('invalid')
            console.log(validate.errors)
          }
          else {
            this.$store.commit(CHANGE_CHART_DATA, v)
          }
        }
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
