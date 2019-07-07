//这是评论页面的js
$(function () {

    //发送ajax请求,加载页面的评论数据
    $.ajax({
        type: 'get',
        url: '/getComments',
        dataType: 'json',
        success: function (res) {
            console.log(res)
            let htmlStr = template('commentTmp', res)
            $('tbody').html(htmlStr)
        }
    })




})