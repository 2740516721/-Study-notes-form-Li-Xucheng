### history()对象



history对象记录了用户曾经浏览过的页面(URL)，并可以实现浏览器前进与后退相似导航的功能。

**注意:从窗口被打开的那一刻开始记录，每个浏览器窗口、每个标签页乃至每个框架，都有自己的history对象与特定的window对象关联。**

**语法：**

```
window.history.[属性|方法]
```

**注意：**window可以省略。



**History 对象方法**

**[![img](http://img.mukewang.com/53548c200001228206210123.jpg)](http://img.mukewang.com/53548c200001228206210123.jpg)**

使用length属性，当前窗口的浏览历史总长度，**代码如下：**

```
<script type="text/javascript">
  var HL = window.history.length;
  document.write(HL);
</script>
```



## 返回前一个浏览的页面

back()方法，加载 history 列表中的前一个 URL。

**语法：**

```
window.history.back();
```

**注意：等同于点击浏览器的倒退按钮。**



back()相当于go(-1),**代码如下:**

```
window.history.go(-1);
```



## 返回下一个浏览的页面

forward()方法，加载 history 列表中的下一个 URL。

如果倒退之后，再想回到倒退之前浏览的页面，则可以使用forward()方法,**代码如下:**

```
window.history.forward();
```

**注意：等价点击前进按钮。**

forward()相当于go(1),**代码如下:**

```
window.history.go(1);
```

## 返回浏览历史中的其他页面

go()方法，根据当前所处的页面，加载 history 列表中的某个具体的页面。

**语法：**

```
window.history.go(number);
```

**参数：**

[![img](http://img.mukewang.com/5354947e00011a9a06490153.jpg)](http://img.mukewang.com/5354947e00011a9a06490153.jpg)

浏览器中，返回当前页面之前浏览过的第二个历史页面，**代码如下：**

```
window.history.go(-2);
```

**注意：和在浏览器中单击两次后退按钮操作一样。**



同理，返回当前页面之后浏览过的第三个历史页面，**代码如下：**

```
window.history.go(3);
```