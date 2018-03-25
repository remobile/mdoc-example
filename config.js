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
            mainPage: 'md/container.md',
            groups: [
                {
                    name: '公司风采',
                    pages: [
                        {
                            name: 'emoji',
                            path: 'md/emoji.md',
                        },
                        {
                            name: 'tabbreak',
                            path: 'md/tabbreak.md',
                        },
                        {
                            name: 'footnote',
                            path: 'md/footnote.md',
                        },
                        {
                            name: 'container',
                            path: 'md/container.md',
                        },
                        {
                            name: '数学公式',
                            path: 'md/katex.md',
                            supports: ['math'],
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
