$(document).ready(function() {
    /********************头尾部通用 **************************/
    //头部菜单手风琴
    $(".j_sideMenu").slide({
        titCell: "h3", //鼠标触发对象
        targetCell: "ul", //与titCell一一对应，第n个titCell控制第n个targetCell的显示隐藏
        effect: "slideDown", //targetCell下拉效果
        delayTime: 300, //效果时间
        triggerTime: 150, //鼠标延迟触发时间（默认150）
        defaultPlay: true, //默认是否执行效果（默认true）
        returnDefault: true, //鼠标从.sideMen移走后返回默认状态（默认false）
        trigger: "click"
    });
    $(".j_sideMenu .sub").slide({
        titCell: ".tit", //鼠标触发对象
        targetCell: ".three", //与titCell一一对应，第n个titCell控制第n个targetCell的显示隐藏
        effect: "slideDown", //targetCell下拉效果
        delayTime: 300, //效果时间
        triggerTime: 150, //鼠标延迟触发时间（默认150）
        defaultPlay: true, //默认是否执行效果（默认true）
        returnDefault: true, //鼠标从.sideMen移走后返回默认状态（默认false）
        trigger: "click"
    });
    //头部菜单控制
    var obar = $('.j_topbar');
    var obtnbar = obar.find('.bar');
    var otopbarpanel = obar.find('.topbar-panel');
    var obg = $('.topbar-bg');
    obtnbar.click(function() {
        otopbarpanel.css('display', 'block');
        obg.css('display', 'block');
    });
    obg.click(function() {
        otopbarpanel.css('display', 'none');
        obg.css('display', 'none');
    });
    /********************头尾部通用end **************************/
    //首页轮播
    if ($('#j_slideidx').length > 0) {
        TouchSlide({
            slideCell: "#j_slideidx",
            titCell: ".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
            mainCell: ".bd ul",
            effect: "leftLoop",
            autoPage: true //自动分页
        });
    }
    //荣誉资质手风琴效果
    if ($(".m_aboutMenu").length > 0) {
        $(".m_aboutMenu").slide({
            titCell: ".menuhover", //鼠标触发对象
            targetCell: "ul", //与titCell一一对应，第n个titCell控制第n个targetCell的显示隐藏
            effect: "slideDown", //targetCell下拉效果
            delayTime: 300, //效果时间
            triggerTime: 150, //鼠标延迟触发时间（默认150）
            defaultPlay: true, //默认是否执行效果（默认true）
            returnDefault: true, //鼠标从.sideMen移走后返回默认状态（默认false）
            trigger: "click"
        });
    }
    //服务理念
    $(".m_areaTab").slide({
        trigger: 'click',
        effect: 'left'
    });

    //宣传视频
    if ($('.j_videoList').length > 0) {
        var ovideoList = $('.j_videoList');
        var oa = ovideoList.find('li').find('a');
        var ovideoBox = $('.j_videoBox');
        var oimg = ovideoBox.find('img');
        oa.click(function() {
            var data_src = $(this).find('.pic').find('img').data('src');
            oimg.attr('src', data_src);
        });
    }
    //页面滑动导航
    if ($('.j_slideSort').length > 0) {
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
    }


})