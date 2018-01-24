require(['../config'], function () {
    require(['jquery', 'template', 'search-keywords', 'goods-panel', 'go-top', 'shopcart-show', 'site-nav', 'load-desc-details'],
    function ($, tem, searchKeywords, goodsPanel, goTop, shopcartSHow, siteNav, loadDescDetails) {
        $(function () {
            (function () {
                // search-keywords
                searchKeywords.init();
                // 全部商品分类
                goodsPanel.init('.catalogs .item');
                // 加载商品详情
                loadDescDetails.init();
                // 加载底部
                $('.footer').load('./common-footer.html');
            })()
        })
    })
})
