import { CHANGE_CURRENT_STATION } from '../mutation-types.js'

const state = {
  currentStation: -1
}

const mutations = {
  [CHANGE_CURRENT_STATION] (state, newStation) {
    state.currentStation = newStation
  }
}

export default {
  state,
  mutations
}
