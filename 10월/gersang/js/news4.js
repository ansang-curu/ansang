$(document).ready(function () {
  $(".eventBox").slick({
    infinite: true, // 무한 루프
    slidesToShow: 1, // 한 번에 보여줄 슬라이드 수
    slidesToScroll: 1, // 한 번에 이동할 슬라이드 수
    autoplay: true, // 자동 슬라이드
    autoplaySpeed: 3500, // 슬라이드 변경 시간(2초)
    arrows: true, // 좌우 화살표 표시
    dots: true, // 아래 점 (페이지네이션) 표시
    speed: 700, // 슬라이드 이동 속도
    fade: false, // 페이드 전환 효과
  });
});
