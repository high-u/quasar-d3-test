<template>
  <q-list class="no-border">
    <q-item v-for="item in searchResults" :key="item.id">
      <q-item-main class="flex items-center column">
        <q-item-tile><p>{{ item.title }}</p></q-item-tile>
        <q-item-tile><p>{{ item.body }}</p></q-item-tile>
      </q-item-main>
    </q-item>
  </q-list>
</template>

<script>
import { mapGetters } from 'vuex'
import { QList, QItem, QItemMain, QItemTile } from 'quasar'
export default {
  components: { QList, QItem, QItemMain, QItemTile },
  computed: {
    ...mapGetters({
      searchResults: 'getSearchResults'
    })
  },
  data () {
    return {}
  }
}
</script>

<style>
</style>
