<template>
  <div>
    <q-input
      v-model="area"
      type="textarea"
      float-label="Textarea"
      :max-height="100"
      :min-rows="7"
      @change="rerender"
    />
  </div>
</template>

<script>
import { M } from '../store/types'
import { QInput } from 'quasar'
export default {
  components: {
    QInput
  },
  data () {
    return {
      area: JSON.stringify([
        { label: '2014-01-01', count: 10 },
        { label: '2014-02-01', count: 20 },
        { label: '2014-03-01', count: 40 },
        { label: '2014-04-01', count: 80 }
      ])
    }
  },
  methods: {
    rerender () {
      console.log(this.area)
      this.$store.dispatch(M.CHANGE_CHART_DATA, this.area)
    }
  }
}
</script>

<style>
</style>
