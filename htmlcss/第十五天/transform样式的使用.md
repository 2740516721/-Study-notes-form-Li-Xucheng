### transform是什么

transform 属性向元素应用 2D 或 3D 转换。该属性允许我们对元素进行旋转、缩放、移动或倾斜。主要是CSS3的内容，在运用之前需要加上transform-style 属性，它能规定如何在 3D 空间中呈现被嵌套的元素，属性值preserve-3d：子元素将保留其 3D 位置
flat：子元素将不保留其 3D 位置。

### transform样式的四个属性

###### translate——平移、rotate——旋转、skew——斜切、scale——缩放



##### translate——平移

语法：transform: translate（ x , y）;

第一个参数代表 X 轴，第二个参数代表 Y 轴，默认为0。

| translate3d(x,y,z) | 3D 转换。             |
| ------------------ | --------------------- |
| translateZ(Z)      | 3D转换，只是用Z轴的值 |





##### rotate———指定对象的2D旋转

需要配合 transition-origin（改变元素基点） 定位使用，若没有，以中心为轴。

语法：transform: rotate(*deg);

| rotate3d(x,y,z,angle) | 3D 旋转。                 |
| --------------------- | ------------------------- |
| rotateX(angle)        | 沿着 X 轴的 3D 旋转。     |
| rotateY(angle)        | 沿着 Y 轴的 3D 旋转。     |
| rotateZ(angle)        | 定义沿着 Z 轴的 3D 旋转。 |





##### scale——缩放

语法：transform: scale（ x ,y）

指定对象的 2D 缩放，第一个参数为 X 轴，第二个参数为 Y 轴，若不设置第二个参数，则默认取第一个参数的值。

| scale3d(x,y,z) | 3D 缩放转换。                     |
| -------------- | --------------------------------- |
| scaleX(x)      | 设置 X 轴的值来定义缩放转换       |
| scaleY(y)      | 设置 Y 轴的值来定义缩放转换。     |
| scaleZ(z)      | 设置 Z 轴的值来定义 3D 缩放转换。 |





##### skew——斜切

语法：skew（x, y）

指定对象的斜切扭曲，第一个参数的值为 X 轴，第二个参数的值为 Y 轴，若不设置第二个参数的值，默认取第一个参数的值。

| skew(x-angle,y-angle) | 沿着 X 和 Y 轴的 2D 倾斜转换。 |
| --------------------- | ------------------------------ |
| skewX(angle)          | 沿着 X 轴的 2D 倾斜转换。      |
| skewY(angle)          | 沿着 Y 轴的 2D 倾斜转换。      |
| perspective(n)        | 为 3D 转换元素定义透视视图。   |

景深：perspective



##### matrix

| matrix(n,n,n,n,n,n)                       | 2D 转换，使用六个值的矩阵          |
| ----------------------------------------- | ---------------------------------- |
| matrix3d(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n) | 3D 转换，使用 16 个值的 4x4 矩阵。 |