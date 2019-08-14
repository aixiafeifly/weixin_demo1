Page({
  /**
   * 页面的初始数据
   */
  data: {
    msg:"这是首页",
    counter:0,
    list:[
      { name: 'JOIN1', age: "12", max: "女" },
      { name: 'JOIN2', age: "12", max: "女" },
      { name: 'JOIN3', age: "12", max: "女" },
      { name: 'JOIN4', age: "12", max: "女" }
    ]
  },
  handAdd:function(){
  
   var coun= this.data.counter
    coun++
    if (coun<0){
      coun=0
    }
    this.setData(
      {
        counter: coun
      }
    )
  },
  handReduce:function(){
    var coun = this.data.counter
    coun--
    if (coun < 0) {
      coun = 0
    }
    this.setData(
      {
        counter: coun
      }
    )
  }
 
})