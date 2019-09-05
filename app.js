import request from './service/network.js'
const TOKEN='token'
App({
  globalData:{
    token:''
  },
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function (options) {
    //异步会比onshow后执行
    try {
      const token = wx.getStorageSync('TOKEN')
      if (token != "" && token){
        //判断token是否过期
        this.check_token(token)
      }else{
        this.login()
      }
    } catch (e) {
     alert(e)
    }
   
  },
  check_token(token){
    console.log('执行验证-----------------')
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method:'post',
      header:{
        token
      },
      success:(res)=>{
        console.log(res,'验证token')

        if (res.data.errCode == null || res.data.errCode==undefined){
          return
        }else{
          if (res.data.errCode == 1001)
          console.log()
        }

        
        if (res.statusCode==200){
          console.log('验证成功')
        }else{
          console.log('重新登录')
          this.login()
        }
      },
      fail:(err)=>{

      }
    })
  },
  login:function(){
    console.log('登录')
    const that=this
    wx.login({
      success(res) {
        const code = res.code    //code只有五分钟有效时间
          wx.request({
          url: 'http://123.207.32.32:3000/login',
          method: "post",
          data: {code},
          success:function(res){
            const token=res.data.token
            that.globalData.token = token
            try {
              wx.setStorageSync('TOKEN', token)
            } catch (e) {
              wx.showModal({
                title: '提示',
                content: '存储失败',
                success(res) {
                  if (res.confirm) {
                    console.log('用户点击确定')
                  } else if (res.cancel) {
                    console.log('用户点击取消')
                  }
                }
              })
             }

          }
        

        })
        
      },
      fail(err) {
        console.log(err)
      }
    })
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
   
  }

  
})
            