// 打开预报框，参数是该预报框类型
export const openForecastModal = ({dispatch}, type) => {
  dispatch('FORECAST_MODAL_SHOW_HIDE', true, type)
}

// 关闭预报框
export const closeForecastModal = ({dispatch}) => {
  dispatch('FORECAST_MODAL_SHOW_HIDE', false, 0)
}

// 切换当前所选站点
export const changeCurrentStation = ({dispatch}, newStation) => {
  dispatch('CHANGE_CURRENT_STATION', newStation)
}
