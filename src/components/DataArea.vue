<template>
  <div>
    <q-input
      v-model="area"
      type="textarea"
      float-label="Textarea"
      :max-height="100"
      :min-rows="7"
      @change="CHANGE_CHART_DATA"
    />
    <!-- changeイベントが発行されると、 M.CHANGE_CHART_DATA() という Actions に、テキストエリアの中身を渡す -->
  </div>
</template>

<script>
import { CHANGE_CHART_DATA } from '../store/types'
import { QInput } from 'quasar'
import { mapActions } from 'vuex'
import Ajv from 'ajv'
/* import { mapGetters } from 'vuex' */
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
        var str = this.$store.getters.getChartData
        console.log('^^^^^^^^^^^^')
        console.log(str)
        var valid = validate(str)
        if (!valid) {
          console.log('ivalid')
          console.log(validate.errors)
        }
        else {
          console.log('valid')
          return JSON.stringify(this.$store.getters.getChartData)
        }
      } // ,
    },
    set (v) {
      this.$store.commit(CHANGE_CHART_DATA, v)
    }
  },
  data () {
    return {}
  },
  methods: {
    // @change という Vue.js のイベントハンドラに M.CHANGE_CHART_DATA というメソッドを登録
    ...mapActions([
      CHANGE_CHART_DATA
    ]) /* ,
    CHANGE_CHART_DATA () {
      console.log('/////////////')
      console.log(this.area)
      this.$store.commit(CHANGE_CHART_DATA, this.area)
    } */
  }
}
</script>

<style>
</style>
