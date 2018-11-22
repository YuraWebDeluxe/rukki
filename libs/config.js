$(document).ready(function(){

	// Lazy images
	$('.lazy').Lazy({
        effect: "fadeIn",
        effectTime: 500,
        threshold: 0,
        delay: 6000,
        placeholder: "data:image/gif;base64,R0lGODlhEALAPQAPzl5uLr9Nrl8e7..."
    });

    

	// Scroll to top
    $(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
            $('#scroller').addClass('show');
        } else {
            $('#scroller').removeClass('show');
        }
    });
    $('#scroller').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });

    // Input mask
    $('input[name="your-phone"]').inputmask({
        "mask": "(099) 999-99-99"
    });

    // Input phone validation
    $('input[name="phone"], input[name="your-phone"], input[name="client_phone"]').on('change keyup keydown', function() {

        var myVar = $(this).val();
        var digit = ('' + myVar)[2];
        if (digit == '0') {
            $(this).val(' ');
            $(this).blur().focus();
        }
        $('input[type="submit"]').attr('disabled', 'disabled');
        var re = new RegExp("_$");
        if (!re.test(myVar)) {
            $(this).removeClass('error-phone');
            $('input[type="submit"]').removeAttr('disabled');
        } else {
            $(this).addClass('error-phone');
        }

    })
    // Disable autocomplete
    $("input").attr('autocomplete', 'off');

    

})