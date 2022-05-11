### client：可视化区域

1. 对象.clientWidth:可视区域的宽(不包含边框),边框内部的宽度。clientWidth = width + padding +margin   ；边框的的值不计入其中。
2. 对象.clientHeight:可视区域的高(不包含边框),边框内部的高度。clientHeight = height + padding +margin   ；边框的的值不计入其中。
3. 对象.clientLeft:左边边框的宽度。
4. 对象.clientTop :上面的边框的高度。



对象可以是标签节点，也可以是document.documentElement.clientWidth（获取可视窗口的宽度）。

注意：client* 只是一个属性，不是一个方法，后面不跟括号，否则会报错。



#### clientX、clientY

鼠标单击或者按下位置在距离当窗口可视区域中x、y坐标的距离。

