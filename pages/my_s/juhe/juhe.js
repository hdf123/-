const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    arrs:[],
    menu:1,
    few:5,
    state:''
  },
  tas:function(){
    console.log(111);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.joke();
    wx:wx.setNavigationBarTitle({
      title: '下拉刷新、上拉加载'
    })
  },
  joke:function(){
    var timestamp = Date.parse(new Date());
    timestamp = timestamp / 1000;
    console.log(timestamp);//当前的时间戳
    var _this = this;
    var params = {
      key:'e280d4235744d275aa6ca4fda0ae182e',
      sort: '',//类型，desc:指定时间之前发布的，asc:指定时间之后发布的,必填
      page: _this.data.menu,//当前页数,默认1
      pagesize: _this.data.few,//每次返回条数,默认1,最大20
      time: timestamp//时间戳（10位），如：1418816972，必填
    }
    app.ajax(app.globalData.juheapi + "/joke/content/list.php", "get", params, (res) => {
      console.log(res.data)
      if (res.data.error_code==10012){
        _this.setData({ state: "超过每日可允许请求次数!"})
      } else if (res.data.error_code==0){//获取数据成功
        console.log(res.data.result.data)
        var arr = res.data.result.data;
        _this.setData({
          arrs: this.data.arrs.concat(arr)
        });
      }else{
        _this.setData({ state: "请求失败!" })
      }
    }, (res) => {
      console.log(err);
    }, (res) => { });
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
    this.joke();
    console.log("下拉");
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    wx.showLoading({
      title: '加载中',
      mask: true
    })
    setTimeout(function (){
      wx.hideLoading()
    }, 1000)

    this.setData({
      menu: this.data.menu + 1
    })
    this.joke();
    console.log("上拉");
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})