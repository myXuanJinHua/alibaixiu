
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
    //获取所有分类的数据
    getAllCateList(callback) {
        let sql = 'select * from categories'
        conn.query(sql, (err, result) => {
            if (err) return callback(err)
            callback(null, result)  //result 是一个数组
        })
    },
    upLoadCate(obj, callback) {
        //疑问sql语句加了?不能用引号   
        // let sql = 'updata categories set ? where id = ?'
        let sql = `update categories set ? where id = ?`
        conn.query(sql, [obj, obj.id], (err) => {
            console.log(err)
            if (err) return callback(err)
            callback(null)
        })
    }
}