# 易果生鲜项目介绍



-------------------

[TOC]

## nginx反向代理数据：

	location = /yiguo {
	    proxy_pass http://www.yiguo.com/Handler/InitLayOut?;
    }
    location = /yiguofloor {
        proxy_pass http://www.yiguo.com/Home/Floor?;
    }
##run项目须知：
1.注册页面需要验证的图形验证码需要输入“U987”才能通过验证，区分大小写

2.手机验证码和邀请码都是自定义的，输入“6666”才能通过验证

3.注册成功后自动跳转登录页，必须从登录页登录后，主页或者其他要显示用户名的页面才能正确显示出用户名

4.由于详情页拿不到数据，所以就自己写了点数据，目前可以看到正确的详情页的商品只有楼层一的"进口水果"中的“香蕉”和“蓝莓”两个商品
