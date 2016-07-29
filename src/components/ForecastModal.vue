<template>
  <div class="mask-layer" v-if="forecastModalIsShow">
    <div class="forecast-modal">

      <div class="forecast-header">
        <h3>{{ currentForecastType }}</h3>
        <div class="modal-close">
          <a href="javascript:void(0)" @click="closeForecastModal">X</a>
        </div>
      </div>

      <div class="forecast-body container-fluid">
        <div class="row">
          <p>天气现象：{{ weatherEvents }}</p>
          <v-select :value.sync="weatherEvents" :options="weatherEventsOps"></v-select>
        </div>
        <div class="row">
          <div class="col-sm-6">
            <p>高温(℃)：{{ degreeCentigradeMax }}</p>
            <input type="number" class="form-control" v-model="temperatureMax"></div>
          <div class="col-sm-6">
            <p>低温(℃)：{{ degreeCentigradeMin }}</p>
            <input type="number" class="form-control" v-model="temperatureMin"></div>
        </div>
        <div class="row">
          <p>风向：{{ windDirection }}</p>
          <v-select :value.sync="windDirection" :options="windDirectionOps"></v-select>
        </div>
        <div class="row">
          <p>风力：{{ windPower }}</p>
          <v-select :value.sync="windPower" :options="windPowerOps"></v-select>
        </div>
      </div>

      <div class="forecast-footer">
        <a class="btn btn-primary btn-lg" href="javascript:void(0)">发布{{ currentForecastType }}</a>
      </div>

    </div>
  </div>
</template>

<script>
  import vSelect from 'vue-select'
  import { getForecastModal, getForecastType } from '../vuex/getters.js'
  import { closeForecastModal } from '../vuex/actions.js'
  export default {
    data () {
      return {
        weatherEvents: null,
        weatherEventsOps: ['晴', '多云', '阴', '阵雨', '雷阵雨', '雷阵雨伴有冰雹', '雨夹雪', '小雨', '中雨', '大雨', '暴雨', '大暴雨', '特大暴雨', '阵雪', '小雪', '中雪', '大雪', '暴雪', '雾', '冻雨', '沙尘暴', '小到中雨', '中到大雨', '大到暴雨', '暴雨到大暴雨', '大暴雨到特大暴雨', '小到中雪', '中到大雪', '大到暴雪', '浮尘', '扬沙', '强沙尘暴', '霾'],
        temperatureMax: null,
        temperatureMin: null,
        windDirection: null,
        windDirectionOps: ['无持续风向', '东北风', '东风', '东南风', '南风', '西南风', '西风', '西北风', '北风', '旋转风'],
        windPower: null,
        windPowerOps: ['微风', '3-4级', '4-5级', '5-6级', '6-7级', '7-8级', '8-9级', '9-10级', '10-11级', '11-12级']
      }
    },
    computed: {
      degreeCentigradeMax () {
        if (this.temperatureMax != null) {
          return this.temperatureMax + '℃'
        }
      },
      degreeCentigradeMin () {
        if (this.temperatureMin != null) {
          return this.temperatureMin + '℃'
        }
      },
      currentForecastType () {
        switch (this.forecastType) {
          case 0:
            return '短临预报'
          case 1:
            return '24小时预报'
          case 2:
            return '48小时预报'
          case 3:
            return '72小时预报'
          default:
            return '短临预报'
        }
      }
    },
    vuex: {
      getters: {
        forecastModalIsShow: getForecastModal,
        forecastType: getForecastType
      },
      actions: {
        closeForecastModal
      }
    },
    components: {
      vSelect
    }
  }
</script>

<style lang='less' scoped>
  .mask-layer {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(0,0,0,0.6);
    z-index: 9999;
  }
  .forecast-modal {
    width: 680px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -240px;
    margin-left: -340px;
    background-color: #fff;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    box-shadow: 0 0 15px rgba(255,255,255,0.5);
  }
  .forecast-header {
    height: 45px;
    text-align: center;
    border-bottom: 1px solid #ccc;
    h3 {
      font-size: 18px;
      line-height: 45px;
    }
    .modal-close {
      position: absolute;
      top: 12px;
      right: 20px;
      a {
        font-size: 18px;
        font-weight: bolder;
        color: #000;
        &:hover {
          color: blue;
        }
      }
    }
  }
  .forecast-body {
    padding: 10px 20px;
    .row {
      margin: 20px 0;
    }
    p {
      font-size: 18px;
    }
    .col-sm-6 {
      padding: 0;
    }
  }
  .forecast-footer {
    text-align: center;
    height: 60px;
  }
</style>