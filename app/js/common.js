$(document).ready(function() {
  $('.js-hamburger').each(function() {
    $(this).on('click', function() {
      $(this).toggleClass('is-active')
    })
  });
});