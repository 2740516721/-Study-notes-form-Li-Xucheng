### JSON 数据类型

##### 相关链接：

[JSON 数组 | 菜鸟教程 (runoob.com)](https://www.runoob.com/json/js-json-arrays.html)



##### json数据格式：主要由对象 **{ }** 和数组 **[ ]** 组成:

其中对象包括键值对（属性:属性值）{key： value}，value 可为 str，num，list，obj。取值使用 objcet.key

{key: value, key2:value2，} 键：值用冒号分开，对间用，连接

数组包含元素：num，str，list，objcet 都可以，利用索引访问 [index]，用 **.** 连接各个值:

##### 例：

```
var stu = {"student":           //stu 对象包含student的key,值为一个数组
[                                     //数组的每一个值为一个具体的学生对象
{"name": "Tom","Grade":1, "age":11, "gender": "M"},     //学生对象的键为名字,值为对应属性
{"name": "Jerry", "Grade":1, "age":10, "gender": "M"}       //每个属性对应的是一个key,value对
],
"classroom": {"class1": "room1", "class2": "room2"}         //对象的值,嵌套对象
};
```

##### 读取数值：

```
document.write(stu.student[1].name);     // 输出第二个学生名
document.write(stu.student[0].age);      // 输出第一个学生年龄
document.write(stu.classroom.class1);    // 输出 classroom 的 class1 值
document.write(stu["classroom"].class2); // 也可用中括号键访问对象值
```



#### 删除数组元素：

##### delete 关键字。

相关链接：[JS 中彻底删除 JSON 对象组成的数组中的元素 | 菜鸟教程 (runoob.com)](https://www.runoob.com/w3cnote/js-delete-json-arr.html)

##### 注意：

delete 运算符并不是彻底删除元素，而是删除它的值，但仍会保留空间。

运算符 delete 只是将该值置为 undefined，而不会影响数组长度，即将其变为稀疏数组。

那在JS中如何彻底删除 JSON 对象组成的数组中的元素呢？

 使用数组中的 splice()方法。

##### 例：

```
var shop=[ "Google", "Runoob", "Taobao" ]
delete shop[0];
console.log(shop);//["undefined","Runoob","Taobao"]
console.log(shop.length);//3
shop.splice(1,1);
console.log(shop.length);//2
```



#### JSON.parse()

JSON 通常用于与服务端交换数据。

在接收服务器数据时一般是字符串。

我们可以使用 JSON.parse() 方法将数据转换为 JavaScript 对象。

##### 语法：

```
JSON.parse(text[, reviver])
参数说明：
text:必需， 一个有效的 JSON 字符串。
reviver: 可选，一个转换结果的函数， 将为对象的每个成员调用此函数。
```

例：

```
var obj = JSON.parse('{ "name":"runoob", "alexa":10000, "site":"www.runoob.com" }');
```



### 异常

#### 解析数据

JSON 不能存储 Date 对象。

如果你需要存储 Date 对象，需要将其转换为字符串。

之后再将字符串转换为 Date 对象。

例：

```
var text = '{ "name":"Runoob", "initDate":"2013-12-14", "site":"www.runoob.com"}';
var obj = JSON.parse(text);
obj.initDate = new Date(obj.initDate);
 
document.getElementById("demo").innerHTML = obj.name + "创建日期: " + obj.initDate;
```

也可以用第二个参数

```
var text = '{ "name":"Runoob", "initDate":"2013-12-14", "site":"www.runoob.com"}';
var obj = JSON.parse(text, function (key, value) {
    if (key == "initDate") {
        return new Date(value);
    } else {
        return value;
}});
 
document.getElementById("demo").innerHTML = obj.name + "创建日期：" + obj.initDate;
```



#### 解析函数

JSON 不允许包含函数，但你可以将函数作为字符串存储，之后再将字符串转换为函数。

```
var text = '{ "name":"Runoob", "alexa":"function () {return 10000;}", "site":"www.runoob.com"}';
var obj = JSON.parse(text);
obj.alexa = eval("(" + obj.alexa + ")");
 
document.getElementById("demo").innerHTML = obj.name + " Alexa 排名：" + obj.alexa();
```



### JSON.stringify()

相关链接：[JSON.stringify() | 菜鸟教程 (runoob.com)](https://www.runoob.com/json/json-stringify.html)

JSON 通常用于与服务端交换数据。

在向服务器发送数据时一般是字符串。

我们可以使用 JSON.stringify() 方法将 JavaScript 对象转换为字符串。

##### 语法

```
JSON.stringify(value[, replacer[, space]])
参数说明：
value:
必需， 要转换的 JavaScript 值（通常为对象或数组）。

replacer:
可选。用于转换结果的函数或数组。

如果 replacer 为函数，则 JSON.stringify 将调用该函数，并传入每个成员的键和值。使用返回值而不是原始值。如果此函数返回 undefined，则排除成员。根对象的键是一个空字符串：""。

如果 replacer 是一个数组，则仅转换该数组中具有键值的成员。成员的转换顺序与键在数组中的顺序一样。当 value 参数也为数组时，将忽略 replacer 数组。

space:
可选，文本添加缩进、空格和换行符，如果 space 是一个数字，则返回值文本在每个级别缩进指定数目的空格，如果 space 大于 10，则文本缩进 10 个空格。space 也可以使用非数字，如：\t。
```



##### 