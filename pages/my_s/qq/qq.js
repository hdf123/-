// pages/my_s/qq/qq.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    test01:'',
    test02:''
  },
  qq: function (e) {//获取input的值,手机号
    console.log(e);
    this.setData({
      qq: e.detail.value
    })
  },
  test:function(e){
    if (!this.data.qq){
      wx.showToast({
        title: '输入不可为空',
        icon: 'false',
        image: '../../../img/shibai.png',
        duration:2000,
      })
      return ;
    }
    var _this=this;
    var params={
      key:'402c12a520e3327bb74eb0d529f9d627',
      qq: this.data.qq
    }
    app.ajax(app.globalData.juheqq + "/qqevaluate/qq", "get", params, (res) => {
      console.log(res.data)
      if(res.data.error_code==0){
        var data = res.data.result.data;
        _this.setData({
          test01: "解语："+data.analysis,
          test02: "命数："+data.conclusion,
          state:1
        });
      } else if (res.data.error_code == 10012) {
        console.log("超过每日可允许请求次数!");
      } else {
        console.log("请求失败!");
      }
    }, (res) => {
      console.log(err);
    }, (res) => { });
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
  onShareAppMessage: function (res) {
    if(res.from=="button"){
      //来自页面转发按钮
      console.log(res.target,res);
    }
    return {
      title:"今晚打老虎2",
      path:'pages/index/index',
      imageUrl:'../../../img/shibai.png'
    }
  }
})