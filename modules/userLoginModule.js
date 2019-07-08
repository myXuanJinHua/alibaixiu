//引入创建数据库连接的模块
const conn = require('./mySql')

module.exports = {
    login(email, callback) {
        //email在数据表里是唯一键
        let sql = `select * from users where users.email ='${email}'`
        conn.query(sql, (err, result) => {
            // console.log('这是查询邮箱数据出错', err)
            if (err) return callback(err)
            // console.log(result[0])
            //result:查询返回的是一个数组  而且查询最多只能查到一条记录
            callback(null, result[0])
        })
    }
}