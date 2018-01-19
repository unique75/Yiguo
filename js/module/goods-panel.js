define(['jquery', 'template'], function ($, tem) {
    class GoodsPanel {
        constructor() {

        }
        init(strele) {
            this.strele = strele;
            // console.log(ele);
            var setup = {
                url: '/yiguo',
                type: 'GET',
                context: this
            }
            $.ajax(setup).then(this.rendering_page);
        }
        rendering_page(res) {
            // console.log(res);
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
