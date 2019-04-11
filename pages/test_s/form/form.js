Page({
  onLoad:function(){
    wx:wx.setNavigationBarTitle({
      title: '表单',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },
  formReset: function () {
    console.log('form发生了reset事件')
  }
})