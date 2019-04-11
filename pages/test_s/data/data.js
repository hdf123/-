// pages/page-callback/a-page/a-page.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    _title:"传递数据",
    name: '我是张三',
    dataFromB: ''
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var a = options.a; // 值：1
    var b = options.b; // 值：2
    console.log(a);
    console.log(b);
    wx:wx.setNavigationBarTitle({
      title: this.data._title
    })
  },

  goToPageB: function () {
    wx.navigateTo({
      url: '../b-page/b-page',
    })
  }


})