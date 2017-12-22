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
import IsJson from '../isJson'
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
        // var ij = new IsJson()
        console.log(IsJson(v))
        if (!IsJson(v)) {
          console.log('Invalid JSON. DataArea set.')
        }
        else {
          var schema = {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                label: {
                  description: 'label',
                  type: 'string'
                },
                count: {
                  description: 'count',
                  type: 'integer'
                }
              }
            }
          }
          console.log(schema)
          var ajv = new Ajv()
          var validate = ajv.compile(schema)
          console.log(validate)
          // var str = this.$store.getters.getChartData
          console.log('^^^^^^^^^^^^')
          console.log(v)
          var valid = validate(JSON.parse(v))
          if (!valid) {
            console.log('invalid')
            console.log(validate.errors)
          }
          else {
            console.log('valid')
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
