<template>
  <div class="chart-area" :class="{'incre-size': resize}">
    <div class="control">
      <a class="control-resize" href="javascript:void(0);" @click="onResize">
        <span class="glyphicon" :class="resizeIcon"></span>
      </a>
      <ul class="chart-tab">
      <li class="tab-active"><a href="javascript:void(0);">气温</a></li>
        <li><a href="javascript:void(0);">湿度</a></li>
        <li><a href="javascript:void(0);">雨量</a></li>
        <li><a href="javascript:void(0);">风力</a></li>
        <li><a href="javascript:void(0);">气压</a></li>
      </ul>
    </div>
    <div id="chart"></div>
  </div>
</template>

<script>
  import echarts from 'echarts'
  export default {
    data () {
      return {
        resize: false,
        myChart: null
      }
    },
    computed: {
      resizeIcon () {
        let current = ''
        this.resize ? current = 'glyphicon-menu-down' : current = 'glyphicon-menu-up'
        return current
      }
    },
    methods: {
      onResize () {
        let that = this
        this.resize ? this.resize = false : this.resize = true
        setTimeout(function () {
          that.myChart.resize()
        }, 300)
      }
    },
    ready () {
      this.myChart = echarts.init(document.getElementById('chart'))
      this.myChart.setOption({
        title: { text: '气温' },
        color: ['red'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'line'
          }
        },
        xAxis: {
          data: ['7.20', '7.21', '7.22', '7.23', '7.24', '7.25', '7.26', '7.27']
        },
        yAxis: {},
        series: [{
          name: '气温',
          type: 'line',
          data: [25, 23, 29, 21, 19, 31, 28, 26]
        }]
      })
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
  .chart-area {
    bottom: 0;
    left: 940px;
    right: 0;
    height: 330px;
    position:absolute;
    display: block;
    background:#eee;
    z-index: 8888;
    transition: all 0.3s ease-in;
  }
  .incre-size {
    height: 500px;
    box-shadow: 6px -2px 4px 1px rgba(0,0,0,0.5);

  }
  .control {
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #eee;
    background-color: #f3f3f3;
    background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#f3f3f3), to(#e2e2e2));
    background-image: -webkit-linear-gradient(top, #f3f3f3, #e2e2e2);
    background-image: linear-gradient(to bottom, #f3f3f3, #e2e2e2);
    background-repeat: repeat-x;
    box-shadow: 0 1px 10px raba(0,0,0,0.8);
    
  }
  a.control-resize {
    float: left;
    width: 50px;
    height: 100%;
    line-height: 50px;
    display: block;
    text-align: center;
    font-size: 1.5em;
    &:focus {
      text-decoration: none;
    }
    &:hover {
      background-color: #f5f5f5;
    }
    border-right: 1px solid #ccc;
  }
  ul.chart-tab {
    .clearfix();
    li {
      height: 50px;
      float: left;
      border-right: 1px solid #e5e5e5;
      border-bottom: 1px solid #e5e5e5;
      border-top: 1px solid #e5e5e5;
      &:last-child {
        border-top-right-radius: 3px; 
      }
    }
    a {
      display: inline-block;
      color: #666;
      height: 100%;
      line-height: 50px;
      font-size: 22px;
      padding: 0 15px;
      &:hover {
        background-color: #f5f5f5;
      }
    }
  }
  .tab-active {
    background-color: #f5f5f5;
    border: 0;
  }

  #chart {
    position: absolute;
    bottom: 0;
    width: 100%;
    top: 50px;
  }
</style>