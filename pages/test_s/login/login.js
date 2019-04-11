var md5 = require('../../../js/md5.js');
const app=getApp();
Page({
  data: {
    _title:"登录",
    newsList: []
  },
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: this.data._title
    })
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
  login:function(){
    var _this = this;
    var input1 = this.data.userName; // 获取当前表单元素输入框内容
    var input2 = md5.hexMD5(this.data.userPwd); // 获取当前表单元素输入框内容
    console.log("用户名：" + input1 + " 密码：" + input2);
    wx.request({
      url: app.globalData.wlty+'user/mobilePhoneLogin',//请求地址
      header: {
        "Content-Type": "applciation/json"
      },
      data:{
        userName: input1,
        password: input2
      },
      method: 'post',
      success: function (res) {
        console.log(res.data)
        _this.setData({
          newsList: res.data.result
        })
      },
      fail: function (err) {

      }
    })
  }

})
