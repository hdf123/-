let util = require('../../../utils/storage');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    _title: "本地存储",//title
    storage:""//结果展示
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: this.data._title
    })
  },
  inp1: function (e) {//获取数据的名称
    this.setData({
      name: e.detail.value
    })
  },
  inp2: function (e) {//获取数据的内容
    this.setData({
      content: e.detail.value
    })
  },
  /**
   * 本地缓存
   */
  save:function(){
    var name = this.data.name;
    var content = this.data.content;
    if (name == undefined || content ==undefined){
      wx.showToast({
        title: '内容不可为空',
        icon: '',//默认值是success,就算没有icon这个值，就算有其他值最终也显示success
        duration: 2000,  //停留时间
      })
    }else{
      wx.showModal({
        title: '提示',
        content: '确认要保存该项吗？',
        success: function (res) {
          console.log(res);
          if (res.confirm) {
            console.log('点击确认回调')
            util.put(name,content, 1000)//名称、内容、保存时间
          } else {
            console.log('点击取消回调')
          }
        }
      })
    }
  },
  obtain:function(){//获取
    var _this = this;
    var datas = util.git(this.data.name, "数据已过期、不存在或被删除");//名称，没有结果时输出
    if (typeof (datas) =='undefined'){
      console.log('数据已过期');
      _this.setData({
        storage: '数据已过期'
      })
    }else{
      _this.setData({
        storage: "结果："+datas
      })
    }
  },

  // save:function(){
  //   wx.setStorage({
  //     key: "本地缓存",
  //     data: this.data.content
  //   })
  //   // wx.setStorageSync("本地缓存", this.data.content)//同步缓存
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

  delete: function () {//从本地缓存中异步移除指定 key 。
    var _this = this;
    wx.removeStorage({
      key: _this.data.name,
      success: function (res) {
        _this.setData({
          storage: "清除指定key：" + _this.data.name+"完成"
        })
      }
    })
  },
  Clean: function () {//清理本地数据缓存
    var _this = this;
    wx.clearStorage({
      success: function (res) {
        _this.setData({
          storage: "全部清理完成"
        })
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