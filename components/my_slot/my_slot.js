// components/my_slot/my_slot.js
Component({
  options:{
    multipleSlots: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    titie:{
      type:String,
      value:'',
      observe:function(newval,oldval){
        console.log(newval,oldval)
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
