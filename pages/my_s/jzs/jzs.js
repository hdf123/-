const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arrs: [],
    state:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    var subjectk = options.subjectk;
    var typea = options.typea;
    wx:wx.setNavigationBarTitle({
      title: '科目'+subjectk,
    })
    var params = {
      key: '9a3930332d730af04095cdfc6b1b701e',
      subject: subjectk,//选择考试科目类型，1：科目1；4：科目4
      model: typea,//驾照类型，可选择参数为：c1,c2,a1,a2,b1,b2；当subject=4时可省略
      testType: ''//测试类型，rand：随机测试（随机100个题目），order：顺序测试（所选科目全部题目）
    }
     
    app.ajax(app.globalData.juheapi + "/jztk/query", "get", params, (res) => {
      console.log(res.data)
      if (res.data.error_code == 10012) {
        _this.setData({ state: "超过每日可允许请求次数!" })
      } else if (res.data.error_code == 0) {//获取数据成功
        var data = res.data.result;
        console.log(data)
        _this.setData({
          arrs: data
        })
      } else {
        _this.setData({ state: "请求失败!" })
      }
    }, (res) => {
      console.log(err);
    }, (res) => { });
  },
  radioChange(e) {
    var answer = e.currentTarget.dataset.answer;
    var index = e.detail.value;
    console.log("正确答案是：" + answer);
    console.log("选择的是：" + index);
    if (e.detail.value == answer) {
      console.log("选择正确");
    } else {
      console.log("选择错误");
    }
  },
  btn(){
    console.log(123);
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