//一、利用提示工具创建http模块:node-http-server

//引入url模块
const url = require('url');
//引入http模块
const http = require('http');

/* 
    request         获取客户端传过来的信息
    response        给浏览器响应信息
*/
http.createServer((req,res)=>{
    //必备步骤
    
    //1、设置响应头
    res.writeHead(200,{'Content-Type':'text/plain;charset="utf-8"'});//乱码解决：1、在响应头设置编码格式chaeset='utf-8'
    // res.write("<head><meta charset='UTF-8'></head>");//乱码解决：2、利用res.write()设置编码格式chaeset='UTF-8'
    
    // res.write('hello world  你好');

    console.log(req.url);//获取浏览器访问地址
    // if(req.url != '/favicon.ico'){
        var getValue = url.parse(req.url,true).query;
        // console.log(`姓名:${getValue.name}--年龄：${getValue.age}`);
    // }

    //2、结束响应,可以在上面输出一句话
    res.end(`姓名:${getValue.name}--年龄：${getValue.age}`);//中文会有乱码，解决乱码的方法是在响应头和另外设置编码格式
    
}).listen(8080);//设置端口
