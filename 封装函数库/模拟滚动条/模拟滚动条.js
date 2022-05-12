

   /* 
        该函数有四个参数，
        el1 为被滚动的内容区；
        el2 为滚动条区域；
        el3 为滚动滑块；
        el4 为滚动条区域、滑块、内容区的父元素。
    */

function mnscroll(el1,el2,el3,el4){
 var barHeight;//滑块的高度
 var scrollttHeight = el2.clientHeight;//滚动区域高度
 var boxHeight = el4.clientHeight;//盒子的可视高度
 var contextHeight = el1.scrollHeight;//内容区域高度，包括隐藏的部分
 var boxTop; // box盒子距整个可视窗口顶部的距离
 var offsetY;//获取鼠标按下时在滑轮上的距离（y轴上）

 //  判断内容盒子的高度是否大于可视窗口，大于显示滑轮，小于则不显示。
 if(contextHeight>boxHeight){
     barHeight = boxHeight/contextHeight*scrollttHeight;
     el3.style.height = barHeight+'px';
 }else{
     el3.style.height = "0px";
 }

el3.addEventListener("mousedown",drag);
  // 鼠标抬起时，清除事件
el3.addEventListener("mouseup",dragUp);

function drag(e){
     boxTop = el4.offsetTop; // box盒子距整个可视窗口顶部的距离
     offsetY = e.offsetY;//获取鼠标按下时在滑轮上的距离（y轴上）
    document.addEventListener("mousemove",dragMove);
}

function dragMove(e){
        var hideHeight = scrollttHeight - barHeight;//滑块可移动最大高度
        var scrollttHideHeight = contextHeight - boxHeight;//内容区域可移动最大高度
        var ratio = scrollttHideHeight/hideHeight;//内容区域可移动最大高度与滑块可移动最大高度的比例
        var blockTop = e.clientY - offsetY - boxTop;//滚动条滚动的距离
        // 限制滑块的区域

        if (blockTop<=0) {

            el3.style.top = '0px';
            context.style.top = '0px';
            // console.log(context.offsetTop);

        }else if(blockTop>=hideHeight){

            el3.style.top = hideHeight+'px';
            el1.style.top = -scrollttHideHeight+'px';
            // console.log(context.style.top);

        }else{

            el3.style.top = blockTop + 'px';
            el1.style.top = - ratio*blockTop+'px';
            // console.log(context.style.top);

        }
    }

function dragUp(){
    document.removeEventListener("mousemove",dragMove);
    document.removeEventListener("mouseup",dragUp);
}


}
