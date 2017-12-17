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
import { M } from '../store/types'
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
      this.$store.dispatch(M.CHANGE_SEARCH_STR, this.text)
    }
  }
}
</script>

<style>
</style>
