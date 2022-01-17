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
    },
    // 单选功能
    singelCheck (state, { good, isCheck }) {
      const currItem = state.list.find(item => item.skuId === good.skuId)
      currItem.selected = isCheck
    },
    // 全选
    allCheck (state, isCheck) {
      state.list.forEach(item => {
        item.selected = isCheck
      })
    },
    // 删除
    deleteGood (state, good) {
      const delIndex = state.list.findIndex(item => item.skuId === good.skuId)
      state.list.splice(delIndex, 1)
    },
    // 数量
    changeCount (state, { good, count }) {
      const currGood = state.list.find(item => item.skuId === good.skuId)
      currGood.count = count
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
    },
    // 单选
    async singelCheckAction ({ commit, rootState }, { good, isCheck }) {
      if (rootState.user.profile.token) {
      } else {
        commit('singelCheck', { good, isCheck })
      }
    },
    // 多选
    async allCheckAction ({ commit, rootState }, isCheck) {
      if (rootState.user.profile.token) {
      } else {
        commit('allCheck', isCheck)
      }
    },
    // 删除
    async deleteGoodAction ({ commit, rootState }, good) {
      if (rootState.user.profile.token) {
      } else {
        commit('deleteGood', good)
      }
    },
    async changeCountAction ({ commit, rootState }, { good, count }) {
      if (rootState.user.profile.token) {
      } else {
        commit('changeCount', { good, count })
      }
    }

  }
}
