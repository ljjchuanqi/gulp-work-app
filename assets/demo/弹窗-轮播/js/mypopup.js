(function($) {
    function htmlTemplate(url, nameStr, addressStr) {

        var urlArr = url.split(",");

        var len = urlArr.length;
        var str = "<div class='hd'><ul></ul></div>";
        str += "<div class='bd'><ul>";
        for (var i = 0; i < len; i++) {
            str += "<li>";
            str += "<a href='javascript:;'>";
            str += "<div class='txt'>";
            str += "<p class='name'>" + nameStr + "</p>";
            str += "<p class='address'>" + addressStr + "</p>";
            str += "</div>";
            str += "<div class='pic'>";
            str += " <img src=" + urlArr[i] + ">";
            str += "</div>";
            str += "</a>";
            str += "</li>";
        }
        str += "</ul></div>";
        return str;
    }

    function htmlTemplatePro(url, nameStr, addressStr, codeStr) {
        var urlArr = url.split(",");
        var len = urlArr.length;
        var str = "<div class='hd'><ul></ul></div>";
        str += "<div class='bd'><ul>";
        for (var i = 0; i < len; i++) {
            str += "<li>";
            str += "<a href='javascript:;'>";
            str += "<div class='pic'>";
            str += " <img src=" + urlArr[i] + ">";
            str += "</div>";
            str += "</a>";
            str += "</li>";
        }
        str += "</ul></div>";
        return str;
    }
    /******************************popup*******************************************/
    //为列表图片绑定单击事件
    $('.j_popupBtn').click(function() {
        $('.m_popup').css("visibility", "visible");
        $('.m_popup .popup-content').show();
        var nameStr = $(this).find('.txt').find('p').text();
        var addressStr = $(this).find('.txt').find('span').text();
        var url = $(this).data("url");
        //拼接html结构生成字符串
        var htmlStr = htmlTemplate(url, nameStr, addressStr);
        //生成弹窗的dom结构
        $('#j_showShop').html(htmlStr);
        //初始化轮播
        TouchSlide({
            slideCell: "#j_showShop",
            titCell: ".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
            mainCell: ".bd ul",
            effect: "leftLoop",
            autoPlay: true, //自动播放
            autoPage: true //自动分页
        });
    });
    //为关闭绑定事件
    $('.j_close').click(function() {
        $('.m_popup .popup-content').hide();
        $('.m_popup').css("visibility", "hidden");
        $('#j_showShop').html("");
    });
    /********************************popupPro**************************************/
    //为列表图片绑定单击事件
    $('.j_popupBtnPro').click(function() {
        $('.m_popup').css("visibility", "visible");
        $('.m_popup .popup-content').show();
        var itemnumStr = $(this).data("itemnum");
        var colorStr = $(this).data("color");
        var codeStr = $(this).data("code");
        var url = $(this).data("url");
        //拼接html结构生成字符串
        var htmlStr = htmlTemplatePro(url, itemnumStr, colorStr, codeStr);
        //生成弹窗的dom结构
        $('#j_showShop').html(htmlStr);
        $(".j_popupPro").find('.txt-pro').find('.itemnum').text(itemnumStr);
        $(".j_popupPro").find('.txt-pro').find('.color').text(colorStr);
        $(".j_popupPro").find('.txt-pro').find('.code').text(codeStr);
        //初始化轮播
        TouchSlide({
            slideCell: "#j_showShop",
            titCell: ".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
            mainCell: ".bd ul",
            effect: "leftLoop",
            autoPlay: true, //自动播放
            autoPage: true //自动分页
        });
    });
    //为关闭绑定事件
    $('.j_closePro').click(function() {
        $('.m_popup .popup-content').hide();
        $('.m_popup').css("visibility", "hidden");
        $('#j_showShop').html("");
    });
})(jQuery);