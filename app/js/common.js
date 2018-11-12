$(document).ready(function() {
  $('.js-hamburger').each(function() {
    $(this).on('click', function() {
      $(this).toggleClass('is-active')
    })
  });
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