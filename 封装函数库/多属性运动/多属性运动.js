/* 
    该函数有四个参数
    ele 为节点对象
    obj 是要改变的属性，以一个对象的类型传入
    speed 每次改变的量
    times 定时器刷新的时间，也可以说是速度，单位是毫秒
*/
function sport(ele,obj,speed,times){
    clearInterval(ele.timer);//清除定时器，防止多开
        ele.timer = setInterval(function(){

        // 传入的数据是键值对方式
            for(key in obj){
                var attr = key;//属性
                var target = obj[key];//属性值
        // 判断传入值的类型，并获取旧值
                
        if (attr == 'opacity') {
                    var cur = getStyle(ele, attr) * 100;
                } else {
                    var cur = parseInt(getStyle(ele, attr));
                    // console.log(cur);
                    // console.log("属性为"+attr);
                }


                //判断属性值大小，比当前值大，步长为正，比当前值小，步长为负
                var step = target<cur?-speed:speed;
                console.log("step为"+step);
                
                if(Math.abs( Math.abs(cur) - target)<step){
                    cur = target;
                    clearInterval(ele.timer);
                }else{
                    cur += step;
                };
                
                if(attr == 'opacity'){
                            
                            ele.style[attr] = cur / 100;

                         }else{
                            ele.style[attr] = cur+"px";
                            // console.log(ele.style[attr]);
                   };
                        
                if(target == cur){
                    clearInterval(ele.timer);
                };
            }  
    },times);

    function getStyle(ele, attr) {
        if (ele.currentStyle == undefined) {
            return getComputedStyle(ele)[attr];
        } else {
            return ele.currentStyle[attr];
        }
    }
}
