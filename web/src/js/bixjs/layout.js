$(function(){
    //返回顶部
    var toolbarHtml ='<div class="bx-toolbar-top"></div>';
    $("body").append(toolbarHtml);
    $(document).on("scroll", function () {
        var toolbarH = $(window).scrollTop();
        if (toolbarH > 1000) {
            $(".bx-toolbar-top").fadeIn();
            
        } else {
            $(".bx-toolbar-top").fadeOut();
        }
    })
    $(".bx-toolbar-top").on("click", function () {
        $("body,html").animate({
            scrollTop: 0
        }, 600);
        return false;
    })
})