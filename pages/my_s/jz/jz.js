// pages/my_s/jz/jz.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    select: false,
    tihuoWay: '科目1',
    select_s: false,
    tihuoWay_s: 'c1',
    arrs: []
  },
  bindShowMsg() {
    this.setData({
      select: !this.data.select
    })
  },
  mySelect(e) {
    var name = e.currentTarget.dataset.name
    this.setData({
      tihuoWay: name,
      select: false
    })
  },
  bindShowMsg_s() {
    this.setData({
      select_s: !this.data.select_s
    })
  },
  mySelect_s(e) {
    var name = e.currentTarget.dataset.name
    this.setData({
      tihuoWay_s: name,
      select_s: false
    })
  },
  btn(){
    var _this = this;
    var subjects = this.data.tihuoWay;
    var typea = this.data.tihuoWay_s;
    var subjectk= subjects.charAt(subjects.length - 1);
    if (subjectk =="4"){
      typea=''
    }
    wx.navigateTo({
      title: "goback",
      url: "../jzs/jzs?subjectk=" + subjectk + "&typea=" + typea,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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