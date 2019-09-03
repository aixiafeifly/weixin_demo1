// components/my_prop/my_prop.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: { // 属性名
      type: String,
      value: '我是默认的字符串哦',
      observer:function(newVal,oldVal){   //监听
       console.log(newVal)
       console.log(this.data.title,'---------data')
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
