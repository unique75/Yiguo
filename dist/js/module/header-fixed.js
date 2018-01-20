define(['jquery'], function ($) {
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 108) {
            $('#header').addClass('header_fixed');
        } else {
            $('#header').removeClass('header_fixed');
        }
    })
})
