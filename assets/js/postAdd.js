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

        // 发送ajax请求实现文件上传
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

    //做一个富文本框的效果 做好了引入后
    //初始化富文本框已作覆盖textarea
    CKEDITOR.replace('#content')

    // 给保存修改按钮添加点击事件 实现文章的新增  需要1:获取到form里的内容,包括上传文件返回来得到的路径,
    //还有富文本框的数据,这个需要把富文本框的数据与textarea的数据同步

    $('.btn-primary').on('click', function (event) {
        //阻止默认事件
        event.preventDefault()
        //同步富文本框与textarea的数据
        CKEDITOR.instances.content.updataElement()
        // console.log('富文本框的数据', $('form').serialize())

        //把页面表单的数据上传到服务器
        $.ajax({
            type: 'post',
            url: 'addPostContent',
            data: $('form').serialize(),
            dataType: 'json',
            success: function (res) {
                console.log('表单数据上传到服务器之后响应回来的数据', res)
            }
        })

    })




})