const common = require('../../../js/common.js');
var initJson = {
  data: {
    _title:"模块",
    uid:5.6789,
    wxs:"模块",
    user: {
      userInfo: {
        "nickName": "对象一号",
        "phone":"对象二号"
      },
    }
  },
  helloMINA() {
    this.setData({
      // wxs: common.sayHello('MINA')
      wxs:common.sayGoodbye('MINA')
    })
  },
  clickDemo: function (event) {
    /**
     * 第一种写法
     */
    // var setJson = {};
    // var query = "user.userInfo.nickName";
    // setJson[query] = "我是谁";
    // this.setData(setJson);
    /**
     * 第二种写法
     */
    var query ="user.userInfo.nickName";
    this.setData({
      [query]: "我是谁"
    })
  },
  onLoad:function(){
    wx.setNavigationBarTitle({
      title: this.data._title
    })
  },
  onShow: function () {
    
  },
};

Page(initJson);