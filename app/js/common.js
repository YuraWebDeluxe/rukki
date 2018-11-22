$(document).ready(function() {
  $(window).load(function() {
    var $preloader = $('#page-preloader'),
    $spinner   = $preloader.find('img');   
  });
  // Menu 
  $('.js-hamburger').on('click', function() {
    $(this).toggleClass('is-active');
    $('.menu').toggleClass('menu--show');
    if ($('.menu').hasClass('menu--show')) {
      $('.backdrop').addClass('backdrop--show');
      $('.menu .js-hamburger').addClass('is-active');
    } else {
      $('.backdrop').removeClass('backdrop--show');
      $('.js-hamburger').removeClass('is-active');
    }
  })
  $('.backdrop').on('click', function() {
    $('.backdrop').removeClass('backdrop--show');
    $('.js-hamburger').removeClass('is-active');
    $('.menu').removeClass('menu--show');
  })

  // End Menu

  // Smooth scroll
  $('.smooth-scroll a').click(function() {
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
  // End Smooth scroll

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
    responsive: [{
        breakpoint: 992,
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
    responsive: [{
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 414,
        settings: {
          slidesToShow: 2,
        }
      },
    ]
  });
  $('.sertificats__list').owlCarousel({
    loop: true,
    autoplay: true,
    nav: true,
    padding: '50px',
    smartSpeed: 500,
    autoplaySpeed: 1000,
    lazyLoad: true,
    navText: ["<i class='icon-arrow-left2'></i>", "<i class='icon-arrow-right2'></i>"],
    responsive: {
      0: {
        items: 1
      }
    }
  });

  $('.calculator').find('input[name="your-name"]').on('change keyup', function() {
    $('.calc-hide').find('input[name="your-name"]').val($(this).val());
  })
  $('.calculator').find('input[name="your-phone"]').on('change keyup', function() {
    $('.calc-hide').find('input[name="your-phone"]').val($(this).val());
  })
  $('.calculator').find('input[name="square-roof"]').on('change keyup', function() {
    $('.calc-hide').find('input[name="roof-square"]').val($(this).val());
  })
  $('.calculator').find('input[name="type-rukki"]').on('change', function() {
    $('.calc-hide').find('input[name="ruukki-type"]').val($(this).val());
  })
  $('.calculator').find('input[name="type-roof"]').on('change', function() {
    $('.calc-hide').find('input[name="roof-type"]').val($(this).val());
  })
  $('.calculator').find('input[name="color-type"]').on('change', function() {
    $('.calc-hide').find('input[name="type-color"]').val($(this).val());
  })
  $('.calculator').find('input[type="submit"]').on('click', function(e) {
    e.preventDefault();
    $('.calc-hide').find('input[type="submit"]').trigger('click');
  })

  $('.wpcf7').on('wpcf7mailsent', function(event) {
    $('.calculator').find('input[name="your-name"]').val('');
    $('.calculator').find('input[name="your-phone"]').val('');
    $('.calculator__view').removeClass('active').first().addClass('active');
    $('#mdlSuccess').modal('show');
    $('#orderModal').modal('hide');
    $('#orderDownloadInstruction').modal('hide');
    $('#orderDownloadCatalog').modal('hide');
    $('.input-wrap').find('label').removeClass('active');
    $('#callModal').modal('hide');
    setTimeout(function() {
      $('#mdlSuccess').modal('hide');
    }, 4000)
  });
  $('.wpcf7').on('wpcf7submit', function(event) {
    $(this).find('input[type="submit"]').prop("disabled", true);
    setTimeout(function(){
      $(this).find('input[type="submit"]').prop("disabled", false);
    }, 10000)
  });
  

  var vindowHeight = document.body.scrollHeight;
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#scroller').addClass('fixed-arrows__top--active');
      $('.list-phones').removeClass('fixed-arrows__top--active')
    } else {
      $('#scroller').removeClass('fixed-arrows__top--active');
    }
    if ($(this).scrollTop() > (vindowHeight - 1500)) {
      $('.fixed-arrows__call').addClass('fixed-arrows__top--top');
      $('#scroller').addClass('fixed-arrows__top--top');
    } else {
      $('.fixed-arrows__call').removeClass('fixed-arrows__top--top');
      $('#scroller').removeClass('fixed-arrows__top--top');
    }
  });

  $('#scroller').click(function() {
    $('body,html').animate({
      scrollTop: 0
    }, 1000);
    return false;
  });

  AOS.init();

  $('input[name="square-roof"]').ionRangeSlider({
    min: 15,
    max: 500,
    step: 25,
    grid: true
  });

  $('button.js-clc-next').on('click', function(e) {
    e.preventDefault();
    $(this).parents('.calculator__view').removeClass('active').next().addClass('active');
    $('html,body').animate({
      scrollTop: $('#calculator').offset().top
    }, 'slow');
  })

  function calculator() {
    const ctab = $('.calculator__tab');
    const clink = $('.calculator__tab').find('.nav-link');
    clink.on('click', function(e) {
      $(this).next('input[type="radio"]').trigger('click')
    })
  }
  calculator();

  $('.comparator__input').each(function() {
    $(this).on('mousemove touchmove click', function() {
      var sizeDiv = $(this).val();
      $(this).parents('.type-view__compare').find('.comparator__original').css('width', sizeDiv + '%');
      $(this).parents('.type-view__compare').find('.comparator__cursor').css('left', sizeDiv + '%');
    });
  })

  // select roof
  $('.choose-style__item').click(function() {
    var roof = $(this).attr('data-roof');
    console.log(roof);
    $('#changeRoof').removeClass().addClass(roof + ' choose-style__img');
  });

  $('.rewiews__adress-item').on('click',function() {
    var selectedElement = $(this).attr('data-toggle');
    $('.rewiews__adress-item').removeClass('rewiews__adress-active');
    $(this).addClass('rewiews__adress-active');
    $('#' + selectedElement).siblings().removeClass('active');
    $('#' + selectedElement).addClass('active');
  });
  $('input[type="text"]').on('focus change keyup keydown', function() {
    if ($(this).val() !== "") {
      $(this).closest('.input-wrap').find('label').addClass('active');
      $(this).siblings('label').addClass('active');
    } else {
      $(this).siblings('label').removeClass('active');
      $(this).closest('.input-wrap').find('label').removeClass('active');
    }
  });
  $('input[type="text"]').on('focus', function() {
    $(this).closest('.input-wrap').find('label').addClass('active');
    $(this).siblings('label').addClass('active');
  });
  $('input[type="text"]').on('blur', function() {
    if ($(this).val().length > 0) {
      $(this).closest('.input-wrap').find('label').addClass('active');
      $(this).siblings('label').addClass('active');
    } else {
      $(this).closest('.input-wrap').find('label').removeClass('active');
      $(this).siblings('label').removeClass('active');
    }
  });

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
        },
        '--t-motion-r': {
          from: '68deg',
          to: '0deg'
        }
      }
    })
    instance3.start();
  }
  $('#wpcf7-f94-o7').on('wpcf7mailsent', function() {
    window.open('/wp-content/themes/rukki/instruction.pdf', '_blank');
  });

  $('#wpcf7-f95-o8').on('wpcf7mailsent', function() {
    window.open('/wp-content/themes/rukki/zaporuka.pdf', '_blank');
  });
})
// Openlayer map init
$(function() {
  var map = L.map('map').setView(new L.LatLng(48.904504, 24.714419), 17);

  L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  curLocation2 = [50.254164, 28.674370];
  curLocation1 = [50.26, 28.674370];

  var MapMarker = L.icon({
    iconUrl: '/wp-content/themes/rukki/assets/img/marker.png',
    iconSize: [295, 136],
  });

  var VelmartMarker = L.icon({
    iconUrl: '/wp-content/themes/rukki/assets/img/velmart.png',
    iconSize: [64, 64],
  });

  map.attributionControl.setPrefix(false);

  marker = new L.marker([48.904504, 24.714419], {
    icon: MapMarker
  });

  marker2 = new L.marker([48.902929, 24.714164], {
    icon: VelmartMarker
  });

  map.addLayer(marker);
  map.addLayer(marker2);

})