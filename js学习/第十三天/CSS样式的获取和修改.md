在js中，很多时候我们会获取CSS样式的属性值进行相应的判断和修改。下面推荐几种方式



最佳获取样式的方法

getComputeStyle()  方法用于获取指定对象的所有CSS样式。该方法支持大多数主流浏览器。

```
语法
window.getComputeStyle(element,[伪类]);
第二个参数需要使用引号括起来。
```

有两个参数，第一个参数指定获取CSS样式的节点对象；第二个参数为要查询的伪类，可选写。填写即返回包含伪类的样式；不填或者填入null的结果是一样的，只会返回一个CSSStyleDeclaration 对象，该对象中包含所有CSS样式。



使用方式：

```html
例：
let box = document.querySelector(".box");
        // 该方法只能获取style属性值，不能修改属性值
        var w = window.getComputedStyle(box,"::after");
        console.log(w.content);
    
```



#### currenStyle

currentStyle是只有IE浏览器才能识别的，它也可以获取当前元素的所有css属性，返回的是一个[object CSSStyleDeclaration]对象。

用法为：

```
    语法：
    element.currentStyle;
    用法：
     var str=Div.currentStyle;//返回的是CSSStyleDeclaration实例
     console.log(str.width);
```



为了使IE浏览器和主流浏览器都能正常获取当前元素的所有属性，要使用兼容性的写法：

```
//兼容性写法
     var str=Div.currentStyle||getComputedStyle(Div,null);
     alert(str.width);
```



##### element.style.样式名

使用该方法获取的值有时候并不返回结果，返回空值，不建议使用。



#### CSS样式的修改

element.style.样式名 = "要修改的值";

样式名使用驼峰命名法，如background-color =>backgroundColor。