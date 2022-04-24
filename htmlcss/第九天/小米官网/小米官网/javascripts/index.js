/* import the javascript file on swiper */
import Swiper from '../swiper8/swiper-bundle.esm.browser.js';

window.onload = function () {
    // 左侧弹出商品框的隐藏与显示
    const bannerNavlis = document.getElementById('ul').getElementsByTagName('li');
    const dialog = document.getElementById('dialog');
    const dialogChilds = dialog.getElementsByTagName('div');

    for (var i = 0; i < bannerNavlis.length; i++) {
        bannerNavlis[i].addEventListener('mouseenter', function () {
            // 鼠标移入，隐藏的商品栏显示
            dialog.style.display = "block";
            // 使所有商品栏隐藏，除了当前鼠标所位于的商品栏显示
            for (var i = 0; i < bannerNavlis.length; i++) {
                if (bannerNavlis[i] === this) {
                    dialogChilds[i].className = "dialogBox dialogBoxActive";
                } else {
                    dialogChilds[i].className = "dialogBox";
                }
            }
        });
        bannerNavlis[i].addEventListener('mouseleave', function () {
            dialog.addEventListener('mouseenter', function () {
                this.style.display = "block"
            })
            dialog.addEventListener('mouseleave', function () {
                dialog.style.display = "none";
            })
            dialog.style.display = "none";
        })
    }


    // 右侧固定导航条
    window.onscroll = function () {
        //获取滚动条到顶部的垂直高度
        var scrollHigh = document.documentElement.scrollTop || document.body.scrollTop;
        if (parseInt(scrollHigh) >= 600) {
            document.getElementById('returnTop').style.display = 'block';
            document.querySelector('.sidebar').style.top = '110px';
        } else if (parseInt(scrollHigh) < 600) {
            document.getElementById('returnTop').style.display = 'none';
            document.querySelector('.sidebar').style.top = '210px';
        }
        console.log(scrollHigh)
    }

    // 顶部下滑弹出框
    const bottomShopping = document.querySelector('.bottomShopping')
    const navContent = document.querySelector('.navContent');
    const navbox = document.querySelector('.navbox');
    // 鼠标移入时高度展开
    navContent.addEventListener('mouseenter', function () {
        navbox.style.height = '330px';
        navbox.style.boxShadow = '-2px 8px 33px -11px grey'
    })
    // 鼠标移出时，如果鼠标在下滑商品中，则高度保持展开，否则高度恢复原来高度
    navContent.addEventListener('mouseleave', function () {
        bottomShopping.addEventListener('mouseenter', function () {
            navbox.style.height = '330px';
            navbox.style.boxShadow = '-2px 8px 33px -11px grey'
        })
        bottomShopping.addEventListener('mouseleave', function () {
            navbox.style.height = '100px';
            navbox.style.boxShadow = 'none'
        })
        navbox.style.height = '100px';
        navbox.style.boxShadow = 'none'
    })

    // 顶部下滑弹出框商品
    const bottomShoppings = document.getElementById('bottomShoppings').getElementsByTagName('div');
    const tabs = document.getElementById('tabs').getElementsByTagName("li");
    // 添加鼠标移入事件
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].onmouseover = showList;
    }
    function showList() {
        // 除了当前鼠标所停留的标签外，其他标签全部使用display:none;的类名
        for (var i = 0; i < tabs.length; i++) {
            if (tabs[i] === this) {
                bottomShoppings[i].className = "bottomShoppings bottomShoppingsActive";
            } else {
                bottomShoppings[i].className = "bottomShoppings";
            }
        }
    }
    /* 示例轮播图组件 */
    new Swiper('.swiper', {
        // 设置水平切换
        direction: 'horizontal',
        // 开启循环播放
        loop: true,
        // 设置切换速度
        speed: 500,
        // 开启自动播放
        autoplay: true,
        // 设置切换效果为淡化
        effect: 'fade',
        // 开启左右切换按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        // 开启分页
        pagination: {
            el: '.swiper-pagination'
        }
    })

    // 商品多宫格
    function two(lists, ones) {
        for (var i = 0; i < lists.length; i++) {
            lists[i].addEventListener('mouseenter', function () {
                for (var i = 0; i < lists.length; i++) {
                    if (lists[i] === this) {
                        lists[i].className = "active";
                        ones[i].className = "waresList shoppingsActive";
                    } else {
                        lists[i].className = "";
                        ones[i].className = "waresList";
                    }
                }
            })
        }
    }
    const classifications = document.getElementById('more2').getElementsByTagName('a');
    const wares = document.getElementById('wares').querySelectorAll('.waresList');
    two(classifications, wares);

    const wares3 = document.getElementById('wares3').querySelectorAll('.waresList');
    const classifications3 = document.getElementById('more3').getElementsByTagName('a');
    two(classifications3, wares3);

    const wares4 = document.getElementById('wares4').querySelectorAll('.waresList');
    const classifications4 = document.getElementById('more4').getElementsByTagName('a');
    two(classifications4, wares4);

    const wares5 = document.getElementById('wares5').querySelectorAll('.waresList');
    const classifications5 = document.getElementById('more5').getElementsByTagName('a');
    two(classifications5, wares5);

    const wares6 = document.getElementById('wares6').querySelectorAll('.waresList');
    const classifications6 = document.getElementById('more6').getElementsByTagName('a');
    two(classifications6, wares6);

    const wares7 = document.getElementById('wares7').querySelectorAll('.waresList');
    const classifications7 = document.getElementById('more7').getElementsByTagName('a');
    two(classifications7, wares7);

    const wares8 = document.getElementById('wares8').querySelectorAll('.waresList');
    const classifications8 = document.getElementById('more8').getElementsByTagName('a');
    two(classifications8, wares8);



    // 购物车懒加载
    const shoppingCart = document.getElementById('shoppingCart');
    const img = document.getElementById('img');
    shoppingCart.addEventListener('mouseenter', function () {
        setTimeout(function () {
            img.style.display = "none";
        }, 3000)
    })
}
