// pages/page-callback/b-page/b-page.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    name: '我是李四',
    array: ['克罗地亚', '英格兰', '法国', '比利时'],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  bindPickerChange: function (e) {
    let pages = getCurrentPages();
    let currPage = null; //当前页面
    let prevPage = null; //上一个页面

    if (pages.length >= 2) {
      currPage = pages[pages.length - 1]; //当前页面
      prevPage = pages[pages.length - 2]; //上一个页面
    }
    if (prevPage) {
      prevPage.setData({
        dataFromB: '2018世界杯冠军12：' + this.data.array[e.detail.value]
      });
    }
    this.setData({
      index: e.detail.value
    })
  },
})