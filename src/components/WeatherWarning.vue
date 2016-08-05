<template>
  <div class="mask-layer" v-show="getWeatherWarningModalIsShow">
    <div class="warning-modal">

      <div class="warning-header">
        <h3>发布预警</h3>
        <div class="modal-close">
          <a href="javascript:void(0)" @click="closeWeatherWarningModal">X</a>
        </div>
      </div>

      <div class="warning-body container-fluid">
        <div class="row">
          <p>选择预警类型：{{ currentWarningTab }}</p>
          <v-select :value.sync="currentWarningTab" :options="allWarningTypeOps"></v-select>
        </div>
        <div class="warning-content" v-show="currentWarningTab">
          <div class="row">
            <div class="col-sm-3 warning-label">选择预警级别:</div>
            <div class="col-sm-2" v-for="item in currentLevelArray">
              <div class="radio">
                <label>
                  <input type="radio" name="levelRdio" @click="changeLevel(item.index)">
                  {{item.name}}预警
                </label>
              </div>
            </div>
          </div>
          <div v-if="currentLevel" class="row">
            <div class="col-sm-3 pull-left">
              <img :src="warningImg" height="100px">
            </div>
            <div class="col-sm-9 pull-right">
              <p>附加信息：</p>
              <textarea v-model="addInfo" class="form-control"></textarea>
            </div>
          </div>
      </div>

      <div class="warning-footer">
        <!-- <a class="btn btn-primary btn-lg" href="javascript:void(0)">预览</a> -->
        <a class="btn btn-primary btn-lg" href="javascript:void(0)">发布</a>
      </div>

    </div>
  </div>
</template>

<script>
  import vSelect from 'vue-select'
  import warningInfo from 'assets/json/warningType.json'
  import { getWeatherWarningModalIsShow } from '../vuex/getters.js'
  import { closeWeatherWarningModal } from '../vuex/actions.js'
  export default {
    data () {
      return {
        currentWarningTab: null,
        allWarningTypeOps: warningInfo.type,
        warningLevel: warningInfo.level,
        currentLevel: 0,
        addInfo: ''
      }
    },
    computed: {
      currentWarningIndex () {
        let opts = this.allWarningTypeOps
        let len = opts.length
        let currentTab = this.currentWarningTab
        if (currentTab) {
          for (var i = 0; i < len; i++) {
            if (currentTab === opts[i]) return i
          }
        }
      },
      currentLevelArray () {
        if (this.currentWarningTab) {
          let current = warningInfo.everyTypeLevel[this.currentWarningIndex]
          let temp = []
          if (typeof current !== 'number') {
            for (var i = 0; i < current.length; i++) {
              temp.push({name: this.warningLevel[current[i]], index: i + 2})
            }
          } else {
            for (var j = 0; j < current; j++) {
              temp.push({name: this.warningLevel[j], index: j + 1})
            }
          }
          return temp
        }
      },
      parseIndex () {
        let temp = this.currentWarningIndex + 1
        return temp < 10 ? '0' + temp : temp
      },
      warningImg () {
        return '/static/images/warning/w' + this.parseIndex + this.currentLevel + '.png'
      }
    },
    methods: {
      changeCurrentLevel (level) {
        this.currentLevel = level
      },
      changeLevel (index) {
        this.currentLevel = index
      }
    },
    vuex: {
      getters: {
        getWeatherWarningModalIsShow
      },
      actions: {
        closeWeatherWarningModal
      }
    },
    components: {
      vSelect
    },
    watch: {
      currentWarningTab () {
        this.currentLevel = 0
      }
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
  .warning-modal {
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
  .warning-header {
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
      right: 12px;
      transition: all ease-out .3s;
      &:hover {
        transform: rotate(180deg);
        -webkit-transform: rotate(180deg);
      }
      a {
        display: block;
        width: 25px;
        font-size: 18px;
        font-weight: bolder;
        color: #929292;

      }
    }
  }
  .warning-body {
    padding: 10px 20px;
    .row {
      margin: 0 0;
    }
    p {
      font-size: 18px;
    }
    .col-sm-6 {
      padding: 0;
    }
    img {
      margin-top: 5px;
    }
  }
  .warning-content {
    
  }
  .warning-label {
    line-height: 2.9em;
  }
  .warning-footer {
    text-align: center;
    height: 52px;
    line-height: 52px;
  }
  textarea {
    width: 460px;
    height: 76px;
    max-width: 460px;
    max-height: 76px;
  }
</style>