

### 一、概述

#### 1.1 表单的私有属性和方法

属性或方法	描述
acceptCharset	服务器能够处理的字符集;等价于 HTML 中的 accept-charset 特性。
action	接受请求的 URL;等价于 HTML 中的 action 特性。
elements	表单中所有控件的集合(HTMLCollection) 。
enctype	请求的编码类型;等价于 HTML 中的 enctype 特性。
length	表单中控件的数量。
method	要发送的 HTTP 请求类型,通常是"get"或"post";等价于 HTML 的 method 特性。
name	表单的名称;等价于 HTML 的 name 特性。
reset()	将所有表单域重置为默认值。
submit()	提交表单。
target	用于发送请求和接收响应的窗口名称;等价于 HTML 的 target 特性。



#### 1.2 获取表单的三种方式

1、通过id获取。如var form = document.getElementById(“form1”);

2、通过 document.forms 可以取得页面中所有的表单。如：
var firstForm = document.forms[0];//取得页面中的第一个表单
var myForm = document.forms[“form2”];//取得页面中名称为"form2"的表单

3、通过名字访问，这个方法不推荐。如，,通过 document.form2 可以访问到名为"form2"的表单。



### 二、提交表单

#### 提交表单有三种方式：

将<input>的type设为submit
将<button>的type设为submit
将<input>的type设为image
例子：

```html
<form action="" id="myForm">
  <!-- 通用提交按钮 -->
  <input type="submit" value="Submit Form">
  <!-- 自定义提交按钮 -->
  <button type="submit">Submit Form</button>
  <!-- 图像按钮 -->
  <input type="image" src="icon.png">
  </form>
  

<script type="text/javascript">
  var form = document.getElementById("myForm");

  form.addEventListener('submit',function (event) {
    alert("点击了提交按钮！！！");
    //阻止提交哦啊事件
    event.preventDefault();
  })
```



javascript还可以编程进行表单提交，但是不会触发submit事件。如：

```html
var form = document.getElementById("myForm");
//提交表单
form.submit();
```

表单提交最大的问题就是重复提交。对策就是在第一次提交之后，在事件处理程序中禁用提交按钮或在事件处理程序中取消后续提交。

### 三、重置表单

重置表单时，会把表单字段重置为页面刚加载完的初始值。重置表单有两种方式：

将<input>的type设为reset
将<button>的type设为reset
需要注意的时，与表单提交不同，用编程方式重置表单是会出发reset事件的。

例子：

```html
<form action="" id="myForm">
  <input type="text" value="初始值为text">
  <input type="radio" name="danxuankuang"> 男</input>
  <input type="radio" value="女" name="danxuankuang" checked>
  女
  </input>
   <input type="reset"> 重置</input>
     <button type="reset">重置</button>
```




### 三、表单字段

#### 4.1 表单的elements属性

每个表单对象都有elements 属性,该属性是表单中所有表单元素(字段)的集合。例子：

```html
var form = document.getElementById("form1");
//取得表单中的第一个字段
var field1 = form.elements[0];
//取得名为"textbox1"的字段
var field2 = form.elements["textbox1"];
//取得表单中包含的字段的数量
var fieldCount = form.elements.length;

```



#### 4.2 表单字段的共有属性

共有属性	描述
disabled	布尔值,表示当前字段是否被禁用。
form	指向当前字段所属表单的指针;只读。
name	当前字段的名称。
readOnly	布尔值,表示当前字段是否只读。
tabIndex	表示当前字段的切换(tab)序号。
type	当前字段的类型,如"checkbox"、“radio”,等等。
value	当前字段将被提交给服务器的值。对文件字段来说,这个属性是只读的,包含着文件在计算机中的路径。

这里我们举一个避免重复提交的例子：

```html
<form action="" id="myForm">
  <input type="text" name="first_input" value="初始值为text">
  <input type="text" id="second_input">
  <input type="radio" name="danxuankuang">男</input>
  <input type="radio" value="女" name="danxuankuang" checked> 女</input>
   <input type="reset">
  <input type="submit" name="sb" >
</form>
<script type="text/javascript">
  var form=document.getElementById("myForm");
  form.addEventListener("submit",function () {
    alert("点击了提交按钮");
    var sb=form.elements["sb"];
    sb.disabled=true;//提交成功后，会自动还原
    sb.style.backgroundColor="red";
    //event.preventDefault();
    //这里写提交
  })
</script>
```



### 4.3 表单字段的共有方法

focus():表单字段获取焦点。HTML5 为表单字段新增了一个 autofocus 属性。在支持这个属性的浏览器中,只要设置这个属性,
不用 JavaScript 就能自动把焦点移动到相应字段。
blur():表单字段失去焦点
4.4 表单字段的共有事件
blur:当前字段失去焦点时触发。
change:对于 和 元素,在它们失去焦点且 value 值改变时触发;对于元素,在其选项改变时触发。
focus:当前字段获得焦点时触发。



### 表单事件

##### 1、onsubmit 提交事件

当表单提交数据时触发，对象是form 标签。



##### 2、onfocus 焦点事件

当 字段失去焦点时触发。



##### 3、onchange 

对于 和 元素,在它们失去焦点且 value 值改变时触发;对于元素,在其选项改变时触发。