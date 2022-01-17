// 购物车状态
export default {
  namespaced: true,
  state: () => ({
    list: []
  }),
  getters: {
    // 计算有效商品列表 isEffective = true  filter
    vaildList (state) {
      return state.list.filter(item => item.isEffective === true)
    },
    // 已选中列表 selected = true
    vaildSelected (state, getters) {
      return getters.vaildList.filter(item => item.selected)
    },
    // 已选择列表总钱数  selectedList 中所有项的单价*数据进行叠加
    vaildAllSelected (state, getters) {
      return getters.vaildSelected.reduce((a, c) => a + c.count * c.nowPrice, 0)
    },
    // 全选：有效列表中的seleted字段全为true 才为true
    isAll (state, getters) {
      return getters.vaildList.every(item => item.selected)
    }
  },
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
