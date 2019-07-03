//这是postsModule数据模块

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

//向外暴露
module.exports = {
    getPosts(params, callback) {
        //写sql语句 
        let sql = `select
        posts.title,users.nickname,categories.name,posts.created,posts.status
        from posts
        inner join users on posts.user_id=users.id
        inner join categories on posts.category_id=categories.id
        limit ${(params.pagesize - 1) * params.pagecount},${params.pagecount}`
        //pageSize:页码数  pageCount:每页的数据条数
        conn.query(sql, (err, result) => {
            if (err) return callback(err)
            callback(null, result)
        })

    }
}
