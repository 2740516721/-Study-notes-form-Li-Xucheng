
// 该函数只有一个参数，参数的意思是被拖拽的对象。
function drag(element){
    var offsetX,offsetY;
    // 鼠标按下事件
    element.addEventListener("mousedown",mouseHandler);

    function mouseHandler(e){
    if(e.type==="mousedown"){
        // 获取鼠标第一次按下时鼠标距离当前对象的坐标。
        offsetX=e.offsetX;
        offsetY=e.offsetY;
        document.addEventListener("mousemove",mouseHandler)
        document.addEventListener("mouseup",mouseHandler)
    }else if(e.type==="mousemove"){
        /*  
            移动时鼠标距离浏览器窗口可视区域的坐标X、Y
            减去鼠标按下时距离当前对象的X，Y坐标。 
        */
        element.style.left=e.clientX-offsetX+"px"
        element.style.top=e.clientY-offsetY+"px"
    }else if(e.type==="mouseup"){
        // 鼠标抬起时，清除鼠标移动事件和鼠标抬起事件
        document.removeEventListener("mousemove",mouseHandler)
        document.removeEventListener("mouseup",mouseHandler)
    }
}
}