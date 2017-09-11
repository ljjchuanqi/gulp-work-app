$(document).ready(function() {
    //产品详情页轮播
    if ($('#j_slidepro').length > 0) {
        TouchSlide({
            slideCell: "#j_slidepro",
            titCell: ".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
            mainCell: ".bd ul",
            effect: "leftLoop",
            autoPage: true //自动分页
        });
    }
    //产品详情页头部tab
    if ($('.j_proTab').length > 0) {
        var oa = $('.j_proTab').find('a');
        var obox = $('.j_proTabContent').find('.box');
        // console.log(obox);
        oa.click(function() {
            var idx = $(this).index();
            $(this).addClass('active').siblings().removeClass('active');
            obox.eq(idx).css('display', 'block').siblings().css("display", "none");
        });
    }
    //公司简介手风琴效果
    if ($(".m_aboutMenu").length > 0) {
        $(".m_aboutMenu").slide({
            titCell: "h3", //鼠标触发对象
            targetCell: "ul", //与titCell一一对应，第n个titCell控制第n个targetCell的显示隐藏
            effect: "slideDown", //targetCell下拉效果
            delayTime: 300, //效果时间
            triggerTime: 150, //鼠标延迟触发时间（默认150）
            defaultPlay: true, //默认是否执行效果（默认true）
            returnDefault: true, //鼠标从.sideMen移走后返回默认状态（默认false）
            trigger: "click"
        });
    }
    //头部搜手风琴效果
    $(".j_topNavContent").slide({
        titCell: "h3", //鼠标触发对象
        targetCell: ".sub", //与titCell一一对应，第n个titCell控制第n个targetCell的显示隐藏
        effect: "slideDown", //targetCell下拉效果
        delayTime: 300, //效果时间
        triggerTime: 150, //鼠标延迟触发时间（默认150）
        defaultPlay: false, //默认是否执行效果（默认true）
        returnDefault: false, //鼠标从.sideMen移走后返回默认状态（默认false）
        trigger: "click"
    });
    $(".sub").slide({
        titCell: "h4", //鼠标触发对象
        targetCell: ".thirdSub", //与titCell一一对应，第n个titCell控制第n个targetCell的显示隐藏
        effect: "slideDown", //targetCell下拉效果
        delayTime: 300, //效果时间
        triggerTime: 150, //鼠标延迟触发时间（默认150）
        defaultPlay: true, //默认是否执行效果（默认true）
        returnDefault: true, //鼠标从.sideMen移走后返回默认状态（默认false）
        trigger: "click"
    });
    //头部菜单控制
    var obar = $('.j_topNavBar');
    var ocontent = $('.j_topNavContent');
    var oclose = $('.j_close');
    var obg = $('.j_topNavContentBg');
    obar.click(function() {
        ocontent.css('display', 'block');
        obg.css('display', 'block');
    });
    oclose.click(function() {
        ocontent.css('display', 'none');
        obg.css('display', 'none');
    });
    obg.click(function() {
        ocontent.css('display', 'none');
        obg.css('display', 'none');
    });
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
    //头部搜索
    var osearch = $('.m_search');
    var osearchContent = $('.m_searchContent');
    var obtn = $('.m_searchContent').find('.j_btn');
    osearch.click(function() {
        osearchContent.css('display', 'block');
    });
    obtn.click(function(e) {

        osearchContent.css('display', 'none');
    });
    osearchContent.click(function(e) {
        if (e.target.tagName == 'INPUT') {
            return;
        }
        osearchContent.css('display', 'none');
    });
    //媒体中心视频动态
    if ($('.j_video').length > 0) {
        var ovideo = $('.j_video');
        var otitle = ovideo.find('.title').find('span');
        var otxt = ovideo.find('.txt');
        var oa = ovideo.find('.j_reptxt');
        var ovideobox = ovideo.find('.videobox');
        oa.click(function() {
            var imgsrc = $(this).find('img').attr('src');
            var datatitle = $(this).find('img').data('title');
            var datatxt = $(this).find('img').data('txt');
            ovideobox.find('img').attr('src', imgsrc);
            otitle.html(datatitle);
            otxt.html(datatxt);
        });
    }
    //视频图片滑动
    TouchSlide({
        slideCell: "#picScroll",
        titCell: ".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
        autoPage: true, //自动分页
        pnLoop: "false" // 前后按钮不循环
    });

})