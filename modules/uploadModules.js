// 引入创建连接
const conn = require('./mySql')

module.exports = {
    addPostContent(obj, callback) {
        let sql = 'insert into posts set ?'
        console.log('添加文章的数据', obj)
        conn.query(sql, [obj], (err) => {
            if (err) return callback(err)
            callback(null)
        })
    }
}