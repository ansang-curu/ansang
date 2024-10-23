// $(function () {
//   $(".member img").mouseover(function () {
//     $(".member ul").css("display", "block");
//   });

//   $(".member img").mouseout(function () {
//     $(".member ul").css("display", "none");
//   });
// });

// $(function () {
//   $(".section1 .member .img1").mouseover(function () {
//     $(".member .ul1").fadeIn(); // 부드러운 효과
//   });

//   $(".section1 .member .img1").mouseout(function () {
//     $(".member .ul1").fadeOut(); // 부드러운 효과
//   });

//   $(".section1 .member2 .img2").mouseover(function () {
//     $(".member2 .ul2").fadeIn(); // 부드러운 효과
//   });

//   $(".section1 .member2 .img2").mouseout(function () {
//     $(".member2 .ul2").fadeOut(); // 부드러운 효과
//   });
// });

// $(function () {
//   $(".section1 .member img").mouseover(function () {
//     var imgIndex = $(this).index(); // 현재 이미지의 인덱스를 가져옵니다.
//     $(".member ul").eq(imgIndex).fadeIn(); // 해당 인덱스의 ul을 표시합니다.
//     console.log(imgIndex);
//   });

//   $(".section1 .member img").mouseout(function () {
//     var imgIndex = $(this).index(); // 현재 이미지의 인덱스를 가져옵니다.
//     $(".member ul").eq(imgIndex).fadeOut(); // 해당 인덱스의 ul을 숨깁니다.
//     console.log(imgIndex);
//   });
// });

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
