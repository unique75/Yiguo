define(['jquery'], function($) {
    class LoadDescDetails {
        constructor() {
            var url = location.href;
            this.id = url.split('?')[1].split('=')[1];
        }
        init() {
            var setup = {
                url: '/json/desc.json',
                type: 'GET',
                context: this
            }
            $.ajax(setup).then(this.rendering_page);
        }
        rendering_page(res) {
            for (var i in res) {
                if (this.id == res[i].goods_id) {
                    $('#crumbs_a2').html(res[i].region); //左上角商品分类
                    $('#crumbs_a3').html(res[i].name); //左上角商品名称
                    $('#crumbs_a4').html(res[i].specifications); //左上角商品规格
                    $('.pro-price').find('strong').html(res[i].price); //价格主显区
                    $('.summary-name h1').html(res[i].specifications);
                    $('.summary-name p').html(res[i].describe);
                    $('.btn-gn').attr('data-id', res[i].goods_id);
                    //加载商品详情规格价格
                    var price = '';
                    for (var j in res[i].details) {
                        price += `
                            <li class="">
                                <a href="javascript:;">
                                    <span>￥<strong>${res[i].details[j].price}</strong></span>
                                    <span class="span2">${res[i].details[j].spec}</span>
                                    <i></i>
                                </a>
                            </li>
                        `;
                    }
                    var str = `
                        <div class="dt">规格：</div>
                        <div class="dd">
                            <ul>
                                ${price}
                            </ul>
                        </div>
                    `;
                    //加载左侧商品图片
                    var picBig = '';
                    var picSmall = '';
                    for (var j in res[i].pic) {
                        picBig += `<img class="j_product_img" width="500" height="500" src="${res[i].pic[j].big}">`;
                        picSmall += `<li class=""><img width="85" height="85" src="${res[i].pic[j].small}"></li>`
                    }
                    $('.pic-big').html(picBig);
                    $('.picList ul').html(picSmall);
                }
            }
            $('.summary-other .choose').html(str);
            var liList = Array.from($('.choose li')); //获取所有的li转成数组
            for (var i = 0; i < liList.length; i++) { //遍历数组
                if ($('.pro-price strong').html() == $(liList[i]).find('strong').html()) { //如果价格等于当前循环的值
                    $(liList[i]).addClass('selected') //添加样式
                    break; //找到后干完了该干的事，就跳出循环，不继续往后循环了节约性能
                }
            }
            $('.choose li').click(function() {
                //当前点击的li添加类名
                $(this).addClass('selected').siblings().removeClass('selected');
                //让主要显示的价格与现在点击的那块价格一致
                $('.pro-price strong').html($(this).find('strong').html());
            })
            this.tab_switch();
            this.add_shopcart();
        }
        tab_switch() {
            //左侧显示图片切换
            $('.picList li').on('mouseenter', function() {
                $('.pic-big img').eq($(this).index()).show().siblings().hide();
            })
        }
        add_shopcart() {
            //商品数量增加
            $('button.increase').click(function() {
                var num = $('#p_number').val();
                num++;
                $('#p_number').val(num);
                // console.log('加');
            })
            //商品数量减少
            $('button.decrease').click(function() {
                var num = $('#p_number').val();
                num--;
                $('#p_number').val(num);
                if (num <= 1) {
                    $('#p_number').val(1)
                }
                // console.log('减');
            })
            $('.btn-gn').click(function() {
                var goodsList = '';
                var goodsDetails = {
                    "dataId": $('.btn-gn').attr("data-id"),
                    "img": $(".pic-big img:first").attr("src"),
                    "goodsname": $(".summary-name h1").html(),
                    "price": $(".pro-price .small-price").html(),
                    "num": $("#p_number").val(),
                    "spec": $(".selected .span2").html()
                }
                var data = $.cookie('goodsList');
                if (data) { //如果cookie中存在商品数据再进入
                    goodsList = JSON.parse(data); //把字符串转成对象
                    var index = -1;
                    for (var i in goodsList) { //遍历这个数组
                        if (goodsDetails.dataId == goodsList[i].dataId) { //如果要存的商品名已经存在
                            index = i;
                            break;
                            // var num = Number(goodsList[i].num); //就把已经存在的数据中的商品个数取出来 并且加上要增加的个数
                            // num += Number($('#p_number').val());
                            // goodsList[i].num = num; //更新完后的商品个数信息覆盖旧的数据
                        }
                        // else {
                        //     goodsList.push(goodsDetails);//如果要存的商品信息不存在，就追加
                        // }
                    }
                    if (index < 0) {
                        goodsList.push(goodsDetails); //如果要存的商品信息不存在，就追加
                    } else {
                        var num = Number(goodsList[index].num); //就把已经存在的数据中的商品个数取出来 并且加上要增加的个数
                        num += Number($('#p_number').val());
                        goodsList[index].num = num; //更新完后的商品个数信息覆盖旧的数据
                    }
                } else {
                    goodsList = [goodsDetails]; //如果cookie中不存在商品详情，一条都没有的话，就存入第一条
                }
                $.cookie('goodsList', JSON.stringify(goodsList)); //把数组转成字符串存入cookie中
                // console.log(JSON.parse($.cookie('goodsList')));
            })
        }
    }
    return new LoadDescDetails();
})
