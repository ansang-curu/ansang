$(function () {
  $(".section1 .member img").mouseover(function () {
    // 현재 이미지의 부모 .member에서 ul을 찾습니다.
    $(this).siblings("ul").fadeIn(); // 해당 ul을 표시합니다.
  });

  $(".section1 .member img").mouseout(function () {
    // 현재 이미지의 부모 .member에서 ul을 찾습니다.
    $(this).siblings("ul").fadeOut(); // 해당 ul을 숨깁니다.
  });
});
