// redirect.js navigator.js
var app = getApp()
Page({
  data: {
    // 页面配置 
    winWidth: 0,
    winHeight: 0,
    // tab切换  
    currentTab: 0,
    nums:20,
    trus:true,
    scrollHeight:"100%"
  },
  //“ 哈哈”截获手动滑动
  catchTouchMove: function (res) {
    return false
  },
  onLoad: function () {
    var that = this;
    /** 
     * 获取系统信息 
     */
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }
    });
    wx: wx.setNavigationBarTitle({
      title: '导航',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) {},
    })
  },

  onShow: function () {
    console.log(1);
  },
  bindDownLoad: function () {
    console.log(2);
    var _this = this; 
    console.log(_this.data.trus);
    
    if (_this.data.trus){
      _this.popMaskTest();
      _this.setData({ trus: false});
      setTimeout(function (){
        _this.setData({
          nums: _this.data.nums + 20,
          trus:true,
        });
      },2000);
    }



    
  },
  scroll: function (event) {
    console.log(3);
  },
  refresh: function (event) {
    console.log(4);
  },
  popMaskTest: function () {
    wx.showToast({
      title: '加载中...',
      duration:2000,
      mask: true    //是否有透明蒙层，默认为false 
      //如果有透明蒙层，弹窗的期间不能点击文档内容 
    })
  },
  /** 
     * 滑动切换tab 
     */
  bindChange: function (e) {
    var that = this;
    that.setData({ currentTab: e.detail.current });
  },
  /** 
   * 点击tab切换 
   */
  swichNav: function (e) {
    var that = this;
    console.log(this.data.winHeight);
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  onReady: function () {
    console.log(11);
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.joke();
    console.log("下拉");
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("上拉");
  }
}) 