
//引用cateModules模块
const cateModules = require('../modules/cateModules')

module.exports = {
    // 获取所有分类的数据
    getAllCateList(req, res) {
        cateModules.getAllCateList((err, data) => {
            if (err) return res.json({
                code: 400,
                msg: '数据查询失败'
            })
            // console.log(data) //data是一个数组  对象的集合
            res.json({
                code: 200,
                msg: '数据查询成功',
                data: data
            })
        })
    },
    upLoadCate(req, res) {
        let obj = req.body
        console.log(obj)
        cateModules.upLoadCate(obj, (err) => {
            if (err) return res.json({
                code: 400,
                msg: '数据编辑失败'
            })
            // console.log(data) //data是一个数组  对象的集合
            res.json({
                code: 200,
                msg: '数据编辑成功',
            })
        })
    }
}