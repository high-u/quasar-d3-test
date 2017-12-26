// Mutation Type を読み込む
import { CHANGE_CHART_DATA } from './types'
import Ajv from 'ajv'

/*
 * State
 * 状態
 * アプリケーション全体の情報を管理する場所
 * 見た目の構築やサーバとの通信などに利用します。
 */
const state = {
  searchStr: '',
  searchResults: [
    { id: 0, title: 'データ1', body: 'データ1の内容です。123' },
    { id: 1, title: 'データ2', body: 'データ2の内容です。456' },
    { id: 2, title: 'データ3', body: 'データ3の内容です。789' }
  ],
  chartData: '[]'
}

/*
 * Actions
 * ユーザの操作/APIとのやりとり
 * アプリケーションの状態を変更するようなユーザからの入力や外部APIの呼び出しは、Actionsと呼ばれます。
 */
const actions = {
  [CHANGE_CHART_DATA] ({ commit }, str) { // DataArea.vue の @change より
    console.log('store.js actions: [CHANGE_CHART_DATA] str= ', str)
    let schema = {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          label: {
            description: 'label',
            type: 'string'
          },
          count: {
            description: 'count',
            type: 'integer'
          }
        }
      }
    }
    let ajv = new Ajv()
    let validate = ajv.compile(schema)
    let valid = validate(JSON.parse(str))
    if (!valid) {
      console.log(validate.errors)
    }
    else {
      // 「変更をアプリケーションの状態にcommitする」、つまり、先ほど書いたstateを書き換えることを示しています。
      // → つまり Mutation のこと
      commit(CHANGE_CHART_DATA, str)
    }
  }
}

/*
 * Mutations
 * 状態への変更処理
 */
const mutations = {
  [CHANGE_CHART_DATA] (state, str) {
    // State を変更
    state.chartData = str
    console.log('store.js mutations: [CHANGE_CHART_DATA] str = ', str)
  }
}

/*
 * Getters
 */
const getters = {
  getSearchResults () {
    // filter
    return state.searchResults.filter((item) => {
      let pattern = `${state.searchStr}`
      let regexp = new RegExp(pattern)
      return regexp.test(item.title) || regexp.test(item.body)
    })
  },
  getChartData: state => {
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
