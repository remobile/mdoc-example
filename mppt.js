const markdownPlugins = require('./lib/markdownPlugins');

const config = {
    projectName: 'mdoc-ppt',
    title: '四面通物流大超市',
    favicon: 'img/favicon.ico',
    logo: 'img/logo.png',
    colors: {
        primaryColor: 'rgb(34, 34, 34)',
        secondaryColor: '#FF8C00',
        activeColor: '#FF4040',
        tintColor: '#005068',
    },
    highlight: {
        theme: 'solarized-dark',
    },
    markdownPlugins,
    documentPath: 'mppt', //默认为doc
    styles: [],
    scripts: [],
    transition: 'slide', // none fade slide convex concave
    backgroundImage: 'ppt/background.png',
    vertical: true, // 垂直方向
    dist: '1.html', // 编译的目标文件
    pages: [
        {
            name: '第一页',
            path: '1.md',
        },
        {
            name: '第二页',
            path: '2.md',
            transition: 'zoom',
        },
        {
            name: '第三页',
            path: '3.md',
        },
        {
            name: '第四页',
            path: '4.md',
        },
        {
            name: '第五页',
            path: '5.md',
        },
    ],
};

module.exports = config;
