import { defaultMutations } from 'vuex-easy-access'

export const state = () => ({
  profile: {},
  loading: {
    value: 24,
    show: true,
    query: false,
    interval: 0
  },
  status: '',
})

export const mutations = { ...defaultMutations(state()) }

export const getters = {
  getterProfile(state) {
    return state.profile
  },
  careers(state) {
    return state.profile.career
  },
  educations(state) {
    return state.profile.education
  },
  galleries(state) {
    return state.profile.user_pictures
  },
  loadings(state) {
    return state.loading
  },
}

export const actions = {
  getProfile({ dispatch }, params) {
    dispatch('set/loading', true)

    return this.$axios
      .get(`profile/me`, { params }, { progress: true })
      .then((res) => {
        dispatch('set/loading', false)
        dispatch('set/status', 'success')
        dispatch('set/profile', res.data.data.user)
      })
      .catch((err) => {
        dispatch('set/loading', false)
      })
  },
  postProfile({ dispatch }, formData) {
    this.$axios
      .post(`profile`, formData)
      .then((res) => {
        dispatch('set/profile', res.data.data.user)
      })
      .catch((err) => {
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
  postCareer({dispatch}, formData) {
    return this.$axios.post(`profile/career`, formData)
    .then((res) => {
      dispatch('set/profile', res.data.data.user)
    })
  },
  postEducation({dispatch}, formData) {
    return this.$axios.post(`profile/education`, formData)
    .then((res) => {
      dispatch('set/profile', res.data.data.user)
    })
  },
  postGalleries({dispatch}, formData) {
    return this.$axios.post(`uploads/profile`, formData)
    .then(() => {
      dispatch('getProfile')
    })
  },
  postCover({dispatch}, formData) {
    return this.$axios.post(`uploads/cover`, formData)
    .then(() => {
      dispatch('getProfile')
    })
  },
  postProfilePictureUpdate({dispatch}, formData) {
    return this.$axios.post(`uploads/profile`, formData)
  },
  getCountryCode() {
    return fetch(window.location.origin + "/phone.json").then(d => d.json())
  },
  getCountryName() {
    return fetch(window.location.origin + "/names.json").then(d => d.json())
  },
}
