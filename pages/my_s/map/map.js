Page({
  data: {
    latitude: 34.74606758446534,
    longitude: 113.63097634045808,
    markers: [{
      id: 1,
      latitude: 34.74725,
      longitude: 113.62493,
      name: '士大夫'
    }],
    covers: [{
      latitude: 23.099994,
      longitude: 113.344520,
      iconPath: '../../../img/location.png'
    }, {
      latitude: 23.099994,
      longitude: 113.304520,
        iconPath: '../../../img/location.png'
    }]
  },
  onReady: function (e) {
    this.mapCtx = wx.createMapContext('myMap')
  },
  test() {

    wx.getLocation({
      type: 'gcj02',// 默认wgs84
      altitude: true,//高精度定位
      success: function (res) {
        console.log(res);
        
      },
      fail: function (res) { },
      complete: function () { }
    });
  },
  /**
   * 获取位置
   */
  getCenterLocation: function () {
    var _this = this;
    this.mapCtx.getCenterLocation({
      success: function (res) {
        console.log(res.longitude)
        console.log(res.latitude)
        _this.setData({
          latitude: res.latitude,
          longitude: res.longitude,
        })
      }
    })
  },
  /**
   * 移动位置
   */
  moveToLocation: function () {
    this.mapCtx.moveToLocation()
  },
  translateMarker: function () {
    this.mapCtx.translateMarker({
      markerId: 1,
      autoRotate: true,
      duration: 1000,
      destination: {
        latitude: 23.10229,
        longitude: 113.3345211,
      },
      animationEnd() {
        console.log('animation end')
      }
    })
  },
  includePoints: function () {
    this.mapCtx.includePoints({
      padding: [10],
      points: [{
        latitude: 23.10229,
        longitude: 113.3345211,
      }, {
        latitude: 23.00229,
        longitude: 113.3345211,
      }]
    })
  },
  onLoad: function (options) {
    /**
     * 获取当前坐标
     */
    var _this = this;
    wx.getLocation({
      type: 'gcj02',// 默认wgs84
      altitude: true,//高精度定位
      success: function (res) {
        console.log(res);
        var kk = "markers[0].latitude";
        var ff = "markers[0].longitude";


        _this.setData({
          latitude: res.latitude,
          longitude: res.longitude,
          [kk]: res.latitude,
          [ff]: res.longitude
        })
      },
      fail: function (res) { },
      complete: function () { }
    });
  },
})
