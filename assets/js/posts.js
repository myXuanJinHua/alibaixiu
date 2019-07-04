$(function () {    //入口函数
    // 定义全局变量 当前页码数 pageSize 设定默认值初始值
    let pageNum = 1

    //定义全局变量 当前每页显示记录数pageSize
    let pageSize = 1


    //调用初始化页面  只需要加载一次
    init(pageNum, pageSize)

    //封装页面初始化,加载完页面原始的全部数据
    function init(pageNum, pageSize) {
        $.ajax({
            type: 'get',
            url: '/admin/getposts',
            data: {
                pageNum: pageNum,
                pageSize: pageSize
            },
            datatype: 'json',
            success: function (res) {
                console.log(res)  //获取响应数据
                // console.log(res.data)
                let htmlStr = template('postListTmp', res.data)
                //生成所有数据表格结构
                $('tbody').html(htmlStr)
                //调用函数 生成分页结构
                setPage(pageSize, (Math.ceil(res.data.totale / pageSize)))
            }
        })

    }


    //实现分页效果 ul的类.pagination  使用bootstr-paginator的插件
    function setPage(pageSize, sum) {
        // console.log(pageSize, sum);
        $('.pagination').bootstrapPaginator({
            //设置版本号 在bootstrap那里的版本
            bootstrapMajorVersion: 3,
            //设置当前页码的样式   为当前第几页添加对应的样式
            currentPage: pageNum,
            //总页数  
            totalPages: sum,  //sum是总页面数
            //点击页码按钮  执行该函数  我们要调用ajax渲染页面
            onPageClicked: function (event, originalEvent, type, page) {
                // console.log(123)
                // console.log(page)  //这个page就是插件获取到当前的页码值,   
                //只要把全局的当前页码重新赋值  就可以是根据最新的页码值刷新当前页面数据
                // console.log(pageSize, sum)
                pageNum = page
                //根据最新的页码值刷新当前页面数据
                init(pageNum, pageSize)
            }
        })
    }

    // 给删除按钮事件委托
    // $('tbody').on('click', '.btn-danger', function () {
    //     // console.log($(this).data('id'))
    //     $.ajax({
    //         type: 'get',
    //         url: '/delpost',
    //         data: {
    //             id: $(this).data('id'),
    //             category_id: $(this).data('category_id'),
    //             user_id: $(this).data('user_id')
    //         },
    //         datatype: 'json',
    //         success: function (res) {
    //             console.log(res.code)
    //             if (res.code == 0) {
    //                 render()
    //             }
    //         }
    //     })
    // })
})