//这是显示静态页面的控制模块

//向外暴露
module.exports = {
    //获取前台页面并渲染
    showIndex(req, res) {
        res.render('index')
    },
    showDetail(req, res) {
        res.render('detail')
    },
    showList(req, res) {
        res.render('list')
    },
    //获取后台页面并渲染
    showAdminIndex(req, res) {
        res.render('admin/index')
    },
    showAdminCategories(req, res) {
        res.render('admin/categories')
    },
    showAdminComments(req, res) {
        res.render('admin/comments')
    },
    showAdminLogin(req, res) {
        res.render('admin/login')
    },
    showAdminNavMenus(req, res) {
        res.render('admin/nav-menus')
    },
    showAdminPasswordReset(req, res) {
        res.render('admin/password-reset')
    },
    showAdminPostAdd(req, res) {
        res.render('admin/post-add')
    },
    showAdminPosts(req, res) {
        res.render('admin/posts')
    },
    showAdminProfile(req, res) {
        res.render('admin/profile')
    },
    showAdminSttings(req, res) {
        res.render('admin/settings')
    },
    showAdminSlides(req, res) {
        res.render('admin/slides')
    },
    showAdminUsers(req, res) {
        res.render('admin/users')
    }
}