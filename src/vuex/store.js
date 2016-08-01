import Vue from 'vue'
import Vuex from 'vuex'
import forecast from './modules/forecast.js'
import station from './modules/station.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    forecast,
    station
  }
})
