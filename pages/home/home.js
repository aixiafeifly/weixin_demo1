import request from '../../service/network.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    contNum:0,
    tabList:[
      "流行",
      "潮流",
      "时尚",
      "新款",
      "经典"
    ]
  },
  handleGetUserInfo(event){
    console.log(event,'拿到授权信息')
    console.log(event.detail)
   
  },
  myevent(e){
    console.log(e)
  },
  tabEvent:(e)=>{
    console.log(e)
    var index = e.detail
    console.log("tabEnvent", )
  },
  handlesel(){
    //修改组件内部数据
    const mysel=this.selectComponent("#mysel")
    const setNum = mysel.data.num + 1
    mysel.setData({
      num: setNum
    })
    this.setData({
      contNum: setNum
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */

  onLoad(options) {
    this.getData()
    request({
      url:'recommend'
    }).then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
 

    
  },
  getData(){
    //原始请求
    const that = this
    wx.request({
      url: 'http://123.207.32.32:8000/api/v1/recommend', //仅为示例，并非真实的接口地址
      success: function (res) {   //这里必须是箭头函数 否则这里得this是找不到的，
        const data = res.data.data.list
        that.setData({
          list: data
        })
      }
    })

    //带参数
    wx.request({
      url: 'http://www.httpbin.org/post',
      method: "post",
      data: {
        name: 'join',
        age: 1
      },
      success: (res) => {
       // console.log(res)
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    console.log('show')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide () {
    console.log('hide')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    console.log('页面跳转')
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    console.log('下来刷新')
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    console.log
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage(res) {
    console.log(res,'-----------------------')
    return {
      title: '你好啊。伊人',
      path: '/page/cart/cart',
      imageUrl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567594503158&di=f12dff71ff3563604aa15b842d74349d&imgtype=0&src=http%3A%2F%2Fimg3.utuku.china.com%2F650x0%2Fent%2F20190820%2F52481b00-1bf2-487b-89be-01296479db36.jpg"
    }
  },
  /**
   * 弹窗
   */
  handToast(){
    wx:wx.showToast({
      title: '成功啦',
      icon: 'success',
      duration: 200000,
      success: function(res) {
        console.log(res,'handToast')
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  handmodal(){
    wx.showModal({
      title: '提示',
      content: '这是一个模态弹窗',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  handloading(){
    wx.showLoading({
      title: '加载中',
    })
    setTimeout(function () {
      wx.hideLoading()
    }, 2000)
  },
  handactionSheet(){
    wx.showActionSheet({
      itemList: ['A', 'B', 'C'],
      itemColor:"#FF0000",
      success(res) {
        console.log(res.tapIndex)
      },
      fail(res) {
        console.log(res.errMsg)
      }
    })
  }

})