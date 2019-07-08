//这是login 登录页面的js文件
$(function () {
    //给登录添加事件  需要:收集表单的数据 发送post的ajax请求
    $('.btn-login').on('click', function () {
        // console.log('这是表单的数据', $('form').serialize())
        let email = $('[name=email]').val()
        let password = $('[name=password]').val()
        console.log('邮箱和密码是', email, password)
        $.ajax({
            type: 'post',
            url: '/login',
            beforeSend: function () {
                // console.log('发送之前')
                // 判断邮箱: abc13@163.com
                if (!/\w+[@]\w+[.]\w+/.test(email)) {
                    $('.alert-danger > span').text('邮箱格式不对,请重新输入')
                    $('.alert-danger').fadeIn(500).delay(2000).fadeOut(500)
                    return false
                }
                if (password.trim().length == 0) {
                    $('.alert-danger > span').text('输入的密码,不能为空')
                    $('.alert-danger').fadeIn(500).delay(2000).fadeOut(500)
                    return false
                }

            },
            data: $('form').serialize(),
            dataType: 'json',
            success: function (res) {
                // console.log('这是发送登录验证请求之后响应回来的数据', res)
                if (res.code == 200) {
                    location.href = '/admin'
                } else {
                    $('.alert-danger > span').text(res.msg)
                    $('.alert-danger').fadeIn(500).delay(2000).fadeOut(500)
                }
            }
        })
    })


})