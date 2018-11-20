$(document).ready(function() {

    // Scroll to top
  $(window).scroll(function() {

    if ($(this).scrollTop() > 100) {
      $('#scroller').addClass('fixed-arrows__top--active');
      $('.list-phones').removeClass('fixed-arrows__top--active')
    } else {
      $('#scroller').removeClass('fixed-arrows__top--active');
    }
  });
  
  $('#scroller').click(function() {
    $('body,html').animate({
      scrollTop: 0
    }, 1000);
    return false;
  });

  $('.smooth-scroll a [data-scroll]').click(function() {
          var offset = 0; // <-- change the value here
          if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
              if (target.length) {
                  $('html, body').animate({
                      scrollTop: target.offset().top + offset
                  }, 1500, 'swing');
                  return false;
              }
          }
      });
  $('[data-scroll]').click(function() {
          var offset = 50; // <-- change the value here
          if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
              if (target.length) {
                  $('.backdrop').removeClass('backdrop--show');
                  $('.js-hamburger').removeClass('is-active');
                  $('.menu').removeClass('menu--show');
                  $('html, body').animate({
                      scrollTop: target.offset().top + offset
                  }, 1500, 'swing');
                  return false;
              }
          }

      });



  // select roof
  $('.choose-style__item').click(function() {
    var roof = $(this).attr('data-roof');
    console.log(roof);
    $('#changeRoof').removeClass().addClass(roof + ' choose-style__img');
  });

  $('.rewiews__adress-list').slick({
    slidesToShow: 5,
    infinite: false,
    vertical: true,
    slidesToScroll: 1,
    dots: false,
    centerMode: false,
    focusOnSelect: false,
    draggable: false,
    prevArrow: $('.adress-nav__top'),
    nextArrow: $('.adress-nav__bottom'),
    responsive: [
    {
      breakpoint:992,
      settings: {
        slidesToShow: 2,
        vertical: false,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
        vertical: true,
      }
    }
  ]
  });


  $('.review-slider').slick({
    slidesToShow: 1,
    infinite: false,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.review-slider__nav'
  });
  $('.review-slider__nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    asNavFor: '.review-slider',
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    prevArrow: $('.review-slider-prev'),
    nextArrow: $('.review-slider-next'),
    responsive: [
    {
      breakpoint:576,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint:414,
      settings: {
        slidesToShow: 2,
      }
    },
  ]
  });

  $('.js-hamburger').on('click', function() {
      $(this).toggleClass('is-active');
      $('.menu').toggleClass('menu--show');
      if($('.menu').hasClass('menu--show')){
        $('.backdrop').addClass('backdrop--show');
        $('.menu .js-hamburger').addClass('is-active');
      }else{
        $('.backdrop').removeClass('backdrop--show');
        $('.js-hamburger').removeClass('is-active');
      }
      
  })
  $('.backdrop').on('click', function() {
    $('.backdrop').removeClass('backdrop--show');
    $('.js-hamburger').removeClass('is-active');
    $('.menu').removeClass('menu--show');
  })

  $('.sertificats__list').owlCarousel({
    loop:true,
    autoplay: true,
    nav:true,
    padding: '50px',
    smartSpeed: 500,
    autoplaySpeed: 1000,
    lazyLoad:true,
    navText: ["<i class='icon-arrow-left2'></i>", "<i class='icon-arrow-right2'></i>"],
    responsive:{
      0:{ items:1 }
    }
  });

  

  $('.rewiews__adress-item').click(function() {
    var selectedElement = $(this).attr('data-toggle');

    $('#' + selectedElement).siblings().removeClass('active');
    $('#' + selectedElement).addClass('active');
  });


  

  // $('.discounts').on('mousemove', function(e){
  //   var dx = ($(window).innerWidth() / 2 - e.pageX) / 40;
  //   var  dy = ($(window).innerWidth() / 5 - e.pageY) /100;
  //   $('.d-top').attr("style", "transform: translate3d(" + dx + "px, " + dy + "px, 0);")
  // })
  // $('.lider').on('mousemove', function(e){
  //   var dx = ($(window).innerWidth() / 2 - e.pageX) / 40;
  //   var  dy = ($(window).innerWidth() / 5 - e.pageY) /100;
  //   $('.lider__catalog-img').attr("style", "transform: translate3d(" + dx + "px, " + dy + "px, 0);")
  // })
  // $('.quality').on('mousemove', function(e){
  //   var dx = ($(window).innerWidth() / 2 - e.pageX) / 40;
  //   var  dy = ($(window).innerWidth() / 5 + e.pageY) /100;
  //   $('.quality__decor-img').attr("style", "transform: translate3d(" + dx + "px, " + dy + "px, 0);")
  // })

  AOS.init();

  $('input[name="square-roof"]').ionRangeSlider({
    min: 25,
    max: 500,
    step: 25,
    grid: true
  });

  $('button.js-clc-next').on('click', function(e) {
      e.preventDefault();
      $(this).parents('.calculator__view').removeClass('active').next().addClass('active');
      $('html,body').animate({ scrollTop: $('#calculator').offset().top }, 'slow');
  })

    if (window.matchMedia("(min-width: 1350px)").matches) {
  const instance = basicScroll.create({
    elem: document.querySelector('.d-cmpstn__discount'),
    from: 'top-bottom',
    to: 'bottom-bottom',
    props: {
      '--d-motion-x': {
        from: '0px',
        to: '224px'
      },
      '--d-motion-z': {
        from: '0px',
        to: '-161px'
      }
    }
  })

  instance.start();
  const instance2 = basicScroll.create({
    elem: document.querySelector('.d-cmpstn__percent'),
    from: 'top-bottom',
    to: 'bottom-bottom',
    props: {
      '--p-motion-x': {
        from: '100%',
        to: '-50%'
      },
      '--p-motion-z': {
        from: '-450px',
        to: '0px'
      }
    }
  })

  instance2.start();
  const instance3 = basicScroll.create({
    elem: document.querySelector('.d-cmpstn__box-top'),
    from: 'top-bottom',
    to: 'bottom-bottom',
    props: {
      '--t-motion-x': {
        from: '43px',
        to: '0px'
      },
      '--t-motion-z': {
        from: '235px',
        to: '0px'
      }
      ,
      '--t-motion-r': {
        from: '68deg',
        to: '0deg'
      }
    }
  })
  instance3.start();
}

});









// Openlayer map init
$(function() {

var map = L.map('map').setView(new L.LatLng(48.903730, 24.716918), 17);

  L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  curLocation2 = [50.254164, 28.674370];
  curLocation1 = [50.26, 28.674370];

  var MapMarker = L.icon({
    iconUrl: '../img/marker.png',
    iconSize: [295,136],
  });

  var VelmartMarker = L.icon({
    iconUrl: '../img/velmart.png',
    iconSize: [64,64],
  });

  map.attributionControl.setPrefix(false);

  marker = new L.marker([48.903730, 24.716918], {
    icon: MapMarker
  });

  marker2 = new L.marker([48.902929, 24.714164], {
    icon: VelmartMarker
  });

  map.addLayer(marker);
  map.addLayer(marker2);

})


function calculator() {
  const ctab = $('.calculator__tab');
  const clink = $('.calculator__tab').find('.nav-link');

  clink.on('click', function(e) {
    $(this).next('input[type="radio"]').trigger('click')
  })
}

calculator();



$('.comparator__input').each(function(){
  $(this).on('mousemove touchmove click', function(){
    var sizeDiv = $(this).val(); 
  $(this).parents('.type-view__compare').find('.comparator__original').css('width',sizeDiv + '%');    
  $(this).parents('.type-view__compare').find('.comparator__cursor').css('left',sizeDiv + '%'); 
});
})
