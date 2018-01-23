require(['../config'], function () {
    require(['jquery', 'template', 'search-keywords', 'goods-panel', 'go-top', 'shopcart-show', 'site-nav',],
    function ($, tem, searchKeywords, goodsPanel, goTop, shopcartSHow, siteNav) {
        $(function () {
            (function () {
                // search-keywords
                searchKeywords.init();
                // 全部商品分类
                goodsPanel.init('.catalogs .item');
                $('.footer').load('./common-footer.html');
            })()
        })
    })
})
