// pages/my_s/taba/taba.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: 0,			// 轮播索引
    tab: [{
      status: '进行中',
      content: [       // 轮播展示内容  模拟后台数据
        { content: '辽E444', time: '2019-05-16', orderStatus: '提交中' }
      ],
      bar: true       // 默认带线条显示
    },
    {
      status: '已结算',
      content: '',

    }
    ],
  },
  tab_change(e) {
    this.setData({
      index: e.target.dataset.tab_index
    })
  },
  swiperChange(e) {
    console.log(e.detail.current)
    let swi_index = e.detail.current
    this.data.tab.forEach((item, value) => {
      item.bar = false
    })
    this.setData({
      tab: this.data.tab
    })
    this.data.tab[swi_index].bar = true
    this.setData({
      tab: this.data.tab
    })
    console.log(this.data.tab)
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
  onShareAppMessage: function () {

  }
})