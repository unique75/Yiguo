define(['jquery', 'template'], function ($, tem) {
    class LoadKeywords {
        constructor() {

        }
        init() {
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

                var str = template('searkeywords', res.KeyWords);
                $('.search-keywords').html(str);
            }
            this.search_input();
        }
        search_input() {
            $('#keyword').on('focus', function () {
                if (this.value == '输入商品名／编号／拼音') {
                    this.value = '';
                    $(this).css({
                        'color': '#000'
                    })
                }
                $(this).css({
                    'background': '#fff'
                })
            })

            $('#keyword').on('blur', function () {
                if (this.value == '') {
                    this.value = '输入商品名／编号／拼音'
                    $(this).css({
                        'color': '#999'
                    })
                }
                $(this).css({
                    'background': 'none'
                })
            })
        }
    }
    return new LoadKeywords();
})
