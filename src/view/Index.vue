<template>
  <div class="body">
    <forecast-modal></forecast-modal>
    <weather-warning></weather-warning>
    <admin-header></admin-header>
    <div class="maincontainer">
      <left-menu></left-menu>
      <router-view transion="fade" transion-mode="out-in"></router-view>
    </div>
    <footer>
      <forecast-area></forecast-area>
      <live-weather></live-weather>
      <charts></charts>
    </footer>
  </div>
</template>

<script>
import 'leaflet/dist/leaflet.css'
import AdminHeader from 'components/AdminHeader.vue'
import LeftMenu from 'components/LeftMenu.vue'
import ForecastArea from 'components/ForecastArea.vue'
import ForecastModal from 'components/ForecastModal.vue'
import WeatherWarning from 'components/WeatherWarning.vue'
import LiveWeather from 'components/LiveWeather.vue'
import Charts from 'components/Charts.vue'

export default {
  components: {
    AdminHeader,
    LeftMenu,
    ForecastArea,
    ForecastModal,
    WeatherWarning,
    LiveWeather,
    Charts
  }
}
</script>

<style lang="less">
  html, body {
    width: 100%;
    height: 100%;
    min-width: 980px;
  }
  a {
    text-decoration: none;
  }
  .maincontainer{
    position:absolute;
    top:60px;
    width:100%;
    bottom:330px;
    overflow: hidden;
    left: 0;
    background:#ccc;
  }
  footer{   
    position:absolute;
    margin:0px;
    bottom:0;
    left:0;
    width:100%;
    height:330px;
    background:#eee;
    min-width:980px;
    overflow: visible;
  }
</style>