require(['../config'], function() {
    require(['jquery', 'site-nav', 'jq-cookie'], function($, siteNav, jqCookie) {
        $(function() {
            (function() {
                $('.footer').load('./common-footer.html');
            })()
            class ShopCart {
                constructor() {
                    this.rendering_page();
                }
                rendering_page() {
                    var data = JSON.parse($.cookie('goodsList'));
                    // console.log(data);
                    var str = '';
                    for (var i in data) {
                        str += `
                            <table class="cart-table" data-id="${data[i].dataId}">
                                <tbody>
                                    <tr>
                                        <td class="cart-t-check"><input type="checkbox" checked="checked"></td>
                                        <td class="cart-t-img"><a href="javascript:;"><img src="${data[i].img}"></a></td>
                                        <td class="cart-t-info"><a href="javascript:;">${data[i].goodsname}</a></td>
                                        <td class="cart-t-ub" style="width:75px;"></td>
                                        <td class="cart-t-price">￥<span class="unit-price">${data[i].price}</span></td>
                                            <td class="cart-t-num">
                                                <div class="quantity-form">
                                                    <a href="javascript:;" class="decrement"></a>
                                                    <input type="text" class="itxt" oldnum="1" value="${data[i].num}">
                                                    <a href="javascript:;" class="increment"></a>
                                                </div>
                                            </td>
                                        <td class="cart-t-total">￥<span class="total">${(data[i].price * data[i].num).toFixed(2)}</span></td>
                                        <td class="cart-t-spec">${data[i].spec}</td>
                                        <td class="cart-t-opera">
                                            <a href="javascript:;">移入收藏</a>
                                            <br>
                                            <a href="javascript:;" class="a-delete">删除</a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        `
                    }
                    $('.cart-list').html(str);
                    this.calculating_total();
                    this.delete_goods();
                }
                calculating_total() { //计算总价
                    //减少商品
                    $('.decrement').click(function () {
                        var num = parseInt($(this).next().val());
                        var newNum = --num;
                        if(newNum >= 1) {
                            $(this).next().val(newNum);
                            var newMoney = parseFloat($(this).parents('.cart-t-num').prev().find('.unit-price').html()) * newNum;
                            $(this).parents('.cart-t-num').next().find('.total').html(newMoney.toFixed(2));
                        }
                    })
                    //增加商品
                    $('.increment').click(function () {
                        var num = parseInt($(this).prev().val());
                        var newNum = ++num;
                        $(this).prev().val(newNum);
                        var newMoney = parseFloat($(this).parents('.cart-t-num').prev().find('.unit-price').html()) * newNum;
                        $(this).parents('.cart-t-num').next().find('.total').html(newMoney.toFixed(2));
                    })
                    this.checked_change();
                    this.is_checked();
                }
                checked_change() {//复选框发生改变时要做的事
                    var _this = this;
                    $('.cart-table td.cart-t-check').change(function () {//商品选择
                        _this.is_checked();
                    })

                    $(".chkAll").change(function() {//全选按钮
        				if($(".cart-table")) {
                            $('.cart-table td.cart-t-check input').prop('checked', $(this).prop('checked'));
        					$(".chkAll").prop("checked", $(this).prop("checked"));
        					_this.is_checked();
        				}
        			})

                }
                is_checked() {//是否选中
                    var index = 0;
    				var allMoney = 0;
    				$(".cart-table td.cart-t-check input").each(function() {
    					if($(this).prop("checked") == true) {
    						var money = $(this).parent().siblings(".cart-t-total").find('.total').html();
    						allMoney += parseFloat(money);
    						index ++;
    					}
    				})
    				$(".fs14 span").html(allMoney.toFixed(2));
    				if(index == $(".cart-table td.cart-t-check input").length) {
                        $(".chkAll").prop("checked", true);
    				} else {
                        $(".chkAll").prop("checked", false);
    				}
                }
                delete_goods() {//删除商品
                    var _this = this;
                    $('.a-delete').click(function () {
                        var id = $(this).parents('.cart-table').data('id');
                        $(this).parents('.cart-table').remove();
                        _this.delete_fn(id);
                    })
                    $(".del-choose").click(function() {
        				if($(".cart-table")) {
        					$(".cart-table td.cart-t-check input").each(function() {
        						if($(this).prop("checked") == true) {
        							var id = $(this).parents(".cart-table").data("id");
        							$(this).parents(".cart-table").remove();
        							_this.delete_fn(id);
        						}
        					})
        				}
        			})
                }
                delete_fn(id) {
                    var goodsList = JSON.parse($.cookie('goodsList'));
                    for (var i = 0; i < goodsList.length; i++) {
                        if (id == goodsList[i].dataId) {
                            goodsList.splice(i, 1);
                            $.cookie('goodsList', JSON.stringify(goodsList));
                        }
                    }
                }
            }
            return new ShopCart();
        })
    })
})
