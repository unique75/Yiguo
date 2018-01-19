require(['../config'], function() {
    require(['jquery', 'template', 'swiper', 'search-keywords', 'goods-panel', 'load-floor', 'load-floor2', 'load-floor3', 'floor-guide'],
        function($, tem, swiper, searchKeywords, goodsPanel, loadFloor, loadFloor2, loadFloor3, floorGuide) {
            $(function() {
                (function() {
                    swiperStart();
                })()
                // search-keywords
                searchKeywords.init();
                // 全部商品分类
                goodsPanel.init('.catalogs .item');
                //轮播
                function swiperStart() {
                    var mySwiper = new Swiper('.swiper-container', {
                        // direction: 'vertical',
                        loop: true,
                        autoplay: 1500,
                        // 如果需要分页器
                        pagination: '.swiper-pagination',

                        // 如果需要前进后退按钮
                        // nextButton: '.swiper-button-next',
                        // prevButton: '.swiper-button-prev',

                        // 如果需要滚动条
                        scrollbar: '.swiper-scrollbar'
                    })
                }
                //加载楼层
                // 一楼
                new loadFloor().init('floor1', $('.first-floor'), 'floor-less', function () {
                    $('.first-floor').find('.floor-main li').eq(2).addClass('wide').find('img').css({
                        'width': 461,
                        'height': 230
                    });
                    $('.first-floor').find('.floor-main li').eq(3).addClass('wide').find('img').css({
                        'width': 461,
                        'height': 230
                    });
                });
                // 二楼
                new loadFloor().init('floor2', $('.second-floor'), 'floor-less', function () {
                    $('.second-floor').find('.floor-main li').eq(2).addClass('wide').find('img').css({
                        'width': 461,
                        'height': 230
                    });
                    $('.second-floor').find('.floor-main li').eq(3).addClass('wide').find('img').css({
                        'width': 461,
                        'height': 230
                    });
                });
                // 三楼
                new loadFloor().init('floor3', $('.third-floor'), 'floor-less', function () {
                    $('.third-floor').find('.floor-main li').eq(2).addClass('wide').find('img').css({
                        'width': 461,
                        'height': 230
                    });
                    $('.third-floor').find('.floor-main li').eq(3).addClass('wide').find('img').css({
                        'width': 461,
                        'height': 230
                    });
                });
                // 四楼
                new loadFloor().init('floor4', $('.fourth-floor'), 'floor-less', function () {
                    $('.fourth-floor').find('.floor-main li').eq(2).addClass('wide').find('img').css({
                        'width': 461,
                        'height': 230
                    });
                    $('.fourth-floor').find('.floor-main li').eq(3).addClass('wide').find('img').css({
                        'width': 461,
                        'height': 230
                    });
                });
                //五楼
                new loadFloor2().init('floor5', $('.five-floor'));
                // 六楼
                new loadFloor2().init('floor6', $('.six-floor'));
                //七楼
                new loadFloor3().init('floor7', $('.seven-floor'));
                // 八楼
                new loadFloor2().init('floor8', $('.eight-floor'));
                // 九楼
                new loadFloor3().init('floor9', $('.nine-floor'));
                // 十楼
                new loadFloor2().init('floor10', $('.ten-floor'));
                //楼梯
                floorGuide.init();
            })
        })
})
