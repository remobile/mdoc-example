const RemarkablePlugins = require('./lib/RemarkablePlugins');

const config = {
    title: '四面通物流大超市',
    tagline: '这是一个非常奇妙的网站',
    projectName: 'simiantong',
    headerIcon: 'img/docusaurus.svg',
    favicon: 'img/favicon.png',
    colors: {
        primaryColor: 'rgb(34, 34, 34)',
        secondaryColor: '#05A5D1',
        tintColor: '#005068',
        backgroundColor: '#f5fcff',
        activeColor: '#FF4040',
    },
    highlight: {
        theme: 'solarized-dark',
    },
    markdownPlugins: RemarkablePlugins,
    styles: [],
    scripts: [
        'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=TeX-MML-AM_CHTML',
        `js/raphael.js`,
        `js/flowchart.js`,
        `js/echarts.js`,
    ],
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
