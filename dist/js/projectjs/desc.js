require(['../config'], function () {
    require(['jquery', 'template', 'search-keywords', 'goods-panel', 'go-top', 'shopcart-show', 'site-nav', 'load-desc-details', 'jq-cookie'],
    function ($, tem, searchKeywords, goodsPanel, goTop, shopCartShow, siteNav, loadDescDetails ,jqCookie) {
        $(function () {
            (function () {
                // search-keywords
                searchKeywords.init();
                // 全部商品分类
                goodsPanel.init('.catalogs .item');
                // 加载商品详情
                loadDescDetails.init();
                //页面打开先渲染一次购物车商品列表
                shopCartShow.rendering_page();
                $('.btn-gn').click(function () {
                    shopCartShow.rendering_page();
                })
                // 加载底部
                $('.footer').load('./common-footer.html');
            })()
        })
    })
})
