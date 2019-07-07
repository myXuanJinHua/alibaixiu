
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
    getCommentsLIst(callback) {
        let sql = `select
            comments.author,comments.content,comments.created,comments.status,comments.id,posts.title
            from comments
            inner join posts on comments.post_id=posts.id `
        conn.query(sql, (err, result) => {
            if (err) return callback(err)
            callback(null, result)
        })
    }
}