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
                    for (var i = 0; i < this.getInfo.length; i++) {
                        if (this.username.val() != this.getInfo[i].username) {
                            $('#msg-wrap').find('div').addClass('msg-error').html('用户名错误');
                            return false;
                        } else {
                            $('#msg-wrap').find('div').removeClass('msg-error').html('');
                            return true;
                        }
                    }
                }
                user_pwd() {
                    for (var i = 0; i < this.getInfo.length; i++) {
                        if (this.userpwd.val() != this.getInfo[i].userpwd) {
                            $('#msg-wrap').find('div').addClass('msg-error').html('密码错误');
                            return false;
                        } else {
                            $('#msg-wrap').find('div').removeClass('msg-error').html('');
                            return true;
                        }
                    }
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
