// pages/template/template.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  btn1: function () {
    console.log("btn1");
  },
  btn2: function () {
    console.log("btn2");
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx:wx.setNavigationBarTitle({
      title: '模板',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  popSuccessTest: function () {
    wx.showToast({
      title: '成功提示弹窗',
      icon: '',     //默认值是success,就算没有icon这个值，就算有其他值最终也显示success
      duration: 2000,  //停留时间
    })
  },
  popMaskTest: function () {
    wx.showToast({
      title: '带蒙层的弹窗',
      duration: 5000,
      mask: true    //是否有透明蒙层，默认为false 
      //如果有透明蒙层，弹窗的期间不能点击文档内容 
    })
  },
  popTest: function () {
    wx.showToast({
      title: '纯文字弹窗',
      icon: 'none',    //如果要纯文本，不要icon，将值设为'none'
      duration: 2000
    })
  },
  popCustomIcon: function () {
    wx.showToast({
      title: '自定义图标弹窗',
      image: '../../static/image/icon.png',  //image的优先级会高于icon
      duration: 2000
    })
  },
  popConfirm: function () {
    wx.showModal({
      title: 'confirm的弹窗',
      content: '确认要删除该项吗？',
      success: function (res) {
        if (res.confirm) {
          console.log('点击确认回调')
        } else {
          console.log('点击取消回调')
        }
      }
    })
  },
  popLoading: function () {
    wx.showLoading({
      title: '加载中...'
    });
  },
  popSelect: function () {
    wx.showActionSheet({
      itemList: ['A', 'B', 'C'],
      success: function (res) {
        console.log(res);
      }
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