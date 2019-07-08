//引入express
const express = require('express')
//引入express-session插件
const session = require('express-session')
//引入body-parser模块
const bodyParser = require('body-parser')
//引入querystring模块
const querystring = require('querystring')


//引入加载静态页面的router模块
const router = require('./routers/index')

//创建express的实例对象
const app = express()

//开启服务器
app.listen(3004, () => {
    console.log('server is running at http://127.0.0.1:3004')
})

// 设置模板引擎为ejs
app.set('view engine', 'ejs')
//设置模板目录
app.set('/views', 'views')

//注册取消body-parser默认的解析
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//配置session
app.use(session({
    //对session加盐,设置只有自己知道的字符串
    secret: '加盐就是加密',
    //重新保存:默认值为true,强制保存
    resave: false,
    //强制未初始化的会话保存到存储
    saveUninitialized: false,
}))


//添加静态资源
//添加css,固定图片的静态资源
app.use('/assets', express.static('assets'))
//添加经常更新图片的资源
app.use('/uploads', express.static('uploads'))


//使用这个中间件.每次请求的是都会经过
app.use(function (req, res, next) {
    // let cookie = querystring.parse(req.headers.cookie)
    // if (cookie.islogin && cookie.islogin == 'true' || req.url == '/admin/login' || req.url.indexOf('/admin') == -1) {
    //     //next()  继续之前用户的请求操作
    //     next()
    // } else {
    //     //登录失败,需要重定向到登录页面
    //     res.redirect('/admin/login')
    // }
    if (req.session.isLogin && req.session.isLogin == 'true' || req.url == '/admin/login' || req.url.indexOf('/admin') == -1) {
        next()
    } else {
        res.redirect('/admin/login')
    }
})
// 添加路由配置
app.use(router)