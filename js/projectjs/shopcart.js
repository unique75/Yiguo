require(['../config'], function () {
    require(['jquery', 'site-nav'], function ($, siteNav) {
        $(function () {
            (function () {
                $('.footer').load('./common-footer.html');
            })()
        })
    })
})
