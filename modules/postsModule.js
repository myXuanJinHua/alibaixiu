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
    //获取所有文章的数据,顺便把分页数据一起写,再顺便把筛选数据也写了
    getPosts(params, callback) {
        //写sql语句   因为查询语句有关键字的严格要求所以要把sql语句进行隔开后面再拼接,拼接需要在后面 前面(你懂的)加上空格
        //还有因为字段那里有重复,就是
        let sql = `select
        posts.title,users.nickname,categories.name,posts.created,posts.status,posts.id
        from posts
        inner join users on posts.user_id=users.id
        inner join categories on posts.category_id=categories.id 
        where 666666666666666666666666666>666 `
        //筛选数据的sql拼接 有两个分类可选 外面传进来两个选项参数 cate:兴趣分类  statu:编辑状态
        if (params.cate) {
            sql += ` and posts.category_id=${params.cate} `
        }
        if (params.statu) {
            sql += ` and posts.status=${params.statu} `
        }
        //根据id倒排序 ,分页
        sql += ` order by posts.id desc 
        limit ${(params.pageNum - 1) * params.pageSize},${params.pageSize}`
        //pageNum:当前页码数  pageSize:每页显示的数据条数
        conn.query(sql, (err, result) => {
            if (err) return callback(err)
            sql = 'select count(*) count from posts'   //获取总记录数
            conn.query(sql, (err1, data) => {
                if (err1) return callback(err1)
                // console.log(data);  //查询data的 是一个数组
                callback(null, { result: result, totale: data[0].count })     //返回两个结果 ,以对象的形式  一个是查询到的结果result  一个是查询出的总记录数
            })
        })
    },
    //根据id来删除对应的数据
    delpost(id, callback) {
        let sql = `delete from posts where id = ` + id
        conn.query(sql, (err) => {
            if (err) return callback(err)
            callback(null)
        })
    }
}
