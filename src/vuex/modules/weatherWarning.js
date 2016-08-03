import { SHOW_HIDE_WEATHERWARNING_MODAL } from '../mutation-types.js'

const state = {
  isShowWeatherWarningModal: false
}

const mutations = {
  [SHOW_HIDE_WEATHERWARNING_MODAL] (state, isShow) {
    state.isShowWeatherWarningModal = isShow
  }
}

export default {
  state,
  mutations
}
