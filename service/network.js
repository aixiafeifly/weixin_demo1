import { baseURL, timeout} from './config.js'
  function request(options){
   return new Promise((resolve,reject)=>{
     wx.request({
       url: baseURL + options.url,
       method: options.method || 'get',
       timeout: timeout,
       data: options.data || {},
       success: resolve ,
       fail: reject ,
       complete:function(){
         console.log("成功失败都会回调")
       }
     })
   })



  
}
export default request