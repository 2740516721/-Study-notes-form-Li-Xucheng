//1、引入express
const express = require('express');

//2、创建应用对象
const app = express();

//3、创建路由规则
//request是对请求报文的封装
//response是对响应报文的封装
app.get('/server',(request,response)=>{
    //设置响应头   设置允许跨域    
    response.setHeader('Access-Control-Allow-Origin','*');

    //设置响应
        response.send('这里是server文件，响应成功');
})

//all表示可以接受任何请求
app.all('/server',(request,response)=>{
    
    //设置响应头   设置允许跨域    
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');
      //设置响应
      response.send('这里是server文件，POST响应成功');
  
})
//监听端口启动服务
app.listen(8000,()=>{
    console.log("服务已经启动，8000端口监听中。。。");
})

//请求超时与网络异常
app.get('/delay',(request,response)=>{
    //设置响应头   设置允许跨域    
    response.setHeader('Access-Control-Allow-Origin','*');
        
    
    setTimeout(function(){
            //设置响应
             response.send('延迟响应');

        },3000)
    
})
//取消请求
app.get('/quxiao',(request,response)=>{
    //设置响应头   设置允许跨域    
    response.setHeader('Access-Control-Allow-Origin','*');
        
    
    setTimeout(function(){
            //设置响应
             response.send('请求成功');

        },3000)
    
})

//重复请求
app.get('/reset',(request,response)=>{
    //设置响应头   设置允许跨域    
    response.setHeader('Access-Control-Allow-Origin','*');
        
    
    setTimeout(function(){
            //设置响应
             response.send('请求成功');

        },3000)
    
})