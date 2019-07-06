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

    //实现文件上传 给file的按钮添加change事件 
    $('#feature').on('change', function () {
        //需要获取当前被选择文件对象  文件上传只能通过原生选取 jquery没有封装
        let myfile = document.querySelector('#feature').files[0]
        //files 是可以被获取当前所有被选择文件对象,是一个数组,里面每一个值都是当前被选择的一个一个文件对象
        // console.log(myfile)

        //创建formdata实例对象  可以用formdata 来传值,值就是上传的文件
        const formadata = new FormData()

        //追加参数
        formadata.append('img', myfile)

        // 发送ajax请求
        $.ajax({
            type: 'post',
            url: '/uploadFile',
            data: formadata,
            dataType: 'json',
            processData: false,
            contentType: false,
            success: function (res) {   //把文件上传服务器后,后台会把文件名以储存文件的路径形式响应回来
                if (res.code == 200) {
                    //把响应回来的文件名存到input 隐藏域内
                    $('[name=feature]').val(res.img)
                    //实现预览
                    $('#thumbnail').attr('src', '/uploads' + res.img).show()
                }
            }
        })
    })


})