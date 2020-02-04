
$(document).ready(function(){   
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1000) {
            $('#up').fadeIn();
        } else {
            $('#up').fadeOut();
        }
    });
    $('#up').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});
