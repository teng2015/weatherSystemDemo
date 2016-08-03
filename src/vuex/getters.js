// 预报框是否显示
export function getForecastModal (state) {
  return state.forecast.forecastModal
}

// 获取预报框类型
export function getForecastType (state) {
  return state.forecast.forecastType
}

// 预警窗口是否显示
export function getWeatherWarningModalIsShow (state) {
  return state.weatherWarning.isShowWeatherWarningModal
}

// 获取当前选中站点
export function getCurrentStation (state) {
  return state.station.currentStation
}
