一、概念总结
1、event.clientX、event.clientY
鼠标相对于浏览器窗口可视区域的X，Y坐标（窗口坐标），可视区域不包括工具栏和滚动条。IE事件和标准事件都定义了这2个属性.clientX指可视区域内离左侧的距离，以滚动条滚动到的位置为参考点。各个浏览器相同。即当有滚动条时clientX 小于 pageX。

2、event.pageX、event.pageY
类似于event.clientX、event.clientY，但它们使用的是文档坐标而非窗口坐标。这2个属性不是标准属性，但得到了广泛支持。IE事件中没有这2个属性。pageX指鼠标在页面上的位置，以页面左侧为参考点。在页面没有滚动的情况下， pageX 和 pageY 的值与 clientX 和 clientY 的值相等。

3、event.offsetX、event.offsetY
鼠标相对于事件源元素（srcElement）的X,Y坐标，只有IE事件有这2个属性，标准事件没有对应的属性。

4、event.screenX、event.screenY
鼠标相对于用户显示器屏幕左上角的X,Y坐标。标准事件和IE事件都定义了这2个属性。screenX : 鼠标在屏幕中的位置，指的是鼠标到电脑屏幕左侧的距离。例如：当网页缩小，拖动到屏幕中间时，screnX 大于 clientX .

5、event.layerX ,event.layerY
FireFox特有，是相对于父元素的位置，鼠标相对于“触发事件的元素的层级关系中离该元素最近的，设置了positio的父元素”的边界的位置，从border的左上角开始定位，即如果这个父元素存在border，则坐标原点在border的左上角，而不是内容区域的左上角。

6、event.x,event.y
到可视区域的距离，FireFox不识别,有无滚动条相同，同clientX。

图：

![1](D:\前端开发\前端开发学习笔记\-Study-notes-form-Li-Xucheng\js学习\第十二天\1.png)