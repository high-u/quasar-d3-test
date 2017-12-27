// Mutation Type を読み込む
import * as types from './mutation-types'

/*
 * State
 * 状態
 * アプリケーション全体の情報を管理する場所
 * 見た目の構築やサーバとの通信などに利用します。
 * ステート https://vuex.vuejs.org/ja/state.html
 */
const state = {
  chartData: '[]'
}

/*
 * Actions
 * ユーザの操作/APIとのやりとり
 * アプリケーションの状態を変更するようなユーザからの入力や外部APIの呼び出しは、Actionsと呼ばれます。
 * アクション https://vuex.vuejs.org/ja/actions.html
 */
const actions = {
  [types.CHANGE_CHART_DATA] ({ commit }, v) {
    console.log('store.js actions [types.CHANGE_CHART_DATA]', v)
    commit(types.CHANGE_CHART_DATA, v)
  }
}

/*
 * Mutations
 * 状態への変更処理
 * ミューテーション https://vuex.vuejs.org/ja/mutations.html
 */
const mutations = {
  [types.CHANGE_CHART_DATA] (state, str) {
    // State を変更
    state.chartData = str
    console.log('store.js mutations: [types.CHANGE_CHART_DATA] str = ', str)
  }
}

/*
 * Getters
 * ゲッター https://vuex.vuejs.org/ja/getters.html
 */
const getters = {
  getChartData (state) {
    console.log('store.js getters getChartData')
    return state.chartData
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
