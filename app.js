//app.js
var Bmob = require('utils/Bmob-1.6.7.min.js')
Bmob.initialize("your Application ID", "your REST API Key"）

App({
  onLaunch: function () {
    // 展示本地存储能力
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function (res) {
              console.log(res.userInfo)
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: '',
    nickName:''
  }
})