### 什么是animate？

animate是一个 css3 动画库，只有一个CSS文件，引入后以类的方式进行调用，如果使用jquery，则不影响原有程序架构



### 如何使用 animate？

```html
<head>
  <link rel="stylesheet" href="animate.min.css">
</head>
```



### css3动画简介以及动画库animate.css的使用



##### 一、过渡动画

​	transition 相关知识在“第十五天”文件夹里。



##### 二、关键帧动画

###### 语法：

关键帧动画的定义方式也比较特殊，它使用了一个关键字 @keyframes 来定义动画。具体格式为：

@keyframes 动画名称{

   时间点 {元素状态}

   时间点 {元素状态}

   …

}

例：

![5821d8e8b8bb59a5387d17dd3100ad21](C:\Users\费翔\Desktop\前端学习路线\第十六天\5821d8e8b8bb59a5387d17dd3100ad21.png)

现在我们知道了怎么去定义一个关键帧动画了，那怎么去实现这个动画呢？其实很简单，只要把这个动画绑定到某个要进行动画的元素上就行了。

把动画绑定到元素上，我们可以使用animation属性。animation属性有以下这些![1f22beb163015d33f3923b302cef3523](C:\Users\费翔\Desktop\前端学习路线\第十六天\1f22beb163015d33f3923b302cef3523.png)

像前面讲的transition属性一样，也可以把这些animation属性简写到一个animation中，使用默认值的也可以省略掉。但 animation-play-state 属性不能简写到animation中。