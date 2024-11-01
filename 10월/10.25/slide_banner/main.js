$(function () {
  let visual = $("#brandVisual>ul>li");
  let button1 = $("#buttonList>li");

  let current = 0;
  let id;

  button1.click(function () {
    let i = $(this).index();
    // alert(i);
    button1.removeClass("on");
    button1.eq(i).addClass("on");
    move(i);
  });

  function timer() {
    id = setInterval(function () {
      let n = current + 1;
      if (n == 3) {
        n = 0;
      }
      button1.eq(n).trigger("click");
      // 버튼1을 컴퓨터에게 3초마다 n의 값에 따라 클릭하겠다.
    }, 3000);
  }
  timer();

  function move(i) {
    if (current == i) return;

    let cu = visual.eq(current);
    let ne = visual.eq(i);
    cu.css("left", "0").stop().animate({ left: "-100%" }, 500);
    ne.css("left", "100%").stop().animate({ left: "0%" }, 500);

    current = i;
  }
});
