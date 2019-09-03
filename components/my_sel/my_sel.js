// components/my_sel/my_sel.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    num:5
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  observers:{
    num:function(newVal){
    //  console.log(newVal)
    }
  },
  //组件所在页面的生命周期
  pageLifetimes:{
    show:()=>{
      console.log("--------------show")
    },
    hide:()=>{
      console.log("--------------hide")
    },
    resize:()=>{
      console.log("--------------resize")
    }
  },
  lifetimes:{
    created:()=>{
      console.log("created")
    },
    attached:()=>{
      console.log("attached")
    },
    ready:()=>{
      console.log('ready')
    },
    moved:()=>{
      console.log('moved')
    },
    detached:()=>{
      console.log('detached')
    },
    error:()=>{
      console.log('error')
    }
  }
})
