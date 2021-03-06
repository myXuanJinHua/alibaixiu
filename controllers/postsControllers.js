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
    },
    delpost(req, res) {    //删除数据
        // console.log("posts控制器")
        let { id } = req.query
        // console.log(id)
        postsModule.delpost(id, (err) => {
            if (err) return res.json({
                code: 400,
                msg: '删除数据失败'
            })
            res.json({
                code: 200,
                msg: '数据删除成功'
            })
        })
    }
}