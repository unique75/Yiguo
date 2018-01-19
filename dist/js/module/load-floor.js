define(['jquery'], function($) {
    class LoadFloor {
        constructor() {

        }
        init(str, box, obj) {
            this.str = str
            this.$box = box;
            this.obj = obj;
            var setup = {
                url: '/json/floor.json',
                type: 'GET',
                context: this
            }
            $.ajax(setup).then(this.rendering_page);
        }
        rendering_page(res) {
            // console.log(res);
            for (var i in res[this.str]) {
                // console.log(res[this.str]);
                // console.log(this.$box);
                var str = template('floor-less', res[this.str]);
                this.$box.html(str);
            }

            this.change();
        }
        change() {
            // console.log(this);
            this.$box.find(this.obj.dom).eq(this.obj.num1).addClass(this.obj.classname).find('img').css({
                'width': this.obj.width,
                'height': this.obj.height
            });
            this.$box.find(this.obj.dom).eq(this.obj.num2).addClass(this.obj.classname).find('img').css({
                'width': this.obj.width,
                'height': this.obj.height
            });
        }
    }
    return LoadFloor;//index.js中需要多次调用这个通用函数，所以这里return不加new不加括号，
                    //相当于返回了一个构造函数，在index.js中需要调用的话就new调用，需要调用几次就new几次
})
