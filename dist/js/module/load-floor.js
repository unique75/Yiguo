define(['jquery'], function($) {
    class LoadFloor {
        constructor() {

        }
        init(str, box, temId, callback) {
            this.str = str
            this.$box = box;
            this.temId = temId;
            this.callback = callback;
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
                var str = template(this.temId, res[this.str]);
                this.$box.html(str);
            }
            this.callback();
        }
    }
    return LoadFloor; //index.js中需要多次调用这个通用函数，所以这里return不加new不加括号，
    //相当于返回了一个构造函数，在index.js中需要调用的话就new调用，需要调用几次就new几次
})
