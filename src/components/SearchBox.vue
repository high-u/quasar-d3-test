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
import { CHANGE_SEARCH_STR } from '../store/types'
import { QSearch } from 'quasar'
export default {
  components: {
    QSearch
  },
  data () {
    return {
      text: ''
    }
  },
  methods: {
    search () {
      console.log(this.text)
      this.$store.dispatch(CHANGE_SEARCH_STR, this.text)
    }
  }
}
</script>

<style>
</style>
