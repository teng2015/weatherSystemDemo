<template>
  <div class="pick-area" v-show="show" transition="pick-area" transition-mode="out-in" :style="{'left':x+'px','top':y+'px'}">
    <ul>
      <li v-for="item in usuallyData">
        <a class="btn btn-default btn-user" :class="{'current-selected': item.selected, 'btn-user-3': $index == 4 || $index == 5 || $index == 6 || $index == 23 || $index == 24 || $index == 25}" @click="select($index, $event)">{{ item.name }}</a>
      </li>
    </ul>
    <div class="user-periodtime">
      <p class="pull-left">自定义时段：</p>
      <input type="number" class="time-input pull-left" @click.stop="cancelSelect" step="1" min="0" max="23" value="8" />
      <p class="pull-left">&nbsp;~&nbsp;</p>
      <input type="number" class="time-input pull-left" @click.stop="cancelSelect" step="1" min="1" max="24" value="10"></div>
      <p class="pull-left">&nbsp;时</p>
      <div class="decide-button">
        <button>确定</button>
      </div>
  </div>
</template>

<script>
  import { selectTimeData } from 'assets/json/selectTimeData.js'
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
        currentSlected: -1
      }
    },
    methods: {
      select (index, e) {
        if (this.currentSlected !== -1) {
          this.usuallyData[this.currentSlected]['selected'] = false
        }
        this.usuallyData[index]['selected'] = true
        this.currentSlected = index
      },
      cancelSelect () {
        this.usuallyData[this.currentSlected]['selected'] = false
        this.currentSlected = -1
      },
      returnSelectDate (index) {
        /* let date = new Date()
        let year = date.getFullYear()
        let month = date.getMonth() + 1
        let day = date.getDate()
        switch (index) {
          case 0:
        } */
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