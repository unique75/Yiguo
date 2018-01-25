define(['jquery', 'jq-cookie'], function($, jqCookie) {
    //显示隐藏购物车商品列表
    $('.shopping-cart').hover(function() {
        $(this).find('.shopping-list').show();
    }, function() {
        $(this).find('.shopping-list').hide();
    })
    //加载购物车商品列表
    class LoadShopCart {
        constructor() {
            // this.rendering_page();//放在constructor中的函数会直接调用 不需要在其他页面上再调用 不然就是多次调用了
            // this.rendering_page在其他页面中调用了 所以不在这里调用了
        }
        rendering_page(){//渲染页面 加载购物车商品列表
            this.data = JSON.parse($.cookie('goodsList'));
            var str = '';
            for (var i = 0; i < this.data.length; i++) {
                str += `
                    <li data-id="${this.data[i].dataId}">
                        <div class="l">
                            <a href="javascript:;" target="_blank">
                                <img src="${this.data[i].img}" width="42" height="42">
                            </a>
                        </div>
                        <div class="c">
                            <a href="javascript:;">${this.data[i].goodsname}</a>
                        </div>
                        <div class="r">
                            <b>¥${this.data[i].price}</b> * ${this.data[i].num}<a href="javascript:;">删除</a>
                        </div>
                    </li>
                `;
            }
            $('.shopping-list .goods ul').html(str);
            this.show_num_price();
            this.delete_goods();
        }
        show_num_price() {//加载商品个数和价格
            var num = 0;
            var total = 0;
            for (var i = 0; i < this.data.length; i++) {
                num += Number(this.data[i].num);//总数
                $('.shopping-cart .totleNum b').html(num);
                total += Number(this.data[i].num) * Number(this.data[i].price);//总价
                $('.shopping-cart .totlePrice').html(total.toFixed(2));
            }
        }
        delete_goods() {//删除商品
            var _this = this;
            $('.goods .r a').click(function () {
                $(this).parents('li').remove();
                var id = $(this).parents('li').data('id');
                for (var i = 0; i < _this.data.length; i++) {
                    if (id == _this.data[i].dataId) {
                        _this.data.splice(i, 1);
                        $.cookie('goodsList', JSON.stringify(_this.data));
                        $('.shopping-cart .totleNum b').html(0);
                        $('.shopping-cart .totlePrice').html(0.0)
                    }
                }
            })
        }
    }
    return new LoadShopCart();
})
