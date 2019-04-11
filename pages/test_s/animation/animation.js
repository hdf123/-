Page({
  data:{
    _title:"动画"
  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: this.data._title
    })
  },
  onReady: function () {
    this.animation = wx.createAnimation()
  },
  rotate: function () {
    this.animation.rotate(Math.random() * 720 - 360).step()
    this.setData({ animation: this.animation.export() })
  },
  scale: function () {
    this.animation.scale(Math.random() * 2).step()
    this.setData({ animation: this.animation.export() })
  },
  translate: function () {
    this.animation.translate(Math.random() * 100 - 50, Math.random() * 100 - 50).step()
    this.setData({ animation: this.animation.export() })
  },
  skew: function () {
    this.animation.skew(Math.random() * 90, Math.random()*90).step()
    this.setData({ animation: this.animation.export() })
  },
  rotateAndScale: function () {
    this.animation.rotate(Math.random() * 720 - 360)
      .scale(Math.random() * 2)
      .step()
    this.setData({ animation: this.animation.export() })
  },
  rotateThenScale: function () {
    this.animation.rotate(Math.random() * 720 - 360).step()
      .scale(Math.random() * 2).step()
    this.setData({ animation: this.animation.export() })
  },
  all: function () {
    this.animation.rotate(Math.random() * 720 - 360)
      .scale(Math.random() * 2)
      .translate(Math.random() * 100 - 50, Math.random() * 100 - 50)
      .skew(Math.random() * 90, Math.random() * 90)
      .step()
    this.setData({ animation: this.animation.export() })
  },
  allInQueue: function () {
    this.animation.rotate(Math.random() * 720 - 360).step()
      .scale(Math.random() * 2).step()
      .translate(Math.random() * 100 - 50, Math.random() * 100 - 50).step()
      .skew(Math.random() * 90, Math.random() * 90).step()
    this.setData({ animation: this.animation.export() })
  },
  opacity:function(){//透明度
    this.animation.opacity(0.2).step()
    this.setData({ animation: this.animation.export() })
  },
  backgroundColor:function(){//背景色
    // this.animation.left(100).step()
    this.animation.backgroundColor("red").step()
    this.setData({ animation: this.animation.export() })
  },
  reset: function () {
    this.animation.rotate(0, 0)
      .scale(1)
      .translate(0, 0)
      .skew(0, 0)
      .opacity(1)
      .backgroundColor("#1AAD19")
      .step({ duration: 0 })
    this.setData({ animation: this.animation.export() })
  }
})