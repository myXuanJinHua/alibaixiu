//这是一个显示静态页面的路径判断

// 引入express
const express = require('express')
//引入pageControllers的模块
const pageControllers = require('../controllers/pagesControllers')
//引入postsControllers的模块
const postsControllers = require('../controllers/postsControllers')
//引入catecontrollers模块
const cateControllers = require('../controllers/catecontrollers')
//引入uploadControllers  模块
const uploadControllers = require('../controllers/uploadControllers')
//引入commentControllers 模块
const commentControllers = require('../controllers/commentControllers')
//引入用户登录controller 模块
const userLoginControllers = require('../controllers/userLoginControllers')


// 创建router的实例对象
const router = express.Router()

//向外暴露
//前台页面的判断,调用方法
module.exports = router.get('/', (req, res) => {
    pageControllers.showIndex(req, res)
})
    .get('/detail', pageControllers.showDetail)
    .get('/list', pageControllers.showList)

    //后台的页面的判断,调用了方法
    .get('/admin', pageControllers.showAdminIndex)
    .get('/admin/categories', pageControllers.showAdminCategories)
    .get('/admin/comments', pageControllers.showAdminComments)
    .get('/admin/login', pageControllers.showAdminLogin)
    .get('/admin/nav-menus', pageControllers.showAdminNavMenus)
    .get('/admin/password-reset', pageControllers.showAdminPasswordReset)
    .get('/admin/post-add', pageControllers.showAdminPostAdd)
    .get('/admin/posts', pageControllers.showAdminPosts)
    .get('/admin/profile', pageControllers.showAdminProfile)
    .get('/admin/settings', pageControllers.showAdminSttings)
    .get('/admin/slides', pageControllers.showAdminSlides)
    .get('/admin/users', pageControllers.showAdminUsers)


    //获取所有文章的数据
    .get('/admin/getposts', postsControllers.getPosts)
    //点击删除后的删除数据根据ID
    .get('/delposts', postsControllers.delpost)
    //获取所有分类的数据
    .get('/getAllCateList', cateControllers.getAllCateList)

    //上传文件数据
    .post('/uploadFile', uploadControllers.uploadFile)
    //添加新文章数据
    .post('/addPostContent', uploadControllers.addPostContent)

    //获取评论数据
    .get('/getComments', commentControllers.getCommentsLIst)
    //编辑分类数据
    .post('/upLoadCate', cateControllers.upLoadCate)


    //用户登录
    .post('/login', userLoginControllers.login)