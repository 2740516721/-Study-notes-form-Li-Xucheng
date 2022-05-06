### offset家族

offset：偏移，补偿，位移。



###### js中有一套方便的获取元素尺寸的方法就是offset家族。



### offsetWidth 和  offsetHight

##### 用于检测盒子自身的宽高+padding+border，不包括margin。

如下：

offsetWidth = width + padding + border;
offsetHeight = Height + padding + border;

### offsetLeft和offsetTop

返回距离上级盒子（带有定位）左边（顶部）的位置；如果父级都没有定位，则以浏览器为准。

offsetLeft、offsetTop： 父元素的边框 + 父元素的内边距 + 元素的外边距



#### 注意：使用时后面不要带括号，否则会报错。



#### offsetLeft和style.left区别



style.left：只能获取行内式，获取的值可能为空，容易出现NaN。
offsetLeft：获取值特别方便，而且是现成的number，方便计算。它是只读的，不能赋值。



offsetLeft 可以返回没有定位盒子的距离左侧的位置。如果父系盒子中都没有定位，以body为准。
style.left 只能获取行内式，如果没有，则返回""（意思是，返回空）;
offsetTop 返回的是数字，而 style.top 返回的是字符串，而且还带有单位：px。
比如：div.offsetLeft = 100; div.style.left = “100px”;


offsetLeft 和 offsetTop 只读，而 style.left 和 style.top 可读写（只读是获取值，可写是赋值）

如果没有给 HTML 元素指定过 top 样式，则style.top 返回的是空字符串。



#### 总结：我们一般的做法是：用offsetLeft 和 offsetTop 获取值，用style.left 和 style.top 赋值。



#### offsetParent

检测父系盒子中带有定位的父盒子节点。
返回结果是该对象的父级（带有定位）。

如果当前元素的父级元素，没有CSS定位（position为absolute、relative、fixed），那么offsetParent的返回结果为body。
如果当前元素的父级元素，有CSS定位（position为absolute、relative、fixed），那么offsetParent的返回结果为最近的那个父级元素（返回的是一整个父元素标签对象）。
