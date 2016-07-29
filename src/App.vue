<template>
  <forecast-modal></forecast-modal>
  <admin-header></admin-header>
  <div class="maincontainer">
    <left-menu></left-menu>
    <router-view  transion="fade" transion-mode="out-in" keep-alive></router-view>
  </div>
  <footer>
    <forecast-area></forecast-area>
  </footer>
</template>

<script>
import 'leaflet/dist/leaflet.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'assets/style/reset.css'
import store from './vuex/store.js'
import AdminHeader from 'components/AdminHeader.vue'
import LeftMenu from 'components/LeftMenu.vue'
import ForecastArea from 'components/ForecastArea.vue'
import ForecastModal from 'components/ForecastModal.vue'

export default {
  store,
  components: {
    AdminHeader,
    LeftMenu,
    ForecastArea,
    ForecastModal
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
    overflow:hidden;
    left:0px;
    background:#ccc;
  }
  footer{   
    position:absolute;
    margin:0px;
    bottom:0;
    left:0;
    width:100%;
    height:330px;
    overflow:hidden;
    background:#eee;
    min-width:980px;
  }
  .fade-transition {
  transition: opacity .3s ease;
  }
  .fade-enter, .fade-leave {
  opacity: 0;
  }
</style>