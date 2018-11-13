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
