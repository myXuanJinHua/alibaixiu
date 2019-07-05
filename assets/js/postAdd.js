$(function () {
    //发送请求获取所有的分类数据  渲染页面
    $.ajax({
        url: '/getAllCateList',
        dataType: 'json',
        success: function (res) {  //发送成功后将响应回来的数据渲染到页面上
            let htmlStr = ``
            res.data.forEach(function (item) {
                htmlStr += `<option value="${item.id}">${item.name}</option>`
            })
            $('#category').html(htmlStr)
        }
    })




})