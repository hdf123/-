//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  ajax(url,Type,params, successData, errorData, completeData,mun) {
    var methonType = "application/json";
    // var https = "http://39.104.127.252:8181/wanlitiaoyi/"
    if (Type == "POST") {
      methonType = "application/x-www-form-urlencoded"
    }
    wx.request({
      url:url,
      method: Type,
      header: {
        'content-type': methonType,
      },
      data: params,
      success: (res) => {
        successData(res)
      },
      error(res) {
        errorData(res)
      },
      complete(res) {
        completeData(res)
      }
    })
  },
  globalData: {
    userInfo: null,
    language: "中文",
    global:"这是一个全局变量",
    wlty: "http://39.104.127.252:8181/wanlitiaoyi/",
    gwapi: "https://www.zhaotool.com",
    juheapi:"http://v.juhe.cn",
    juheqq:'http://japi.juhe.cn'
  }
})