//这是后台页面控制模块

//引入postsModule模块
const postsModule = require('../modules/postsModule')

//向外暴露
module.exports = {
    getPosts(req, res) {
        //接收数据
        let obj = req.query
        postsModule.getPosts(obj, (err, result) => {
            if (err) res.json({
                "code": 404,
                "msg": "数据查询失败"
            })
            res.json({
                "code": 200,
                "msg": "成功查询数据",
                "data": result
            })
        })
    }
}