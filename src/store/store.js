/* Mutation Type を読み込む */
import { CHANGE_CHART_DATA } from './types'
import Ajv from 'ajv'
import isJson from '../utils'
import { SCHEMA_CHART } from '../schema'

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
  /* chart default value */
  chartData: '{}'
}

/*
 * Actions
 * ユーザの操作/APIとのやりとり
 * アプリケーションの状態を変更するようなユーザからの入力や外部APIの呼び出しは、Actionsと呼ばれます。
 */
const actions = {
  [CHANGE_CHART_DATA] ({ commit }, str) { // DataArea.vue の @change より
    console.log('store.actions2:[CHANGE_CHART_DATA] str= ', str)
    var schema = {
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
    var ajv = new Ajv()
    var validate = ajv.compile(schema)
    var valid = validate(JSON.parse(str))
    if (!valid) {
      console.log('hogehogehoge')
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
    console.log('mutation2 commit: [CHANGE_CHART_DATA] state.searchStr= ', str)
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
    var ret = ''
    console.log('store.js getChartData ==========>')
    console.log(state.chartData)
    var v = state.chartData
    if (!isJson(v)) {
      console.log('Invalid JSON. DataArea set.')
    }
    else {
      var schema = SCHEMA_CHART
      var ajv = new Ajv()
      var validate = ajv.compile(schema)
      var valid = validate(JSON.parse(v))
      if (!valid) {
        console.log('invalid')
        console.log(validate.errors)
        ret = '{}'
      }
      else {
        ret = state.chartData
      }
    }
    console.log(ret)
    return state.chartData
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
