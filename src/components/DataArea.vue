<template>
  <div>
    <q-input
      :value="area"
      type="textarea"
      float-label="Textarea"
      :max-height="100"
      :min-rows="7"
      @change="CHANGE_CHART_DATA($event)"
    />
    <!-- changeイベントが発行されると、 M.CHANGE_CHART_DATA() という Actions に、テキストエリアの中身を渡す -->
  </div>
</template>

<script>
import { CHANGE_CHART_DATA } from '../store/types'
import { QInput } from 'quasar'
import { mapActions } from 'vuex'
/* import { mapGetters } from 'vuex' */
export default {
  components: {
    QInput
  },
  computed: {
    /* ...mapGetters({
      area: this.$store.getters.mapGetters
    }), */
    area: {
      get () { return JSON.stringify(this.$store.getters.getChartData) } // ,
      /* set (v) { this.$store.dispatch(M.CHANGE_CHART_DATA) } */
    }
  },
  data () {
    return {}
  },
  methods: {
    // @change という Vue.js のイベントハンドラに M.CHANGE_CHART_DATA というメソッドを登録
    ...mapActions([
      CHANGE_CHART_DATA
    ]),
    updateChartdata () {
      console.log('/////////////')
      console.log(this.area)
      this.$store.dispatch(CHANGE_CHART_DATA, this.area)
    }
  }
}
</script>

<style>
</style>
