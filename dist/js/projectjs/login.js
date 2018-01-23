require(['../config'], function() {
    require(['jquery', 'jq-cookie'], function($, jqCookie) {
        $(function() {
            $('.footer').load('./common-footer.html');
            class Login {
                constructor() {
                    this.username = $('#UserName');
                    this.userpwd = $('#Pwd');
                    this.verifyCode = $('#VerifyCode');
                    this.getInfo = JSON.parse(localStorage.getItem('userInfo'));
                    console.log(this.getInfo);
                    this.init();
                }
                init() {
                    var _this = this;
                    this.username.blur(function() {
                        _this.user_name();
                    })
                    this.userpwd.blur(function() {
                        _this.user_pwd();
                    })
                    this.verifyCode.blur(function() {
                        _this.verification_code();
                    })
                    this.login_pass();
                }
                user_name() {
                    var flag = ''
                    for (var i = 0; i < this.getInfo.length; i++) {
                        console.log(this.getInfo[i].username);
                        if (this.username.val() != this.getInfo[i].username) {
                            $('#msg-wrap').find('div').addClass('msg-error').html('用户名错误');
                            flag = false; //这里不能用return false;第一次循环进来碰到return就直接返回了，后续的循环也不会执行
                                        //所以如果这里用了return 就只能取到localstorage存的数组中的第一条数据，就不对了
                        } else {
                            $('#msg-wrap').find('div').removeClass('msg-error').html('');
                            flag = true;
                            break;//当 当前的循环判断输入框的内容和存储的数据的某一条相等时，break，不再执行后边的循环
                                //进而执行下面的代码，也就到了return返回值的时候了
                        }
                    }
                    return flag;
                }
                user_pwd() {
                    var flag = '';
                    for (var i = 0; i < this.getInfo.length; i++) {
                        if (this.userpwd.val() != this.getInfo[i].userpwd) {
                            $('#msg-wrap').find('div').addClass('msg-error').html('密码错误');
                            flag = false;
                        } else {
                            $('#msg-wrap').find('div').removeClass('msg-error').html('');
                            flag = true;
                            break;
                        }
                    }
                    return flag;
                }
                verification_code() {
                    //验证码验证
                    if (this.verifyCode.val() != $('#imgcode').attr('src').slice(-8, -4)) {
                        $('#msg-wrap').find('div').addClass('msg-error').html('验证码错误');
                        return false;
                    } else {
                        $('#msg-wrap').find('div').removeClass('msg-error').html('');
                        return true;
                    }
                }
                login_pass() {
                    var _this = this;
                    $('#btnLogin').click(function() {
                        if (
                            _this.user_name() &&
                            _this.user_pwd() &&
                            _this.verification_code()
                        ) {
                            location.href = './index.html';
                            $.cookie('userName', _this.username.val());
                        }
                    })
                }
            }
            return new Login();
        })
    })
})
