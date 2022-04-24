// 回到顶部按钮的显示与隐藏
// window.onscroll = function () {
//     //获取滚动条到顶部的垂直高度
//     var scrollHigh = document.documentElement.scrollTop || document.body.scrollTop;
//     if (parseInt(scrollHigh) >= 600) {
//         document.getElementById('returnTop').style.display = 'block';
//     } else if (parseInt(scrollHigh) < 600) {
//         document.getElementById('returnTop').style.display = 'none';
//     }
//     console.log(scrollHigh)
// }

// // 弹出商品框的隐藏与显示

// var bannerNav = document.querySelector('.bannerNav');
// // var ul = document.getElementById('ul');
// // var bannerNavlis = ul.getElementsByTagName('li');
// var bannerNavlis = document.getElementById('li');
// var dialog = document.querySelector('.dialog');
// var dialogChild = document.getElementsByClassName('.dialogCol');
// for (var j = 0; j < bannerNavlis.length; j++) {
//     bannerNavlis[j].setAttribute('index', j);
//     bannerNavlis[j].addEventListener('mouseenter', function () {
//         var index = this.getAttribute('index');
//         dialog.style.display = 'block';
//         for (var i = 0; i < dialogChild.length; i++) {
//             dialogChild[i].style.display = 'none';
//         }
//         dialogChild[index].style.display = 'block';
//     });
//     bannerNavlis[j].addEventListener('mouseleave', function () {
//         dialog.addEventListener('mouseenter', function () {
//             dialog.style.display = 'block';
//         });
//         dialog.addEventListener('mouseleave', function () {
//             dialog.style.display = 'none';
//         });
//         dialog.style.display = 'none';
//     });
// }