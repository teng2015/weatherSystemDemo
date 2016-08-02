<template>
  <div class="data-table">
    <div class="time-pick">
      <label>按时间查询：</label>
      <input type="text" :value="filterPickShow" placeholder="请输入日期" disabled="disabled" />
      <calendar :show.sync="datePickShow" :value.sync="pickValue" :x="x1" :y="y1" :begin="begin" :end="end" :range="range"></calendar>
      <usually-time :show.sync="usuallyTimeshow" :value.sync="pickValue" :x="x2" :y="y2"></usually-time>
      <button class="btn btn-primary pick-day" @click="showCalendar">选择日期</button>
      <button class="btn btn-primary pick-usually" @click="showUsuallyTime">常用时间</button>
      <button class="btn btn-primary btn-lg btn-query" @click="query">查询</button>
    </div>
  </div>
</template>

<script>
  import 'font-awesome/css/font-awesome.min.css'
  import Calendar from 'components/calendar.vue'
  import UsuallyTime from 'components/UsuallyTime.vue'
  import { transformDate } from '../../util/dateUtil.js'
  export default {
    data () {
      return {
        datePickShow: false,
        usuallyTimeshow: false,
        type: 'date',
        pickValue: this.getCurrentDate(),
        begin: '2010-07-01',
        end: this.getCurrentDate(),
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 0,
        range: true
      }
    },
    computed: {
      filterPickShow () {
        let pickValue = this.pickValue
        if (pickValue.length > 15) {
          let start = pickValue.slice(0, 10)
          let end = pickValue.slice(13)
          if (start === end) {
            return start
          } else {
            return pickValue
          }
        } else {
          return pickValue
        }
      },
      queryValue () {
        let date = transformDate(this.filterPickShow)
        return date
      }
    },
    components: {
      Calendar,
      UsuallyTime
    },
    methods: {
      showCalendar (e) {
        this.usuallyTimeshow = false
        e.stopPropagation()
        let that = this
        that.datePickShow = true
        that.x1 = e.target.offsetLeft
        that.y1 = e.target.offsetTop + e.target.offsetHeight + 8
        var bindHide = function (e) {
          e.stopPropagation()
          that.datePickShow = false
          document.removeEventListener('click', bindHide, false)
        }
        setTimeout(function () {
          document.addEventListener('click', bindHide, false)
        }, 500)
      },
      showUsuallyTime (e) {
        this.datePickShow = false
        e.stopPropagation()
        let that = this
        that.usuallyTimeshow = true
        that.x2 = e.target.offsetLeft
        that.y2 = e.target.offsetTop + e.target.offsetHeight + 8
        var bindHide = function (e) {
          e.stopPropagation()
          that.usuallyTimeshow = false
          document.removeEventListener('click', bindHide, false)
        }
        setTimeout(function () {
          document.addEventListener('click', bindHide, false)
        }, 500)
      },
      getCurrentDate () {
        let today = new Date()
        let current = ''
        let month = today.getMonth() + 1
        let day = today.getDate()
        if (month < 10) month = '0' + month
        if (day < 10) day = '0' + day
        current = today.getFullYear() + '-' + month + '-' + day
        return current
      },
      query () {
        console.log(this.queryValue)
      }
    }
  }
</script>

<style lang="less" scoped>
  .clearfix() {
    *zoom: 1;
    &:before,
    &:after {
      display: table;
      content: "";
    }
    &:after {
      clear: both;
    }
  }
  .data-table {
    width: 100%;
    height: 100%;
    background-color: #eee;
  }
  .time-pick {
    .clearfix();
    position: relative;
    width: 100%;
    padding: 6px 0 0 12px;
    label {
      float: left;
      display: block;
      font-size: 1.5em;
      font-weight: normal;
      line-height: 50px;
    }
    input {
      float: left;
      display: block;
      width: 460px;
      height: 45px;
      font-size: 1.5em;
      padding-left: 8px;
    }
    .pick-day {
      position: absolute;
      left: 426px;
      top: 12px;
    }
    .pick-usually {
      position: absolute;
      left: 510px;
      top: 12px;
    }
    .btn-query {
      position: absolute;
      left: 610px;
      top: 6px;
    }
  }
</style>