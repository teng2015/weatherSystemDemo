import { FORECAST_MODAL_SHOW_HIDE } from '../mutation-types.js'

const state = {
  forecastModal: false,
  forecastType: 0
}

const mutations = {
  [FORECAST_MODAL_SHOW_HIDE] (state, isShow, type) {
    state.forecastModal = isShow
    state.forecastType = type
  }
}

export default {
  state,
  mutations
}
