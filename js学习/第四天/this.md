#### 一、什么是this

this：表示当前对象的一个引用。
this的指向：this不是固定不变的，是根据调用的上下文（执行时环境）改变而改变。

①如果单独使用，this 表示全局对象。
②在方法中，this 表示该方法所属的对象。
③在函数中，this 表示全局对象。
④在函数中，在严格模式下，this 是未定义的(undefined)。
⑤在事件中，this 表示接收事件的元素。

#### 二、this的指向

##### 1、全局环境

全局环境就是在`<script></script>`里面，这里的this始终指向的是window对象。

##### 例：

```
<script>
    console.log(this); // 全局环境，即window对象下，this -> window 
</script>

```

##### 2、局部坏境

严格模式下，函数中的this为undefined；

##### （1）在全局[作用域](https://so.csdn.net/so/search?q=作用域&spm=1001.2101.3001.7020)下直接调用函数，this指向window。

##### 例：

```
function fun() {
 	console.log(this);
}
fun(); // fun() 实际上是window.fun(), 所以this -> window

```

##### （2）对象函数调用，哪个对象调用就指向哪个对象。

##### 例：

```
var obj1 = {
    a: 1,
    fun1: function() {
        console.log(this);
    },
    obj2: {
    	fun2: function() {
    		console.log(this);
    	}
    }
}
obj1.fun1(); // fun1由obj调用，所以this -> obj1
obj1.obj2.fun2(); // fun2由obj2调用，所以this -> obj2

```

##### （3）new实例化对象，构造函数中的this指向实例对象。

##### 例：

```
var Person = function() {
	this.name = "小刘"; // 这里的this -> obj对象
}
var obj = new Person();

```

##### （4）事件中的this。

##### 例：

```
<button onclick="this.style.display='none'">点我我就消失</button>

```

