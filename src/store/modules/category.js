import { findGateGoryList } from '@/api/home'
export default {
  namespaced: true,
  state: {
    list: []
  },
  mutations: {
    setList (state, list) {
      state.list = list
    }
  },
  actions: {
    async getList ({ commit }) {
      const res = await findGateGoryList()
      commit('setList', res)
    }
  }
}
