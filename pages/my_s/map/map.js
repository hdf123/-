Page({
  data: {
    latitude1:34.7691233090938,
    longitude1:113.7734055519104,
    latitude2:34.7691233090938,
    longitude2:113.7734055519104,
    markers: [{
      id: 1,
      latitude:34.7691233090938,
      longitude:113.7734055519104,
      label:{
      // callout:{
        content: " 1今晚打老虎",  //文本
        color: '#FF0202',  //文本颜色
        borderRadius: 3,  //边框圆角
        borderWidth: 1,  //边框宽度
        borderColor: '#FF0202',  //边框颜色
        padding: 5,  //文本边缘留白
        // display: 'ALWAYS',
        anchorX:-40,
        anchorY:-10,
        textAlign: 'center'  //文本对齐方式。有效值: left, right, center
      }
    },{
      id: 2,
      latitude:34.768255,
      longitude:113.773063,
      label:{
      // callout:{
        content: " 2今晚打老虎",
        padding: 10,
        // display: 'ALWAYS',
        textAlign: 'center'
      }
    }],
    circles:[{
      latitude:0,
      longitude:0,
      color: '#FF0000DD',
      fillColor: '#7cb5ec66',
      radius:200,
      strokeWidth:1
    }]
  },
  onReady: function (e) {
    
  },
  cdts1:function(e){
    console.log(e);
  },
  cdts2:function(e){
    console.log(e);
  },
  onLoad: function (options) {
    /**
     * 获取当前坐标
     */
    var _this = this;
    wx.getLocation({
      type: 'gcj02',// 默认wgs84
      altitude: true,//高精度定位
      success: function (res){
        console.log(res);
        var lat=res.latitude;
        var lon=res.longitude;
        _this.setData({
          latitude2:lat,
          longitude2:lon,
         ['circles[0].latitude']:lat,
         ['circles[0].longitude']:lon
        })
      },
      fail: function (res) { },
      complete: function () { }
    });
  },
})
