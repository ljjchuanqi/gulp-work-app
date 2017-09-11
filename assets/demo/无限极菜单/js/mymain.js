$(document).ready(function() {
    if ($(".floor_top").length > 0) {
        $(".floor_back").click(function() {
            $('body,html').stop(true).animate({
                scrollTop: 0
            }, 1000);
        });
        $(".lan").click(function() {
            var lan_html = $(".lan").html();
            if (lan_html == "En")
                $(".lan").html("Ch");
            else
                $(".lan").html("En");

        });

        $(window).scroll(function() {
            if ($(this).scrollTop() > 200) {
                $(".floor_back").show();
            } else {
                $(".floor_back").hide();
            }
        });
    }
    //头部搜手风琴效果
    // $(".j_sideMenu").slide({
    //     titCell: "h3", //鼠标触发对象
    //     targetCell: ".sub", //与titCell一一对应，第n个titCell控制第n个targetCell的显示隐藏
    //     effect: "slideDown", //targetCell下拉效果
    //     delayTime: 300, //效果时间
    //     triggerTime: 150, //鼠标延迟触发时间（默认150）
    //     defaultPlay: false, //默认是否执行效果（默认true）
    //     returnDefault: false, //鼠标从.sideMen移走后返回默认状态（默认false）
    //     trigger: "click"
    // });
    $('.j_sideMenu').menu({
        "backLabel": "返回"
    });
    //首页轮播
    if ($('#j_slideidx').length > 0) {
        TouchSlide({
            slideCell: "#j_slideidx",
            titCell: ".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
            mainCell: ".bd ul",
            effect: "leftLoop",
            autoPage: true, //自动分页
            autoPlay: true,
            speed: 600
        });
    }
    //加盟专区
    var ojoin = $('.j_join');
    var otabitem = ojoin.find('.tab-item');
    var obox = ojoin.find('.box');
    otabitem.each(function(i) {
        $(this).click(function() {
            // console.log(1);
            $(this).addClass('active').siblings().removeClass('active');
            obox.eq(i).addClass('active').siblings().removeClass('active');
        })
    });
    //头部搜索
    var osearch = $('.j_search');
    var osearchpanel = osearch.find('.search-panel');
    var obtnopen = osearch.find('.btn');
    var obtn = osearch.find('.btn-search');
    obtnopen.click(function() {
        console.log(2);
        osearchpanel.css('display', 'block');
    });
    obtn.click(function(e) {

        osearchpanel.css('display', 'none');
    });
    osearchpanel.click(function(e) {
        if (e.target.tagName == 'INPUT') {
            return;
        }
        console.log(1);
        osearchpanel.css('display', 'none');
    });
    //头部菜单控制
    var obar = $('.j_topbar');
    var obtnbar = obar.find('.bar');
    var otopbarpanel = obar.find('.topbar-panel');
    // var obtnclose = $('.j_close');
    var obg = $('.topbar-bg');
    obtnbar.click(function() {
        otopbarpanel.css('display', 'block');
        otopbarpanel.animate({
            // 'transform': 'translateX(0)',
            left: 0
        }, 300)
        obg.css('display', 'block');
    });
    // oclose.click(function() {
    //     ocontent.css('display', 'none');
    //     // obg.css('display', 'none');
    // });
    obg.click(function() {
        otopbarpanel.animate({
            // 'transform': 'translateX(0)',
            left: -100 + '%'
        }, 300)
        setTimeout(function() {
            otopbarpanel.css('display', 'none');
            obg.css('display', 'none');
        }, 300)

    });
    //产品中心家纺、家具下拉菜单
    var ochoice = $('.j_choice');
    var oa = ochoice.find('.choice-tab').find('a');
    var opanel = ochoice.find('.panel');
    var ojiafangpanel = ochoice.find('.jiafang-panel');
    var ojiajupanel = ochoice.find('.jiaju-panel');
    var oclose = ochoice.find('.btn-close');
    oa.click(function() {
        var idx = $(this).index();
        // console.log(idx);
        $(this).addClass('cur').siblings().removeClass('cur');
        opanel.css('display', 'none');
        opanel.eq(idx).css('display', 'block');
        // ojiafangpanel.css('display','block');
    });
    oclose.click(function() {
        ojiafangpanel.css('display', 'none');
        ojiajupanel.css('display', 'none');
        oa.removeClass('cur');
    });


})