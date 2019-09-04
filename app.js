

App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function (options) {
    console.log(options,)
    //异步会比onshow后执行
    
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    console.log(options.scene,'show')
    switch (options.scene){
      case 1006:
      console.log('1006执行')
      break;
    }


    wx.getUserInfo({
      success: function (res) {
       // console.log(res)
      }
    })
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    console.log('hide')
  },
  
  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    console.log(msg,'msg')
   
  },
  globalData:{
    name:"alax",
    age:18
  }

  
})
            