$(function () {

    //发送ajax  获取分类表的数据
    function init() {
        $.ajax({
            type: 'get',
            url: '/getAllCateList',
            dataType: 'json',
            success: function (res) {
                // console.log('获取所有分类的数据', res)
                //将获取到的数据渲染到页面上
                $('tbody').html(template('cateTmp', res))
            }
        })
    }
    init()
    // 给右边表单编辑按钮事件委托
    $('tbody').on('click', '.btnedit', function () {
        $('#name').val($(this).data().name)
        $('#slug').val($(this).data().slug)
        $('[name="id"]').val($(this).data().id)
        $('button.addbtn').hide()
        $('button.editbtn').show()
    })
    // 给左边编辑按钮添加点击就送事件
    $('button.editbtn').on('click', function (event) {
        event.preventDefault()
        console.log($('form').serialize())
        $.ajax({
            type: 'post',
            url: '/upLoadCate',
            data: $('form').serialize(),
            success: function (res) {
                if (res.code == 200) {
                    console.log('成功编辑保存好')
                    init()
                }
            }
        })
    })


})