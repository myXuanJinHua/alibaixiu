//这是一个显示静态页面的路径判断

// 引入express
const express = require('express')
//引入pageControllers的模块
const pageControllers = require('../controllers/pagesControllers')

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






