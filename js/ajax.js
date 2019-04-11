var ajax = function (model) {
  //console.log(`ajax发送的数据: ${JSON.stringify(model)}`)
  //返回Promise对象
  return new Promise(function (resolve, reject) {
    wx.request({
      method: model.method || 'GET',
      url: model.url || '',
      data: model.data || {},
      header: {
        'content-type': 'application/json',
      },
      success: function (res) {
        if (res.statusCode == 200) {
          resolve(res.data);
        } else {
          reject()
          //错误信息处理
          console.log('服务器错误，请联系客服')
        }
      }
    })
  }
  )
}

module.exports = {
  ajax: ajax
}