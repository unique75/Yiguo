define(['jquery'], function ($) {
    $('.goTop').click(function () {
        $('html,body').animate({
            'scrollTop': 0
        },500)
    })
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 108) {
            $('.goTop').css({
                'display': 'block'
            })
        } else {
            $('.goTop').css({
                display: 'none'
            })
        }
    })
})
