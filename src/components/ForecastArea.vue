<template>
  <div class="forecast-content">
    <div class="forecast-title">
      <h2>预报</h2>
    </div>
    <ul class="forecast">
      <li><a href="javascript:void(0)" @click="openForecastModal(0)">短临预报</a></li>
      <li><a href="javascript:void(0)" @click="openForecastModal(1)">24小时预报</a></li>
      <li><a href="javascript:void(0)" @click="openForecastModal(2)">48小时预报</a></li>
      <li><a href="javascript:void(0)" @click="openForecastModal(3)">72小时预报</a></li>
    </ul>
  </div>
</template>

<script>
  import { openForecastModal } from '../vuex/actions.js'
  export default {
    vuex: {
      actions: {
        openForecastModal
      }
    }
  }
</script>

<style lang="less" scoped>
  .forecast-content {
    width: 360px;
    top:0;
    left:0;
    height:100%;
    text-align: center;
    position:absolute;
    overflow:auto;
    display: block;
    background: #3a3633;
    background: -moz-linear-gradient(left, #3a3633 93%, #2a2725 100%);
    background: -webkit-gradient(linear, left top, right top, color-stop(93%, #3a3633), color-stop(100%, #2a2725));
    background: -webkit-linear-gradient(left, #3a3633 93%, #2a2725 100%);
    background: -o-linear-gradient(left, #3a3633 93%, #2a2725 100%);
    background: -ms-linear-gradient(left, #3a3633 93%, #2a2725 100%);
    background: linear-gradient(to right, #3a3633 93%, #2a2725 100%);
    border-top: 1px solid #525151;
  }
  .forecast-title {
    padding: 10px 0;
    box-shadow: inset 1px 1px 0 rgba(0, 0, 0, .1), inset 0 -1px 0 rgba(0, 0, 0, .07);
    border-bottom: 1px solid #525151;
    h2 {
    font: 22px "Microsoft Yahei","Hiragino Sans GB",Helvetica,"Helvetica Neue","微软雅黑",Tahoma,Arial,sans-serif;
    color: #fff;
    }
  }
  .forecast {
    text-align: center;
    a {
      display: inline-block;
      color: #c0bbb7;
      width: 100%;
      height: 68px;
      line-height: 68px;
      font-size: 18px;
      &:hover {
        background-color: #505050;
        color: #fff;
      }
    }
  }
</style>