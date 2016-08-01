// 预报框是否显示
export function getForecastModal (state) {
  return state.forecast.forecastModal
}

// 获取预报框类型
export function getForecastType (state) {
  return state.forecast.forecastType
}

// 获取当前选中站点
export function getCurrentStation (state) {
  return state.station.currentStation
}
