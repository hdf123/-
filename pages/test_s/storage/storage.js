let util = require('../../../utils/storage');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    _title: "本地存储",
    storage:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: this.data._title
    })
  },
  userNameInput: function (e) {//获取input的值,手机号
    this.setData({
      userName: e.detail.value
    })
  },
  /**
   * 本地缓存
   */
  save:function(){
    util.put("失效期", this.data.userName,1)
  },
  obtain:function(){
    var _this = this;
    var datas=util.git("失效期");
    if (typeof (datas) =='undefined'){
      console.log('已过期');
    }
    _this.setData({
      storage: datas
    })
  },



  // save:function(){
  //   wx.setStorage({
  //     key: "本地缓存",
  //     data: this.data.userName
  //   })
  //   // wx.setStorageSync("本地缓存", this.data.userName)//同步缓存
  // },
  // obtain:function(){
  //   var _this=this;
  //   wx.getStorage({//从本地缓存中异步获取指定 key 对应的内容。
  //     key: '本地缓存',
  //     success: function (res) {
  //       _this.setData({
  //         storage:res.data
  //       })
  //     }
  //   })
  // },
  // delete: function () {//从本地缓存中异步移除指定 key 。
  //   var _this = this;
  //   wx.removeStorage({
  //     key: '本地缓存',
  //     success: function (res) {
  //       _this.setData({
  //         storage:"清除指定key完成"
  //       })
  //     }
  //   })
  // },
  // Clean: function () {//清理本地数据缓存
  //   var _this = this;
  //   wx.clearStorage({
  //     success: function (res) {
  //       _this.setData({
  //         storage: "全部清理完成"
  //       })
  //     }
  //   })
  // },
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