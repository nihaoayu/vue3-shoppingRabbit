// 购物车状态
export default {
  namespaced: true,
  state: () => ({
    list: []
  }),
  mutations: {
    // 添加到购物车，存储到本地
    singelGood (state, good) {
      const goodIndex = state.list.findIndex(item => item.skuId === good.skuId)
      if (goodIndex > -1) {
        state.list[goodIndex].count += good.count
      } else {
        state.list.unshift(good)
      }
    }
  },
  actions: {
    async singelGoodAction ({ commit, rootState }, good) {
      if (rootState.user.profile.token) {
        console.log('登录')
      } else {
        commit('singelGood', good)
        return '添加成功'
      }
    }
  }
}
