$(function () {
  $(window).scroll(function () {
    var sct = $(window).scrollTop();
    $("#sTop").text(sct);
    if (sct >= 100) {
      $("nav").addClass("fixed");
    } else {
      $("nav").removeClass("fixed");
    }

    if (sct >= $("section>div").eq(0).offset().top) {
      $("nav ul li").removeClass("on");
      $("nav ul li").eq(0).addClass("on");
    }
    if (sct >= $("section>div").eq(1).offset().top) {
      $("nav ul li").removeClass("on");
      $("nav ul li").eq(1).addClass("on");
    }
    if (sct >= $("section>div").eq(2).offset().top) {
      $("nav ul li").removeClass("on");
      $("nav ul li").eq(2).addClass("on");
    }
    if (sct >= $("section>div").eq(3).offset().top) {
      $("nav ul li").removeClass("on");
      $("nav ul li").eq(3).addClass("on");
    }
    if (sct >= $("section>div").eq(4).offset().top) {
      $("nav ul li").removeClass("on");
      $("nav ul li").eq(4).addClass("on");
    }
    if (sct >= $("section>div").eq(5).offset().top) {
      $("nav ul li").removeClass("on");
      $("nav ul li").eq(5).addClass("on");
    }
  });

  $("nav ul li").click(function () {
    var i = $(this).index();

    var offset_nav = $("section>div").eq(i).offset().top;

    $("html,body").stop().animate({ scrollTop: offset_nav }, 1000);
    //스크롤을 offset_nav만큼 움직임
    $("nav ul li").removeClass("on");
    $("nav ul li").eq(i).removeClass("on");
    return false;
  });
});
