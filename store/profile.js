import EasyAccess, { defaultMutations } from 'vuex-easy-access'

export const state = () => ({
  profile: {},
  loading: false,
  status: '',
})

export const mutations = { ...defaultMutations(state()) }

export const plugins = [EasyAccess()]

export const actions = {
  getProfile({ dispatch }, params) {
    dispatch('set/loading', true)

    this.$axios
      .get(`profile/me`, { params })
      .then((res) => {
        dispatch('set/loading', false)
        dispatch('set/status', 'success')
        // dispatch('set/profile', res)
        console.log(res)
      })
      .catch((err) => {
        console.error(err)
        dispatch('set/loading', false)
      })
  },
  postRegister({}, formData) {
    return this.$axios.post(`register`, formData)
  },
  postLogin({}, formData) {
    return this.$axios.post(`oauth/sign_in`, formData)
  },
  postOTPRequest({}, formData) {
    return this.$axios.post(`register/otp/request`, formData)
  },
  postVerification({}, formData) {
    return this.$axios.post(`register/otp/match`, formData)
  },
  getCountryCode() {
    return fetch(window.location.origin + "/phone.json").then(d => d.json())
  },
  getCountryName() {
    return fetch(window.location.origin + "/names.json").then(d => d.json())
  },
}
