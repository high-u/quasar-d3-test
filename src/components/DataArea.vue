<template>
  <div>
    <q-input
      :value="area"
      type="textarea"
      float-label="Textarea"
      :max-height="100"
      :min-rows="7"
      @change="updateChartdata"
    />
  </div>
</template>

<script>
import { M } from '../store/types'
import { QInput } from 'quasar'
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
      /* set (v) { this.$store.dispatch(M.UPDATE_TIME_CURRENT) } */
    }
  },
  data () {
    return {}
  },
  methods: {
    updateChartdata () {
      console.log(this.area)
      this.$store.dispatch(M.CHANGE_CHART_DATA, this.area)
    }
  }
}
</script>

<style>
</style>
