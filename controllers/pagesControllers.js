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
    }
}