<template>
  <div>
    <q-search 
      color="primary" 
      v-model="text" 
      @change="search" 
    />
  </div>
</template>

<script>
import { QSearch } from 'quasar'
export default {
  components: {
    QSearch
  },
  data () {
    return {
      text: '文字です'
    }
  },
  methods: {
    search () {
      console.log(this.text)
    }
  }
}
</script>

<style>
</style>
