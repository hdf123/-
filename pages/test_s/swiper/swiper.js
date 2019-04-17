Page({
  data: {
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    indicatorDots: true,
    vertical: false,//横竖滚动
    autoplay: false,//自动播放
    circular: false,//衔接滚动
    interval: 2000,//自动播放间隔时长
    duration: 500,//幻灯片切换时长
    previousMargin: 0,//前边距
    nextMargin: 0//后边距
  },
  onLoad:function(){
    wx:wx.setNavigationBarTitle({
      title: '轮播',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  changeProperty: function (e) {
    var propertyName = e.currentTarget.dataset.propertyName
    var newData = {}
    console.log(propertyName);
    newData[propertyName] = e.detail.value
    this.setData(newData)
  },
  changeIndicatorDots: function (e){
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  }
})
