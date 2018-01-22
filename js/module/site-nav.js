define(['jquery', 'jq-cookie'], function ($, jqCookie) {
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
    //判断是否有用户名和密码，有就显示
    if (document.cookie != '') {
        $('#_register,#_login').css({
            display: 'none'
        })
        $('#_loginname').css({
            display: 'block'
        }).find('a').html($.cookie('userName'))

        $('#_logout').css({
            display: 'block'
        }).find('a')
    } else {
        $('#_register,#_login').css({
            display: 'block'
        })
    }
})
