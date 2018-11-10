$(document).ready(function() {
  $('.js-hamburger').each(function() {
    $(this).on('click', function() {
      $(this).toggleClass('is-active')
    })
  });

  $('.sertificats__list').owlCarousel({
        loop:true,
        autoplay: true,
        nav:true,
        smartSpeed: 500,
        autoplaySpeed: 1000,
        lazyLoad:true,
        navText: ["<i class='icon-arrow-left2'></i>", "<i class='icon-arrow-right2'></i>"],
        responsive:{
            0:{
                items:1

            }
        }
    });
});