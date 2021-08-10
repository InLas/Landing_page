$(document).ready(function () {
  $('.slider-intro').slick({
    dots: true,
    arrows: false,
    draggable: true,
    speed: 500,
    mobileFirst: true,
  });
  $('.slider-blog').slick({
    dots: true,
    arrows: false,
    draggable: true,
    speed: 500,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 809,
        settings: {
          arrows: true,
        }
      }
    ]
  });
  $('.slider-quotes').slick({
    dots: true,
    arrows: false,
    draggable: true,
    speed: 500,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          variableWidth: true,
        }
      }
    ]
  });
});