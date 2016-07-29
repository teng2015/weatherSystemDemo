<template>
  <div id="ggmap"></div>
</template>

<script>
  var L = require('leaflet')
  export default {
    data () {
      return {
        map: null,
        pupup: null,
        luQuanBound: require('assets/json/luQuanBound.json'),
        boundStyle: {
          'color': 'blue',
          'weight': 5,
          'fill': false,
          'dashArray': '5, 5'
        }
      }
    },
    ready () {
      let that = this

      let maxBound = L.latLngBounds(L.latLng(26.55954, 101.73889), L.latLng(25.26258, 103.63403))

      this.map = L.map('ggmap', {
        minZoom: 9,
        maxZoom: 18,
        maxBounds: maxBound
      }).setView([25.90667, 102.58759], 9)

      // 单击地图popup出当前坐标
      this.map.on('click', this.onMapClick)

      let baseLayers = {
        '电子地图': L.tileLayer('https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}', {
          attribution: '卫星地图'
        }),
        '卫星地图': L.tileLayer('https://www.google.cn/maps/vt?lyrs=y@189&gl=cn&x={x}&y={y}&z={z}', {
          attribution: '电子地图'
        }).addTo(this.map)
      }

      L.control.layers(baseLayers, {}, {
        position: 'topleft',
        collapsed: true
      }).addTo(this.map)

      this.labelgroup = new L.LayerGroup()

      this.popup = L.popup()

      /* L.tileLayer('http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}', {
        attribution: '谷歌地图'
      }).addTo(this.map) */

      L.geoJson(this.luQuanBound, this.boundStyle).addTo(this.map)

      let circleMaker = L.circleMarker([25.96397, 102.57935], {
        radius: 6,
        color: '#fff',
        fill: true,
        weight: 2,
        opacity: 1,
        fillColor: 'blue',
        fillOpacity: 0.8
      }).addTo(this.map)

      // 利用此监听器取消浏览器右键默认菜单
      this.map.on('contextmenu')

      circleMaker.bindPopup('禄劝县物联网监测点！')

      /* circleMaker.on('click', function () {
        that.map.setView([25.90667, 102.58759], 8)
      }) */

      this.map.on('zoomend', function () {
        if (that.map.getZoom() > 10) {
          console.log(that.map.getZoom())
        }
      })

      // this.map.removeLayer(luquanLayer)
    },
    methods: {
      onMapClick (e) {
        this.popup.setLatLng(e.latlng)
        .setContent('You clicked the map at ' + e.latlng.toString())
        .openOn(this.map)
      }
    }
  }
</script>

<style lang="less" scoped>
  #ggmap {
    width: 100%;
    height: 100%;
  }
</style>