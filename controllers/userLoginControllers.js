// 这是用户登录的控制器模块

// 引入用户登录的数据库模块
const userLoginModule = require('../modules/userLoginModule')

module.exports = {
    login(req, res) {
        let obj = req.body
        // console.log('接收到前台发送过来的数据', obj)
        //数据库不区分大小写,而且不能给出精准的用户输入的提示
        //解决方案是 接收到数据库查询到的数据 之后进行判断
        userLoginModule.login(obj.email, (err, data) => {
            if (err) res.json({  //查询出错
                code: 400,
                msg: "服务器异常"
            })
            if (data) {   //有查询到结果
                if (data.password == obj.password) {
                    // //以coolie的方式
                    // //当登录成功时,设置cookie到响应头
                    // res.writeHead(200, {
                    //     'Set-Cookie': 'islogin=true'
                    // })
                    //以session方式来实现状态保存,这里写入session数据
                    req.session.isLogin = 'true'
                    //将当前用户对象存储到session
                    req.session.currentUser = data
                    res.end(JSON.stringify({
                        code: 200,
                        msg: '登陆成功'
                    }))
                } else {
                    res.json({
                        code: 400,
                        msg: '密码输入错误'
                    })
                }
            } else {  //没有查询到结果 是空的
                res.json({
                    code: 400,
                    msg: '邮箱输入错误'
                })
            }
        })
    }
}