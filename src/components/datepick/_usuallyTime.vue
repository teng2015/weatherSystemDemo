<template>
  <div class="pick-area" v-show="show" transition="pick-area" transition-mode="out-in" :style="{'left':x+'px','top':y+'px'}">
    <ul>
      <li v-for="item in usuallyData">
        <a class="btn btn-default btn-user" :class="{'current-selected': item.selected, 'btn-user-3': $index == 4 || $index == 5 || $index == 6 || $index == 23 || $index == 24 || $index == 25}" @click="select($index, $event)">{{ item.name }}</a>
      </li>
    </ul>
    <div class="user-periodtime">
      <p class="pull-left">自定义时段：</p>
      <input type="number" class="time-input pull-left" @click.stop="cancelSelect" step="1" min="0" :max="currentHour - 1" v-model="userBegin" />
      <p class="pull-left">&nbsp;~&nbsp;</p>
      <input type="number" class="time-input pull-left" @click.stop="cancelSelect" step="1" min="1" :max="currentHour" v-model="userEnd" />
    </div>
    <p class="pull-left">&nbsp;时</p>
    <div class="decide-button">
      <button @click="ok">确定</button>
    </div>
  </div>
</template>

<script>
  import { selectTimeData } from 'assets/json/selectTimeData.js'
  import { getSecondMonthDays, zero } from '../../util/dateUtil.js'
  export default {
    props: {
      show: {
        type: Boolean,
        twoWay: true,
        default: false
      },
      value: {
        type: String,
        twoWay: true,
        default: ''
      },
      x: {
        type: Number,
        default: 0
      },
      y: {
        type: Number,
        default: 0
      }
    },
    data () {
      return {
        usuallyData: selectTimeData,
        currentSlected: -1,
        userBegin: 8,
        userEnd: 10
      }
    },
    computed: {
      currentHour () {
        let date = new Date()
        return date.getHours()
      }
    },
    methods: {
      select (index, e) {
        if (this.currentSlected !== -1) {
          this.usuallyData[this.currentSlected]['selected'] = false
        }
        this.usuallyData[index]['selected'] = true
        this.currentSlected = index
        this.value = this.returnSelectDate(index)
      },
      cancelSelect () {
        if (this.currentSlected !== -1) {
          this.usuallyData[this.currentSlected]['selected'] = false
          this.currentSlected = -1
        }
      },
      ok () {
        this.cancelSelect()
        if (parseInt(this.userBegin) > parseInt(this.userEnd)) {
          this.value = zero(this.userEnd) + ':00 ~ ' + zero(this.userBegin) + ':00'
        } else {
          this.value = zero(this.userBegin) + ':00 ~ ' + zero(this.userEnd) + ':00'
        }
      },
      returnSelectDate (index) {
        let date = new Date()
        let year = date.getFullYear()
        switch (index) {
          case 0:
            return '1小时'
          case 1:
            return '3小时'
          case 2:
            return '6小时'
          case 3:
            return '12小时'
          case 4:
            return '今天'
          case 5:
            return '昨天'
          case 6:
            return '前天'
          case 7:
            return year + '-' + '01' + '-' + '01' + ' ~ ' + year + '-' + '01' + '-' + '31'
          case 8:
            return year + '-' + '02' + '-' + '01' + ' ~ ' + year + '-' + '02' + '-' + getSecondMonthDays(year)
          case 9:
            return year + '-' + '03' + '-' + '01' + ' ~ ' + year + '-' + '03' + '-' + '31'
          case 10:
            return year + '-' + '04' + '-' + '01' + ' ~ ' + year + '-' + '04' + '-' + '30'
          case 11:
            return year + '-' + '05' + '-' + '01' + ' ~ ' + year + '-' + '05' + '-' + '31'
          case 12:
            return year + '-' + '06' + '-' + '01' + ' ~ ' + year + '-' + '06' + '-' + '30'
          case 13:
            return year + '-' + '07' + '-' + '01' + ' ~ ' + year + '-' + '07' + '-' + '31'
          case 14:
            return year + '-' + '08' + '-' + '01' + ' ~ ' + year + '-' + '08' + '-' + '31'
          case 15:
            return year + '-' + '09' + '-' + '01' + ' ~ ' + year + '-' + '09' + '-' + '30'
          case 16:
            return year + '-' + '10' + '-' + '01' + ' ~ ' + year + '-' + '10' + '-' + '31'
          case 17:
            return year + '-' + '11' + '-' + '01' + ' ~ ' + year + '-' + '11' + '-' + '30'
          case 18:
            return year + '-' + '12' + '-' + '01' + ' ~ ' + year + '-' + '12' + '-' + '31'
          case 19:
            return year + '-' + '01' + '-' + '01' + ' ~ ' + year + '-' + '03' + '-' + '31'
          case 20:
            return year + '-' + '04' + '-' + '01' + ' ~ ' + year + '-' + '06' + '-' + '30'
          case 21:
            return year + '-' + '07' + '-' + '01' + ' ~ ' + year + '-' + '09' + '-' + '30'
          case 22:
            return year + '-' + '10' + '-' + '01' + ' ~ ' + year + '-' + '12' + '-' + '31'
          case 23:
            return year + '-' + '01' + '-' + '01' + ' ~ ' + year + '-' + '06' + '-' + '30'
          case 24:
            return year + '-' + '07' + '-' + '01' + ' ~ ' + year + '-' + '12' + '-' + '31'
          case 25:
            return year + '-' + '01' + '-' + '01' + ' ~ ' + year + '-' + '12' + '-' + '31'
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .pick-area {
    width: 255px;
    padding: 10px;
    background: #fff;
    position: absolute;
    border: 1px solid #DEDEDE;
    border-radius: 2px;
    opacity:.95;
    transition: all .3s ease;
  }
  .pick-area-enter, .pick-area-leave {
    opacity: 0;
    transform: translate3d(0,-10px, 0);
  }
  .pick-area:before {
    position: absolute;
    left:30px;
    top: -10px;
    content: "";
    border:5px solid rgba(0, 0, 0, 0);
    border-bottom-color: #DEDEDE;
  }
  .pick-area:after {
    position: absolute;
    left:30px;
    top: -9px;
    content: "";
    border:5px solid rgba(0, 0, 0, 0);
    border-bottom-color: #fff;
  }
  .btn-user {
    color: #666;
    font-weight: bold;
    float: left;
    width: 50px;
    text-align: center;
    padding: 5px 0;
    margin: 4px 4px;
  }
  .btn-user-3 {
    width: 69px;
  }
  .user-periodtime {
    p {
      font-size: 1.1em;
      line-height: 1.5em;
    }
  }
  .current-selected {
    background-color: #5e7a88;
    color: #fff;
  }
  .time-input {
    width: 50px;
  }
  .decide-button{
    text-align: center;
  }
  .decide-button button{
    border:none;
    cursor: pointer;
    display: inline-block;
    min-height: 1em;
    min-width: 8em;
    background:#5e7a88;
    color:#fff;
    margin: 10px 0 0 0;
    padding: .8em 2.5em;
    font-size: 1em;
    line-height: 1em;
    text-align: center;
    border-radius: .3em;
  }
</style>