$(function () {
  let clone = $(".imgs li").eq(0).clone();
  $(".imgs").append(clone);
  let i = 0;
  let repeat;

  $(".pager li").click(function () {
    i = $(this).index();
    $(".imgs")
      .stop()
      .animate({ "margin-left": -i * 100 + "%" }, 600);
    $(".pager li").removeClass("on");
    $(this).addClass("on");
  });

  $(".next").click(function () {
    if (i == 4) {
      i = 0;
      i--;
    }
    i++;
    $(".imgs")
      .stop()
      .animate({ "margin-left": -i * 100 + "%" }, 600);
    $(".pager li").removeClass("on");
    $(".pager li").eq(i).addClass("on");
  });

  $(".prev").click(function () {
    if (i == 0) {
      i = 4;
      i++;
    }
    i--;
    $(".imgs")
      .stop()
      .animate({ "margin-left": -i * 100 + "%" }, 600);
    $(".pager li").removeClass("on");
    $(".pager li").eq(i).addClass("on");
  });
});
