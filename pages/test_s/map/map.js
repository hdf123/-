Page({
  data: {
    latitude: 23.099994,
    longitude: 113.324520,
    markers: [{
      id: 1,
      latitude: 23.099994,
      longitude: 113.324520,
      name: 'T.I.T 创意园'
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
  test() {
    // type：wgs84(是全球定位系统，获取的坐标，gcj02是国家测绘局给出的坐标)
    wx.getLocation({
      type: 'wgs84',// 默认wgs84
      success: function (res) {
        console.log(res);
      },
      fail: function (res) { },
      complete: function () { }
    });
    // 第一个：wx.chooseLocation：可以打开地图进行选择，之后返回给 complete 
    wx.getLocation({
      success: function (res) {
        console.log(res);

        
        // var latitude = res.latitude;
        // var longitude = res.longitude;
        // wx.chooseLocation({
        //   latitude = latitude,
        //   longitude = longitude,
        //   success: function (res) {
        //     console.log(res);
        //   },
        //   fail: function () { },
        //   complete: function () { }
        // });
      }
    });
    // 第二个：wx.openLocation：使用微信内置地图查看位置
    wx.getLocation({
      success: function (res) {
        console.log(res);

        // var latitude = res.latitude;
        // var longitude = res.longitude;
        // wx.openLocation({
        //   latitude = latitude,
        //   longitude = longitude,
        //   scale: 28
        // });
      }
    });

  },
  onLoad: function () {
    wx: wx.setNavigationBarTitle({
      title: '地图',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  onReady: function (e) {
    this.mapCtx = wx.createMapContext('myMap')
  },
  getCenterLocation: function () {//获取当前位置
    this.mapCtx.getCenterLocation({
      success: function (res) {
        console.log(res.longitude)
        console.log(res.latitude)
      }
    })
  },
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
  }
})
