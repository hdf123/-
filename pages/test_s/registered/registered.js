// pages/registered/registered.js
var md5 = require('../../../js/md5.js');
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    _title:"注册",
    code:"获取验证码",
  },
  userNameInput: function (e) {//获取input的值,手机号
    this.setData({
      userName: e.detail.value
    })
  },
  passWdInput: function (e) {//获取input的值，密码
    this.setData({
      userPwd: e.detail.value
    })
  },
  codeInput: function (e) {//获取input的值，验证码
    this.setData({
      codes: e.detail.value
    })
  },
  /**
   * 获取验证码
   */
  registered: function () {
    var input =this.data.userName; // 获取当前表单元素输入框内容
    console.log(input);
    if (!input){
      wx.showToast({
        title: '输入不能为空',
        icon: 'false',
        image:'../../img/shibai.png',
        duration: 2000
      }) 
    }else{
      var _this = this;

      //这是一个变量，即传进ajax的参数
      var params = {
        mobilePhone: input
      }
      app.ajax(app.globalData.wlty +"user/doCode","get", params,(res) => {
        console.log(res.data)
        _this.setData({
          code: res.data.message
        }),
        wx.hideLoading()
      }, (res) => {
        console.log(res.data)
      }, (res) => { });
    }
  },
/**
 * 注册
 */

  registereds:function(e){
    console.log("用户名：" + this.data.userName + " 密码：" + this.data.userPwd + "验证码：" + this.data.code);
    var input1 = this.data.userName; // 获取当前表单元素输入框内容
    var input2 = md5.hexMD5(this.data.userPwd); // 获取当前表单元素输入框内容
    var input3 = this.data.codes; // 获取当前表单元素输入框内容
    if (!input1 ||!input2) {
      wx.showToast({
        title: '输入不能为空',
        icon: 'false',
        image: '../../img/shibai.png',
        duration: 2000
      })
    }
    var _this = this;
    var params = {
      userName: input1,
      password: input2,
      code: input3
    }
    app.ajax("post", params, "user/register", (res) => {
        console.log(res.data)
        if (res.data.success){
          wx.showToast({
            title: '注册成功',
            image: '../../img/correct.png',
            duration: 2000
          })
        }else{
          console.log(res.data.message);
        }
    }, (res) => {
      console.log(res);
      wx.showToast({
        title: '注册失败',
        image: '../../img/shibai.png',
        duration: 2000
      })
    }, (res) => { });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: this.data._title
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