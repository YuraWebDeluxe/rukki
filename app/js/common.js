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
      0:{ items:1 }
    }
  });

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

  $('.discounts').on('mousemove', function(e){
    var dx = ($(window).innerWidth() / 2 - e.pageX) / 40;
    var  dy = ($(window).innerWidth() / 5 - e.pageY) /100;
    $('.d-top').attr("style", "transform: translate3d(" + dx + "px, " + dy + "px, 0);")
  })
  $('.lider').on('mousemove', function(e){
    var dx = ($(window).innerWidth() / 2 - e.pageX) / 40;
    var  dy = ($(window).innerWidth() / 5 - e.pageY) /100;
    $('.lider__catalog-img').attr("style", "transform: translate3d(" + dx + "px, " + dy + "px, 0);")
  })
  $('.quality').on('mousemove', function(e){
    var dx = ($(window).innerWidth() / 2 - e.pageX) / 40;
    var  dy = ($(window).innerWidth() / 5 + e.pageY) /100;
    $('.quality__decor-img').attr("style", "transform: translate3d(" + dx + "px, " + dy + "px, 0);")
  })

  AOS.init();


});