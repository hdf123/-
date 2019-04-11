//index.js
var chinese = require("../../utils/Chinses.js")
var english = require("../../utils/English.js")
//获取应用实例
const app = getApp()

Page({
  data: {
    language: app.globalData.language,
  },
  onLoad: function () {
    var lastLanuage = app.globalData.language;
    this.getContent(lastLanuage);
    this.setData({
      motto: app.globalData.global
    });
    wx:wx.setNavigationBarTitle({
      title: '首页'
    })
  },
  changeLanuage: function () {
    console.log(app.globalData.language);
    var version = app.globalData.language;
    if (version == "中文") {
      app.globalData.language = "英文"
      this.setData({
        language: app.globalData.language
      })
    } else {
      app.globalData.language = "中文"
      this.setData({
        language:app.globalData.language
      })
    }
    var lastLanuage = app.globalData.language;
    this.getContent(lastLanuage);
  },
  getContent: function (lastLanuage) {
    if (lastLanuage == "中文") {
      this.setData({
        content: chinese.content
      })
    } else {
      this.setData({
        content: english.content
      })
    }
  }
  
})
