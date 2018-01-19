require(['../config'], function() {
    require(['jquery', 'template', 'swiper', 'search-keywords', 'goods-panel', 'load-floor'],
        function($, tem, swiper, searchKeywords, goodsPanel, loadFloor) {
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
                new loadFloor().init('floor1', $('.first-floor'), {
                    dom: '.floor-main li',
                    num1: 2,
                    num2: 3,
                    classname: 'wide',
                    width: 461,
                    height: 230
                });
                new loadFloor().init('floor2', $('.second-floor'), {
                    dom: '.floor-main li',
                    num1: 2,
                    num2: 3,
                    classname: 'wide',
                    width: 461,
                    height: 230
                });
                new loadFloor().init('floor3', $('.third-floor'), {
                    dom: '.floor-main li',
                    num1: 2,
                    num2: 3,
                    classname: 'wide',
                    width: 461,
                    height: 230
                });
                new loadFloor().init('floor4', $('.fourth-floor'), {
                    dom: '.floor-main li',
                    num1: 2,
                    num2: 3,
                    classname: 'wide',
                    width: 461,
                    height: 230
                });
            })
        })
})
