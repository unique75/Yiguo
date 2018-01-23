define(['jquery', 'template'], function ($, tem) {
    class GoodsPanel {
        constructor() {

        }
        init(strele) {
            this.strele = strele;
            //判断url地址中有没有index字符，匹配不到会返回-1，也就代表不是主页，不是主页就让goodspanel为隐藏，鼠标移入再显示
            var state = location.href.search(/index/);
            if(state != -1){
                $(".catalogs-list").show();
            } else {
                $(".catalogs-list").hide();
                $(".catalogs-title").on('mouseenter', function () {
                    $(".catalogs-list").show();
                })
            }
            $(".catalogs").on('mouseleave', function () {
                if(state == -1){
                    $(".catalogs-list").hide();
                }
            })
            this.ajax_fn();
        }
        ajax_fn() {
            var setup = {
                url: '/yiguo',
                type: 'GET',
                context: this
            }
            $.ajax(setup).then(this.rendering_page);
        }
        rendering_page(res) {
            for (var i in res) {
                var str = template('goodspanel',res.Catrgories)
                $('.catalogs-list').html(str);
            }
            this.show_item();
        }
        show_item() {
            $(this.strele).on('mouseenter', function () {
                // console.log(this);//this指的是事件对象 鼠标移入的那个div
                $(this).addClass('current').find('.sub-item').show();
                $(this).find('s').css({
                    'display':'block'
                })
                $(this).siblings().removeClass('current').find('.sub-item').hide();
            })
            $(this.strele).on('mouseleave', function () {
                // console.log(this);//this指的是事件对象 鼠标移入的那个div
                $(this).removeClass('current').find('.sub-item').hide();
                $(this).find('s').css({
                    'display':'none'
                })
            })
        }
    }
    return new GoodsPanel();
})
