//获取应用实例
// "pages/my_s/juhe/juhe",
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    directoryList: [
      { directory: "横向、纵向滚动", url: "../my_s/rolling/rolling" },
      { directory: "触摸水波涟漪效果", url: "../my_s/waves/waves" },
      { directory: "上拉加载，下拉刷新", url: "../my_s/juhe/juhe" },
      { directory: "QQ号码测吉凶", url: "../my_s/qq/qq" },
      { directory: "驾照题库", url: "../my_s/jz/jz" },
      { directory: "地图", url: "../my_s/map/map" },
      { directory: "测试", url: "../my_s/test/test" },
      { directory: "局部刷新加载、拖动", url: "../my_s/local/local" },
    ]
  },
  back: function (event) {
    wx.navigateTo({
      title: "goback",
      url: event.currentTarget.dataset.url,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx: wx.setNavigationBarTitle({
      title: '我的'
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})