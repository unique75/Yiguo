define(['jquery', 'jq-cookie'], function ($, jqCookie) {
    //鼠标移入或离开进行添加或删除current类名，进行三角符的旋转操作
    $('.mobile').hover(function () {
        $(this).addClass('current');
    },function () {
        $(this).removeClass('current');
    })
    //鼠标移入或离开进行添加或删除current类名，进行三角符的旋转操作
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
        }).on('click', function () {
            console.log(1);
            $.cookie('userName', '');
            $('#_loginname,#_logout').css({
                display: 'none'
            })
            $('#_register,#_login').css({
                display: 'block'
            })
        })
    } else {
        $('#_register,#_login').css({
            display: 'block'
        })
    }
})
