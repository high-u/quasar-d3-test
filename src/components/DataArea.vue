<template>
  <div>
    <q-input
      v-model="area"
      type="textarea"
      float-label="Textarea"
      :max-height="100"
      :min-rows="7"
    />
  </div>
</template>

<script>
import { QInput } from 'quasar'
export default {
  components: {
    QInput
  },
  data () {
    return {
      area: ''
    }
  }
}
</script>

<style>
</style>
