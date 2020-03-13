// redirect.js navigator.js
var app = getApp()
Page({
  data: {
    // 页面配置 
    winWidth: 0,
    winHeight: 0,
    Heia:0,
    Heib:0,
    // tab切换  
    currentTab: 0,
    numa:20,
    trua:true,
    scrollTop:0,
    scrollHeight:"100%",
    ksk:false
  },
  //“ 哈哈”截获手动滑动
  catchTouchMove: function (res) {
    return false;
  },
  onLoad: function () {
    var that = this;
    const query = wx.createSelectorQuery();
    // 获取顶部和底部的高度
    query.select('.swiper-tab').boundingClientRect()
    query.select('.bosx').boundingClientRect()
    query.exec((res)=>{
      console.log(res);
      that.setData({
        Heia: res[0].height,
        Heib: res[1].height,
      })
    })
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
  /**
   * 页面显示时触发
   */
  onShow: function () {},
  
  DownLoad1: function () {
    console.log('到底了---');
    var _this = this; 
    if (_this.data.trua){
      _this.popMaskTest();
      _this.setData({ trua: false});
      setTimeout(function (){
        _this.setData({
          numa: _this.data.numa + 20,
          trua:true,
        });
      },2000);
    }
  },
  scroll: function (event) {
    console.log(3);
  },
  refresh: function (event) {
    console.log("到顶了---");
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
  // e.target.dataset.current：事件内没有其他元素
  //e.currentTarget.dataset.current：事件内包含其他元素
  swichNav: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
    console.log(e.target.dataset.current);
    console.log(e.currentTarget.dataset.current);
  },
  onReady: function () {
    
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log("下拉");
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("上拉");
  }
}) 