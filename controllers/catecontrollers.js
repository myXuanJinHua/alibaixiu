
//引用cateModules模块
const cateModules = require('../modules/cateModules')

module.exports = {
    getAllCateList(req, res) {
        cateModules.getAllCateList((err, data) => {
            if (err) return res.json({
                code: 400,
                msg: '数据查询失败'
            })
            res.json({
                code: 200,
                msg: '数据查询成功',
                data: data
            })
        })
    }
}