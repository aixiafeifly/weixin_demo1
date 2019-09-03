// components/my_tab_control/my_tab_control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles:{
      type:Array,
      value: [],
      
    }
  },


  /**
   * 组件的初始数据
   */
  data: {
    tabIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    fnTab(event){
      var index = event.currentTarget.dataset.index
      this.setData({
        tabIndex: index
      })
      this.triggerEvent("tabEvent", { index, title: this.properties.titles[index]})
    }
  }
})
