
//引入formidable 第三方模块实现文件上传
const formidable = require('formidable')
const path = require('path')
//引入uploadModule模块
const uploadModules = require('../modules/uploadModules')

module.exports = {
    // 上传文件
    uploadFile(req, res) {
        // console.log(path)
        // console.log(req)
        //创建文件上传对象
        let form = new formidable.IncomingForm()
        // 设置编码
        form.encoding = 'utf-8'
        // 设置文件上传存储路径  __dirname是指当前运行此语句的js文件的绝对路径
        form.uploadDir = __dirname + '/../uploads'
        // 设置保留文件扩展名
        form.keepExtensions = true
        // console.log(567)
        // console.log(form);

        //form.parse(req,上传完成时的回调函数)
        //当实现文件上传的操作后(不管成不成功) 有三个参数 err fields:字段传递普通键值对,一个对象  files:文件上传成功后相关信息  
        form.parse(req, (err, fields, files) => {
            // console.log(789)
            // console.log(err)
            if (err) {
                res.json({
                    code: 400,
                    msg: '文件上传失败'
                })
            } else {
                //利用path.basename 截取路径最后的一部分
                let filename = path.basename(files.img.path)
                // console.log(filename)
                res.json({
                    code: 200,
                    msg: '文件上传成功',
                    img: filename
                })
            }

        })
    },
    //添加新文章
    addPostContent(req, res) {
        let obj = req.body
        obj.id = null
        obj.views = 0
        obj.likes = 0
        // console.log(req.session)
        obj.user_id = req.session.currentUser.id
        uploadModules.addPostContent(obj, (err, data) => {
            if (err) res.json({
                code: 400,
                msg: '文章添加失败'
            })
            res.json({
                code: 200,
                msg: '文章添加成功'
            })
        })
    }
}