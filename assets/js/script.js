window.onload = function() {
    $('body').addClass('firstSection');
}


$(function() {

    $(".tab-btn .item").click(function () {
        if (!$(this).hasClass("active")) {
            banner_index($(this))
        }
        _createTimer();
        timer_slide = window.setInterval(function () {
                banner_index()
            },
            5000)
    });
    window.setTimeout(function () {
            $(".tab-btn .item").eq(0).trigger("click")
        },
        500);
});

function banner_index(btn_item) {
    var i_now;
    var i_next;
    if (btn_item == null) {
        var btn = $(".tab-btn");
        var num = btn.find(".active").index();
        if (num + 1 == btn.find(".item").length) {
            i_now = num;
            i_next = 0
        } else {
            i_now = num;
            i_next = num + 1
        }
        btn_item = btn.find(".item").eq(i_next);
        console.log(num);
    } else {
        i_now = btn_item.siblings(".active").index();
        i_next = btn_item.index();
        if (i_now == i_next) {
            return false;
        }
    }
    btn_item.trigger("mouseover").addClass("active").siblings(".active").removeClass("active").trigger("mouseleave");
    var $tab_con = $(".index-banner .tab-con");
    $tab_con.find(".active").removeClass("active").animate({
            opacity: 0
        },
        500);
    $tab_con.find(".item").eq(i_next).addClass("active").animate({
            opacity: 1
        },
        600)
}

var timer_slide;

function _createTimer() {
    window.clearInterval(timer_slide)
}