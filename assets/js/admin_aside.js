//侧面菜单项的合理的展开和合并
//通过添加修改菜单栏的属性 class 来实现菜单项的展开和合并
//1.当我点击ul 3个中的一个的选项时,需要ul一直保持这写展开的属性,点击其他的选项时就合并,把属性还原
//2.需要获取到点击的选中选项 因为选型时a标签 可以通过点击时的路径来选中选项

//写入口函数
$(function () {
    //首先要拿到获取选项地址
    let href = location.href   //href是字符串
    // console.log(typeof href)  
    let num = href.indexOf('?')
    //创建选中选项(跟ID一样的)
    let routername
    if (num == -1) {
        routername = href.slice(href.lastIndexOf('/') + 1)
    } else {
        routername = href.slice(href.lastIndexOf('/') + 1, num)
    }
    // console.log(routername)

    //当选中文章ul里的3个选项,添加修改样式,展开菜单
    if (routername == 'posts' || routername == 'post-add' || routername == 'categories') {
        $('#menu-posts').addClass('in').attr('aria-expanded', true)
    }

    //设置的
    if (routername == 'nav-menus' || routername == 'slides' || routername == 'settings') {
        $('#menu-settings').addClass('in').attr('aria-expanded', true)
    }

    //做选中高亮的效果
    //通过active的类来设置  使用
    $('li').removeClass('active')   //$('li') 可以选中所有的li 妙啊妙
    $('#' + routername).addClass('active')    //字符串加上变量也是字符串
})