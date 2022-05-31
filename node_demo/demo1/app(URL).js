//URL模块
/* 
    url.parse()     解析URL
    url.format(urlObject)       是上面url.parse()的逆向操作
    url.resolve(from,to)        添加或者替换地址
*/
//引入url模块
const url = require('url');

//设置一个api以备演示使用
var api = 'http://www.lixu.com?name=lixucheng&age=20';

// console.log(url.parse(api,true));

var getValue = url.parse(api,true).query;
console.log(getValue);
console.log(`姓名:${getValue.name}--年龄：${getValue.age}`);