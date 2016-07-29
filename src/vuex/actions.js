export const openForecastModal = ({dispatch}, type) => {
  dispatch('FORECAST_MODAL_SHOW_HIDE', true, type)
}

export const closeForecastModal = ({dispatch}) => {
  dispatch('FORECAST_MODAL_SHOW_HIDE', false, 0)
}
