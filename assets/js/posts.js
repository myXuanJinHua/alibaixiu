$(function () {    //入口函数
    // 定义全局变量 当前页码数 pageSize 设定默认值初始值
    let pageNum = 1

    //定义全局变量 当前每页显示记录数pageSize
    let pageSize = 1

    //调用初始化页面  只需要加载一次
    init({});

    //使用自调用函数来实现分类数据的加载
    (function () {
        $.ajax({
            typr: 'get',
            url: '/getAllCateList',
            datatype: 'json',
            success: function (res) {
                // console.log('打印分类数据', res)
                //生成分类数据的动态结构
                let htmlStr = `<option value="all">所有分类</option>`
                res.data.forEach(function (item) {
                    htmlStr += `<option value="${item.id}">${item.name}</option>`
                })
                $('.cateSelector').html(htmlStr)
            }
        })
    })();

    //给筛选按钮添加事件
    $('.btn-search').on('click', function (event) {
        //阻止默认事件
        event.preventDefault()
        // 定义一个对象,以存用户数据
        let query = {}
        //当用户选择指定的筛选条件
        if ($('.cateSelector').val() != 'all') {
            query.cate = $('.cateSelector').val()
        }
        //2个选择
        if ($('.statuSelector').val() != 'all') {
            query.statu = $('.statuSelector').val()
        }
        //重新刷新页面
        init(query)
    })

    //封装页面初始化,加载完页面原始的全部数据
    function init(query) {
        $.ajax({
            type: 'get',
            url: '/admin/getposts',
            data: {
                pageNum: pageNum,
                pageSize: pageSize,
                // 展开运算符,可以将对象的具体属性进行展开,为一组一组的键值对
                ...query
            },
            datatype: 'json',
            success: function (res) {
                // console.log(res)  //获取响应数据
                // console.log(res.data)
                let htmlStr = template('postListTmp', res.data)
                //生成所有数据表格结构
                $('tbody').html(htmlStr)
                //调用函数 生成分页结构
                setPage(Math.ceil(res.data.total / pageSize))
            }
        })

    }


    //实现分页效果 ul的类.pagination  使用bootstr-paginator的插件
    function setPage(sum) {
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
                init()
            }
        })
    }

    // 给删除按钮事件委托
    $('tbody').on('click', '.btn-danger', function () {
        // console.log($(this).data('id'))
        // 获取id
        let id = $(this).data('id');
        $.ajax({
            type: 'get',
            url: '/delposts',
            data: {
                id: id
            },
            datatype: 'json',
            success: function (res) {
                console.log(res.code)
                if (res.code == 200) {
                    console.log('成功删除页面')
                    //重新刷新页面
                    init()
                }
            }
        })
    })



})