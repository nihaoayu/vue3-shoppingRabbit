// 用户状态
import { userAccountLogin } from '@/api/user'
export default {
  namespaced: true,
  state: () => ({
    profile: {
      id: '',
      avatar: '',
      nickname: '',
      account: '',
      mobile: '',
      token: ''
    }
  }),
  mutations: {
    setProfile (state, profile) {
      state.profile = profile
    },
    delProfile (state) {
      state.profile = {}
    }
  },
  actions: {
    async updateProfile ({ commit }, formData) {
      const res = await userAccountLogin(formData)
      commit('setProfile', res)
    }
  }
}
