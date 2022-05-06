### 一、scroll

scroll 相关属性可以动态的得到该元素的大小, 滚动距离等。

注意：动态！动态！当滚动条发生改变时，获取到的数据也会实时发生改变。



### 二、scroll属性

element.scrollTop : 返回被卷去的上侧距离。（被卷去就是滚动轴已滚动的距离,只要滚动轴不变，它的值就是0）。
element.scrollLeft : 返回被卷去的左侧距离。
element.scrollWidth : 返回自身实际的宽度. 不含边框。width+padding+margin
element.scrollHeight : 返回自身实际的高度, 不含边框。width+padding+margin

注意：后边也是不加括号。



### 三、用法

正常使用可查询当前这一刻的数值，该数值是静态的。

例：

```
  let box = document.getElementById('box');
        let boxTop = box.scrollTop;
        let boxHeight = box.scrollHeight;
        let boxWidth = box.scrollWidth;
        let boxLeft = box.scrollLeft;

        let windowWidth = document.documentElement.scrollWidth;
        let windowHeight = document.documentElement.scrollHeight;
        let windowTop = document.documentElement.scrollTop;

        console.log(windowWidth);
        console.log(windowHeight);
        console.log(windowTop);
        console.log(boxTop);
        console.log(boxHeight);
        console.log(boxWidth);
        console.log(boxLeft);
```

在 scroll 事件中使用，可动态监测到数据；

例：

```
  window.addEventListener('scroll',function(){
  
        console.log(document.documentElement.scrollTop);
      
        })
```

