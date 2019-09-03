Page({
  data: {
    inputShowed: false,
    inputVal: "",
    nowData:new Date().toLocaleString(),
    isActive:false,
    list:[
      { name: "join1", age: 12 },
      { name: "join2", age: 12 },
      { name: "join3", age: 12 },
      { name: "join4", age: 12 }
      
    ]

  },
  onLoad() {
    const that = this    
    setInterval(()=>{
      that.setData({
        nowData: new Date().toLocaleString()
      })
    },1000)
  },
  handleColor(){
    const that = this
      that.setData({
        isActive: !that.data.isActive
      })
  
    
  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  }
});