import Vue from 'vue'
import Vuex from 'vuex'
import store from './store'

Vue.use(Vuex)

// const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  strict: true,
  modules: { // モジュール https://vuex.vuejs.org/ja/modules.html
    // 下記 mapStore は任意文字列。下記 store の処理は、store 内で完結するため、mapStore という文字が処理で使われてはいない。
    mapStoreXX: store
  }
})
