define(['jquery'], function($) {
    class FloorGuide {
        constructor() {
            this.aList = Array.from($('.floor-guide a'));
            this.floorList = Array.from($('.floor'));
        }
        init() {
            var _this = this;
            $(window).scroll(function () {

                if ($(window).scrollTop() >= ($(_this.floorList[0]).offset().top - 300)) {
                    $('.floor-guide').show();
                } else {
                    $('.floor-guide').hide();
                }
            })
            this.move_to_floor();
        }
        move_to_floor() {
            var _this = this;
            this.aList.forEach(function(item, index) {
                $(item).on('click', function() {
                    $('html').stop().animate({ //因为在一个事件函数中，所以 this指向当前点击的a标签
                        'scrollTop': $(_this.floorList).eq($(this).index()).offset().top
                    }, 500)
                    $(this).addClass('current').siblings().removeClass('current');
                })
            })
            this.window_scroll();
        }
        window_scroll() {
            var _this = this;
            $(window).scroll(function() {
                _this.floorList.forEach(function(item, index) {
                    if ($(window).scrollTop() >= ($(_this.floorList).eq(index).offset().top - 300)) {
                        $(_this.aList).eq(index).addClass('current').siblings().removeClass('current');
                    }
                })
            })

        }
    }
    return new FloorGuide();
})
