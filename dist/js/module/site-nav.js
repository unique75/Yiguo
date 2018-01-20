define(['jquery'], function ($) {
    $('.mobile').hover(function () {
        $(this).addClass('current');
    },function () {
        $(this).removeClass('current');
    })
    $('.myyiguo').hover(function () {
        $(this).addClass('current');
    },function () {
        $(this).removeClass('current');
    })
})
