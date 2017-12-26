// Mutation Type を読み込む
import { CHANGE_CHART_DATA } from './types'

/*
 * State
 * 状態
 * アプリケーション全体の情報を管理する場所
 * 見た目の構築やサーバとの通信などに利用します。
 */
const state = {
  chartData: '[]'
}

/*
 * Actions
 * ユーザの操作/APIとのやりとり
 * アプリケーションの状態を変更するようなユーザからの入力や外部APIの呼び出しは、Actionsと呼ばれます。
 */
const actions = {
}

/*
 * Mutations
 * 状態への変更処理
 */
const mutations = {
  [CHANGE_CHART_DATA]: (state, str) => {
    // State を変更
    state.chartData = str
    console.log('store.js mutations: [CHANGE_CHART_DATA] str = ', str)
  }
}

/*
 * Getters
 */
const getters = {
  [CHANGE_CHART_DATA]: state => {
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
