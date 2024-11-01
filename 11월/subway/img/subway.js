$(function () {
  $("nav>ul").hover(
    function () {
      $(".header_wrap").css("height", "350px");
    },
    function () {
      $(".header_wrap").css("height", "140px");
    }
  );
});

$(document).ready(function () {
  $(".backImgBox ul").slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // 자동 재생 설정
    autoplaySpeed: 3000,
    arrows: false,
  });
});

//메뉴 액티브 설정
$(function () {
  $("nav ul li").hover(
    function () {
      $(this).children("a:first-child").css("color", "green");
    },
    function () {
      $(this).children("a:first-child").css("color", "");
    }
  );
  $("nav ul li ul li").hover(
    function () {
      $(this).children("a:first-child").css("text-decoration", "underline"); // 밑줄 효과 추가
    },
    function () {
      $(this).children("a:first-child").css("text-decoration", ""); // 원래 상태로 복구
    }
  );
});
