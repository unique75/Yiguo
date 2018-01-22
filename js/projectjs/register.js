require(['../config'], function() {
    require(['jquery'], function($) {
        $(function() {
            $('.footer').load('./common-footer.html');
            class Register {
                constructor() {
                    //验证手机号
                    this.testNum = /^(13|15|17|18)\d{9}$/;
                    //验证密码
                    this.testPwd = /^\w{6,20}$/;
                    //密码
                    this.regPwd = $('#Phone_Password');
                    //确认密码
                    this.regConfirmPwd = $('#Phone_ConfimPassword');
                    this.init();
                }
                init() {
                    var _this = this;
                    //因为是失去焦点事件，所以把失去焦点事件写在这里，后续要执行的事件处理函数写在失去焦点事件中
                    //验证码验证
                    $('#verficode_tab1').blur(function() {
                        _this.verification_code();
                    })
                    //手机号验证
                    $('#Phone_Mobile').blur(function() {
                        _this.verification_num();
                    })
                    //短信验证码验证
                    $('#Phone_VerifyCode').blur(function() {
                        _this.verification_sendcode();
                    })
                    //密码验证
                    $('#Phone_Password').blur(function() {
                        _this.verification_pwd();
                    })
                    //确认密码验证
                    $('#Phone_ConfimPassword').blur(function() {
                        _this.verification_confirm_pwd();
                    })
                    //邀请码验证
                    $('#Phone_AtCode').blur(function() {
                        _this.verification_atcode();
                    })
                    //是否同意协议验证
                    $('#tab1chk').change(function() {
                        _this.verification_agree();
                    })
                    //判断以上是否都通过验证的函数
                    this.register_pass();
                }
                verification_code() {
                    //验证码验证
                    if ($('#verficode_tab1').val() != $('#imgcode').attr('src').slice(-8, -4)) {
                        $('#pImgCode').find('span').eq(1).addClass('pass-tip').html('<i></i>验证码错误').show();
                        return false;
                    } else {
                        $('#pImgCode').find('span').eq(1).removeClass('pass-tip').html('<i></i>').hide();
                        $('#pImgCode').find('span').eq(1).addClass('pass-succ').show();
                        return true;
                    }
                }
                verification_num() {
                    //验证手机号
                    if (!this.testNum.test($('#Phone_Mobile').val())) {
                        $('#pPhoneNum').find('span').eq(1).addClass('pass-tip').html('<i></i>手机号格式错误').show();
                        return false;
                    } else {
                        $('#pPhoneNum').find('span').eq(1).removeClass('pass-tip').html('<i></i>').hide();
                        $('#pPhoneNum').find('span').eq(1).addClass('pass-succ').show();
                        return true;
                    }
                }
                verification_sendcode() {
                    //手机验证码验证
                    if ($('#Phone_VerifyCode').val() != "6666") {
                        $('#pPhoneSendCode').find('span').eq(1).addClass('pass-tip').html('<i></i>手机验证码错误').show();
                        return false;
                    } else {
                        $('#pPhoneSendCode').find('span').eq(1).removeClass('pass-tip').html('<i></i>').hide();
                        $('#pPhoneSendCode').find('span').eq(1).addClass('pass-succ').show();
                        return true;
                    }
                }
                verification_pwd() {
                    //验证密码
                    if (!this.testPwd.test(this.regPwd.val())) {
                        $('#pPwd').find('span').eq(1).addClass('pass-tip').html('<i></i>密码格式错误').show();
                        return false;
                    } else {
                        $('#pPwd').find('span').eq(1).removeClass('pass-tip').html('<i></i>').hide();
                        $('#pPwd').find('span').eq(1).addClass('pass-succ').show();
                        return true;
                    }
                }
                verification_confirm_pwd() {
                    //验证两次密码是否一致
                    if (this.regPwd.val() != this.regConfirmPwd.val()) {
                        $('#pConfirmPwd').find('span').eq(1).addClass('pass-tip').html('<i></i>两次密码不一致').show();
                        return false;
                    } else if (this.regConfirmPwd.val() == '') {
                        $('#pConfirmPwd').find('span').eq(1).addClass('pass-tip').html('<i></i>密码不能为空').show();
                        return false;
                    } else {
                        $('#pConfirmPwd').find('span').eq(1).removeClass('pass-tip').html('<i></i>').hide();
                        $('#pConfirmPwd').find('span').eq(1).addClass('pass-succ').show();
                        return true;
                    }
                }
                verification_atcode() {
                    //邀请码验证
                    if ($('#Phone_AtCode').val() != "6666") {
                        $('#pInvitationCode').find('span').eq(1).addClass('pass-tip').html('<i></i>邀请码错误').show();
                        return false;
                    } else {
                        $('#pInvitationCode').find('span').eq(1).removeClass('pass-tip').html('<i></i>').hide();
                        $('#pInvitationCode').find('span').eq(1).addClass('pass-succ').show();
                        return true;
                    }
                }
                verification_agree() {
                    //是否同意协议验证
                    if ($('#tab1chk').is(':checked')) {
                        $('#PhoneReg').css({
                            'backgroundColor': '#008842'
                        })
                        $('#pAgree').find('label span').addClass('pass-error').html('');
                        return true;
                    } else {
                        $('#PhoneReg').css({
                            'backgroundColor': 'grey'
                        })
                        $('#pAgree').find('label span').addClass('pass-error').html('<i></i>请接受服务协议');
                        return false;
                    }
                }
                register_pass() {
                    var _this = this;
                    $('#PhoneReg').click(function() {
                        console.log('ok');
                        //判断验证全部通过才跳转登录页面，并且把用户名和密码存入localstorage中
                        //这一步想通过必须要把上面的验证全都通过才能跳转，也就是所有的验证都必须通过(blur或者change事件)执行并通过
                        //因为写了return，所以函数执行后就有函数的返回值，全部为true才可以
                        if (
                            _this.verification_code() &&
                            _this.verification_num() &&
                            _this.verification_sendcode() &&
                            _this.verification_pwd() &&
                            _this.verification_confirm_pwd() &&
                            _this.verification_atcode() &&
                            _this.verification_agree()
                        ) {
                            location.href = './login.html';
                            var user = [{
                                'username': $('#Phone_Mobile').val(),
                                'userpwd': $('#Phone_Password').val()
                            }]
                            localStorage.setItem('userInfo', JSON.stringify(user));
                        }
                    })
                }
            }
            return new Register();
        })
    })
})
