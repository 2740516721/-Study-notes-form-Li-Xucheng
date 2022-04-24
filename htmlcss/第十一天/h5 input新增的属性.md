type属性新增值

- tel
  输入电话号码，只有safari支持

- url
  输入的网址必须是http://开头，并且后面必须有字符，否则不能提交
- date
  可以手动选择日期

time
可以手动选择时间

- datetime
  选择带有时区的日期和时间，ie，firfox和chrome都不支持
- datetime-local

month

和date类型一样，只不过只能选择到月份

week

只能选择到第几周，这种日期方式国内基本很少用

新增的其他属性

autocomplete
可选值on/off，表示基于之前用户输入的内容浏览器自动填写/不允许自动填写
autofocus
页面加载时input自动获取焦点
disabled
输入被禁用，选框变灰，禁用的元素不会提交
form
规定form之外的input属于一个或多个表单，form属性指向归属表单的id值，如果属于多个表单，id之间加空格
list
list指向引用的datalist（功能和select一样，但是不在网页中显示）预定义的可选项
- min
规定输入的最小值，适用于number、range、date、datetime、datetime-local、month、time
- max
规定输入的最大值，同样适用于number、range、date、datetime、datetime-local、month、time
- maxlength
即输入的最大字符数，超过后不能输入
- multiple
允许多多个值，用“,”隔开
- required
必须填写项，即不能为空，为空不提交
- pattern
定义验证相关的正则，注意格式不需要加“/ /”
- placeholder
定义在用户输入之前显示在输入框中的提示性内容，一般是浅灰色
- readonly
该字段只读，不能修改
- step
定义数字变化的步长，即每次变动的单位，比如step=”5”,如果输入不是5的整数倍则会在提交时提示格式不正确
