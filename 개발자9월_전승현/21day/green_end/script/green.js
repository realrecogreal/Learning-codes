//팝업ㅣ
// let popup = document.getElementById("#popup");
$(".box img").click(function () {
    $("#popup").fadeIn(500);
    $(".close").click(function () {
        $("#popup").fadeOut(300);
    });
    $("#popup").click(function (e) {
        $(this).fadeOut(300);
    });
    $(".modal").click(function (e) {
        e.stopPropagation(); //버블링 효과 제한( 이벤트가 상위로 전파되는 것을 막아준다. )
    });
});

//슬라이더
let imgWidth = $(".top_banner li").width(); // 1200px
let imgNum = $(".top_banner li").length;
$(".top_banner").width(imgWidth * imgNum);

setInterval(roll, 2000);

function roll() {
    $(".top_banner").animate({
        left: -imgWidth
    }, 1000, "swing", function () {
        // $(".top banner>li:first").appendTo(".top_banner");
        $(".top_banner>li:first").insertAfter(".top_banner>li:last");
        $(".top_banner").css("left", 0);
    });
};

//슬라이드 다운
// $(".gnb>li").on({
//     "mouseenter": function () {
//         $(this).children(".submenu").stop().slideDown(500);
//     },
//     "mouseleave": function () {
//         $(this).children(".submenu").stop().slideUp(500);
//     }
// });

$("header").append("<div class='bg'></div>")

$(".gnb>li").on({
    "mouseenter": function () {
        $(".bg, .submenu").stop().slideDown(500);
    },
    "mouseleave": function () {
        $(".bg, .submenu").stop().slideUp(500);
    }
});

//탭메뉴
$("#tab_menu>a").click(function() {
    let idx = $(this).index();
    console.log(idx);
    $(this).addClass("on").siblings("a").removeClass("on");
    $("#tab_box>.list").eq(idx).show().siblings(".list").hide();

});

$.ajax({
    url: "./data/notice.json",
    dataType: "json",
    success: function(data) {
        console.log(data);
        let list = "<ul class='list'>";
        $.each(data, function(index, object) {
            list += "<li>" + object.title + "<span>" + object.date +"</span>" + "</li>";
        });
        list += "</ul>"
        $("#tab_box").prepend(list);

    },
    error: function() {
        alert("로딩에 실패");
    }
});