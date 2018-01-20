define(['jquery'], function ($) {
    $('.shopping-cart').hover(function () {
        console.log(this);
        $(this).find('.shopping-list').show();
    },function () {
        $(this).find('.shopping-list').hide();
    })
})
