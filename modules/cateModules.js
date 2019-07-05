
//引入mysql
const mysql = require('mysql')

//创建连接
let conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '3952427',
    database: 'baixiu',
    dateStrings: true
})

// 打开数据库
conn.connect()

module.exports = {
    getAllCateList(callback) {
        let sql = 'select * from categories'
        conn.query(sql, (err, result) => {
            if (err) return callback(err)
            callback(null, result)
        })
    }
}