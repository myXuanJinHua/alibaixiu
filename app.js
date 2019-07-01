//引入express
const express = require('express')
// 引入fs
const fs = require('fs')

//创建express的实例对象
const app = express()

//开启服务器
app.listen(3004, () => {
    console.log('server is running at http://127.0.0.1:3004')
})

//添加静态资源
//添加css,固定图片的静态资源
app.use('/assets', express.static('assets'))
//添加经常更新图片的资源
app.use('/uploads', express.static('uploads'))

//实现首页的显示
app.get('/', (req, res) => {
    fs.readFile((__dirname + '/views/index.html'), (err, data) => {
        if (err) return res.end('404')
        res.end(data)
    })
})
