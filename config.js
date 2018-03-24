const markdownPlugins = require('./lib/markdownPlugins');

const config = {
    projectName: 'simiantong',
    title: '四面通物流大超市',
    favicon: 'img/favicon.ico',
    logo: 'img/logo.png',
    colors: {
        primaryColor: 'rgb(34, 34, 34)',
        secondaryColor: '#05A5D1',
        activeColor: '#FF4040',
        tintColor: '#005068',
    },
    highlight: {
        theme: 'solarized-dark',
    },
    markdownPlugins,
    documentPath: 'root', //默认为doc
    styles: [],
    scripts: [
        'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=TeX-MML-AM_CHTML',
        `js/raphael.js`,
        `js/flowchart.js`,
        `js/echarts.js`,
    ],
    footer: 'lib/Footer.js', //设置footer
    homePage: {
        name: '四面通',
        path: 'index.js',
        styles: ['css/custom.css'],
    },
    menus: [
        {
            name: '帮助',
            mainPage: 'help.js',
        },
        {
            name: '四面通',
            mainPage: 'gongsi/fengcai1.md',
            groups: [
                {
                    name: '公司风采',
                    pages: [
                        {
                            name: '公司风采1',
                            path: 'gongsi/fengcai1.md',
                        },
                        {
                            name: '公司风采2',
                            path: 'gongsi/fengcai2.md',
                        },
                        {
                            name: '接口',
                            path: 'api.md',
                        },
                        {
                            name: '图片',
                            path: 'tuxiang.png',
                        },
                    ]
                },
                {
                    name: '招聘信息',
                    pages: [
                        {
                            name: '最新招聘',
                            path: 'zhaopin.md',
                        },
                        {
                            name: '用户须知',
                            path: 'user.html',
                        },
                        {
                            name: '说明',
                            path: 'test.pdf',
                        },
                    ]
                },
            ],
        },
        {
            name: 'API',
            pages: [
                {
                    name: 'pdshop',
                    path: 'api/pdshop.md',
                    supports: ['toc'],
                },
                {
                    name: 'pdclient',
                    path: 'api/pdclient.md',
                    supports: ['toc'],
                },
                {
                    name: 'auto_number',
                    path: 'auto_number.html',
                    supports: ['toc'],
                },
            ],
        },
    ],
};

module.exports = config;
