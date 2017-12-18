import { M } from './types'

const state = {
  searchStr: '',
  searchResults: [
    { id: 0, title: 'データ1', body: 'データ1の内容です。123' },
    { id: 1, title: 'データ2', body: 'データ2の内容です。456' },
    { id: 2, title: 'データ3', body: 'データ3の内容です。789' }
  ],
  /* chart default value */
  chartData: JSON.stringify([
    { label: '2014-01-01', count: 10 },
    { label: '2014-02-01', count: 20 },
    { label: '2014-03-01', count: 40 },
    { label: '2014-04-01', count: 80 }
  ])
}

const getters = {
  getSearchResults () {
    // filter
    return state.searchResults.filter((item) => {
      let pattern = `${state.searchStr}`
      let regexp = new RegExp(pattern)
      return regexp.test(item.title) || regexp.test(item.body)
    })
  },
  getChartData () {
    console.log('store.js getChartData ==========>')
    console.log(state.chartData)
    return JSON.parse(state.chartData)
  }
}

const actions = {
  [M.CHANGE_SEARCH_STR] ({ commit }, str) {
    console.log('store.actions:[M.CHANGE_SEARCH_STR] str= ', str)
    commit(M.CHANGE_SEARCH_STR, str)
  },
  [M.CHANGE_CHART_DATA] ({ commit }, str) {
    console.log('store.actions2:[M.CHANGE_CHART_DATA] str= ', str)
    commit(M.CHANGE_CHART_DATA, str)
  }
}

const mutations = {
  [M.CHANGE_SEARCH_STR] (state, str) {
    state.searchStr = str
    console.log('mutation commit: [M.CHANGE_SEARCH_STR] state.searchStr= ', str)
  },
  [M.CHANGE_CHART_DATA] (state, str) {
    state.chartData = str
    console.log('mutation2 commit: [M.CHANGE_CHART_DATA] state.searchStr= ', str)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
