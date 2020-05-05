//app.js
var Bmob = require('utils/Bmob-1.6.7.min.js')
Bmob.initialize("35d1b6ed98f6ce1991081e6575ed7f31","6ff13365f1d30ee6daee18fb6b68c04b")
App({
 onLaunch: function(){
   const updateManager = wx.getUpdateManager();
   updateManager.onCheckForUpdate(function (res) {
     // 请求完新版本信息的回调
     console.log(res.hasUpdate)
   })
   updateManager.onUpdateReady(function () {
     wx.showModal({
       title: '更新提示',
       content: '新版本已经准备好，是否重启应用？',
       success(res) {
         if (res.confirm) {
           // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
           updateManager.applyUpdate()
         }
       }
     })
   });

   updateManager.onUpdateFailed(function () {
     // 新版本下载失败
     wx.showModal({
       title: '更新失败',
       content: '请检查网络连接后重试',
       showCancel: false
     })
   });

   Bmob.User.auth().then(res => {
     console.log(res)
     console.log('一键登陆成功')
   }).catch(err => {
     console.log(err)
   });
 },


  globalData: {
    userInfo: '',
    manager:''
  }
})