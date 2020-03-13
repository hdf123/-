var chinese = require("../../utils/Chinses.js")
var english = require("../../utils/English.js")
//获取应用实例
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    _title:"测试目录",
    directoryList:[
      { directory: "模板", url:"../test_s/template/template"},
      { directory: "扫一扫", url:"../test_s/basis/basis"},
      { directory: "返回+scroll-view滚动", url: "../test_s/scroll/scroll"},
      { directory: "swiper", url: "../test_s/swiper/swiper"},
      { directory: "movable-view拖放", url: "../test_s/movable/movable"},
      { directory: "icon", url: "../test_s/icon/icon"},
      { directory: "progress", url: "../test_s/progress/progress"},
      { directory: "button", url: "../test_s/button/button"},
      { directory: "checkbox", url: "../test_s/checkbox/checkbox"},
      { directory: "form", url: "../test_s/form/form"},
      { directory: "input", url: "../test_s/input/input"},
      { directory: "导航", url: "../test_s/redirect/redirect"},
      { directory: "视频", url: "../test_s/video/video"},
      { directory: "相机", url: "../test_s/camera/camera"},
      { directory: "地图", url: "../test_s/map/map"},
      { directory: "画布", url: "../test_s/canvas/canvas"},
      { directory: "数据传递", url: "../test_s/data/data?a=16&b=17"},
      { directory: "模块化，保留小数个数", url: "../test_s/op/op"},
      { directory: "开关", url: "../test_s/switch/switch"},
      { directory: "注册", url: "../test_s/registered/registered"},
      { directory: "登录", url: "../test_s/login/login"},
      { directory: "忘记密码", url: "../test_s/forget/forget"},
      { directory: "动画", url: "../test_s/animation/animation"},
      { directory: "本地存储", url: "../test_s/storage/storage"}
    ],
  },
  onShareAppMessage: function () {
    return {
      title: '自定义转发标题',
      path: '../test/test'
    }
  },
  back: function (event) {
    // console.log(event.currentTarget.dataset.url);
    wx.navigateTo({
      title: "goback",
      url: event.currentTarget.dataset.url,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: this.data._title
    }),
    wx.getSystemInfo({
      success(res) {
        // console.log("设备品牌=" + res.brand)
        // console.log("设备型号="+res.model)
        // console.log("设备像素比="+res.pixelRatio)
        // console.log(res.windowWidth)
        // console.log(res.windowHeight)
        // console.log("微信设置的语言="+res.language)
        // console.log("微信版本号="+res.version)
        // console.log("客户端平台="+res.platform)
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