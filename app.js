//引入express
const express = require('express')
//引入body-parser模块
const bodyParser = require('body-parser')

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
//添加静态资源
//添加css,固定图片的静态资源
app.use('/assets', express.static('assets'))
//添加经常更新图片的资源
app.use('/uploads', express.static('uploads'))
// 添加路由配置
app.use(router)