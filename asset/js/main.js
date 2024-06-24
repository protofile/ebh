$(document).ready(function () {
  $(".navbar-toggler").click(function (nt) {
    nt.preventDefault();
    $(".ebh-menu").toggleClass("show");
  });

  $(".close-bt").click(function () {
    $(".overlay").removeClass("show");
  });
});
