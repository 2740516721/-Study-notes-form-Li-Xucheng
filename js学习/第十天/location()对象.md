### location()对象方法

location对象方法是一个URL操作方法，表示载入窗口的URL（我认为这句话的意思是当前窗口，或当前网页的URL）；

是window对象和document对象的属性，可以通过window.location属性来访问；

可以获取URL的参数并解析URL。



##### location常用属性

location.href: 返回当前页面的完整的URL地址；

location.search: 返回URL后面的参数(类似于"?name=lc&age=20")；

location.protocol: 返回页面使用的协议(通常是"http:“或"https:”)；

location.host: 返回页面的域名及端口号；

location.hostname: 返回页面的域名；

location.port: 返回页面的端口号；

location.pathname: 返回页面中的路径或文件名；

location.origin: 返回URL源地址；

location.hash: 返回URL 散列值（#后面的内容），如果没有则为空字符串。



##### location（）方法可以获取也可以设置一些属性。



利用  location.属性值=更改内容 即可改变属性值。

location常用方法

location.assign(url): 跳转到url，浏览器会记录历史(可以后退)；

location.replace(url): 跳转到url，浏览器不会记录历史(不可以后退)；

location.reload(boolean): 重新加载当前显示的页面，不传参数，页面会以最有效的方式重新加载。也就是说，如果页面自上次请求以来没有修改过，浏览器可能会从缓存中加载页面。如果想强制从服务器重新加载，可以给 reload()传个 true。