
//引入 commentModules 模块
const commentModules = require('../modules/commentModules')


module.exports = {
    getCommentsLIst(req, res) {
        commentModules.getCommentsLIst((err, data) => {
            if (err) res.json({
                code: 400,
                msg: '查询评论数据失败'
            })
            res.json({
                code: 200,
                msg: '数据查询成功',
                data: data
            })
        })
    }
}