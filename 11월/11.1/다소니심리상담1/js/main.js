$(function () {
  $(".menu li").hover(
    function () {
      $(".menu").css("height", "200px");
    },
    function () {
      $(".menu").css("height", "30px");
    }
  );
});
