$(function () {
    //发送ajax  获取分类表的数据
    $.ajax({
        type: 'get',
        url: '/getAllCateList',
        dataType: 'json'
    })



})