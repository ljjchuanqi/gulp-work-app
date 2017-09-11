$(document).ready(function() {
    //页面滑动导航
    var timer;
    var oslideSort = $('.j_slideSort');
    //容器
    var oslide = $('.j_slideSort').find('.slide');
    //滚动盒子
    var oul = oslideSort.find('ul');
    //滚动按钮
    var obtn = oslideSort.find('.btn');
    //滚动项目
    var oli = oslideSort.find('li');
    //滚动项目数量
    var li_len = oli.length;
    //滚动项目宽度
    var li_width = oli.width();
    //滚动项目宽度之和
    var total_width = li_width * li_len;
    //设置滚动盒子的宽度
    oul.css('width', total_width + 'px');
    //可滚动宽度
    var ableScrollWidth = oslide[0].scrollWidth - oslide[0].clientWidth;
    //滚动速度
    var speed = 16;
    var startLeft;
    var endLeft;

    obtn.click(function() {
        startLeft = oslide[0].scrollLeft;
        timer = setInterval(function() {
            oslide[0].scrollLeft = oslide[0].scrollLeft + 8;
            endLeft = oslide[0].scrollLeft;
            if (endLeft >= ableScrollWidth) {
                clearInterval(timer);
            }
            if (endLeft - startLeft >= li_width) {
                clearInterval(timer);
                startLeft = endLeft;
            }
        }, speed);
    })
})