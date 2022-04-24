##### 解析：

   for...in 语句
  对应于一个对象的每个，或一个数组的每个元素，执行一个或多个语句。

  for (variable in [object | array])

##### 参数

  variable

  必选项。一个变量，它可以是 object 的任一 属性或 array 的任一 元素。

  object, array

  可选项。要在其上遍历的 对象或数组。

##### 说明

  在循环的每次迭代前，variable 被赋予 object 的下一个属性或 array 的下一个元素。然后可以在循环内的任一语句中使用它，就好像正在使用 object 的该属性或 array 的该元素一样。

当在一个 对象上迭代时，没有办法决定或控制把对象的成员赋给 variable 的次序。在 数组内将按 元素的次序执行迭代，也就是，0、1、2、......

##### 例：

```
 let a = [1,2,3,4,5,6];
        let b = [];
        for(var i in a){
         
            b.push(a[i]);
            console.log(i);//输出0，1，2，3，4，5
        }
        console.log(b);//输出[1,2,3,4,5,6]
```

