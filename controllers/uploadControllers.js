
//引入formidable 第三方模块实现文件上传
const formidable = require('formidable')
const path = require('path')


module.exports = {
    uploadFile(req, res) {
        console.log(path)
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
                console.log(filename)
                res.json({
                    code: 200,
                    msg: '文件上传成功',
                    img: filename
                })
            }

        })
    }
}