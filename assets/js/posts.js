$.ajax({
    type: 'get',
    url: '/admin/getposts',
    data: {
        pagesize: 1,
        pagecount: 3
    },
    datatype: 'json',
    success: function (res) {
        console.log(res)
        console.log(res.data)
        let htmlStr = template('postListTmp', res)
        $('tbody').html(htmlStr)
    }

})