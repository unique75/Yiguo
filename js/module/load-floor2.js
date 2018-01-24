define(['jquery'], function($) {
    class LoadFloor2 {
        constructor() {

        }
        init(str, box) {
            this.str = str
            this.$box = box;
            var setup = {
                url: '/json/floor.json',
                type: 'GET',
                context: this
            }
            $.ajax(setup).then(this.rendering_page);
        }
        rendering_page(res) {
            // console.log(res);
            var data = res[this.str];
            var keyWords = '';
            for(var i in data.keywords){
                keyWords += `<a href="javascript:;" target="_blank" class="">${data.keywords[i]}</a>`
            }
            var strCol2 = '';
            for (var i in data.floor_main.col2) {
                strCol2 += `<li class="narrow"><a href="javascript:;" target="_blank"><img src="${data.floor_main.col2[i]}" width="220" height="191"></a></li>`;
            }
            var strLogoList = '';
            for (var i in data.floor_main.logo_list) {
                strLogoList += `<a href="javascript:;" target="_blank"><img src="${data.floor_main.logo_list[i]}" height="52"></a>`;
            }
            var str = `
                <div class="floor-title">
                    <h2><a href="javascript:;" target="_blank"><i>${data.floor_id}</i>${data.floortit}</a></h2>
                    <span class="keyword">
                        ${keyWords}
                    </span>
                </div>
                <div class="floor-con floor-layout3">
                    <div class="floor-side"><a href="javascript:;" target="_blank"> <img src="${data.floor_slide}" width="275" height="463"></a></div>
                    <div class="floor-main">
                        <div class="col1"><a href="javascript:;" target="_blank"><img src="${data.floor_main.col1}" width="234" height="383"></a></div>
                        <div class="col2">
                            <ul>
                                ${strCol2}
                            </ul>
                        </div>
                        <div class="col3"><a href="javascript:;" target="_blank"><img src="${data.floor_main.col3}" width="246" height="461"></a></div>
                        <div class="logo-list clearfix">
                            ${strLogoList}
                        </div>
                    </div>
                </div>
            `;
            this.$box.html(str);
        }
    }
    return LoadFloor2; //index.js中需要多次调用这个通用函数，所以这里return不加new不加括号，
    //相当于返回了一个构造函数，在index.js中需要调用的话就new调用，需要调用几次就new几次
})
