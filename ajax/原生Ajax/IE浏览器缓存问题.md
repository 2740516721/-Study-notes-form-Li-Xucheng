在请求路径上加上“  'ie?t='+Date.now()  ”就可以解决IE浏览器缓存问题了。

例：

```
xhr.open("GET","http://localhost:8000/ie?t="Date.now());
```

