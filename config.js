const markdownPlugins = require('./lib/markdownPlugins');

const config = {
    projectName: 'mdoc-example',
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
    documentPath: 'root', //默认为doc
    styles: [],
    scripts: [],
    footer: 'lib/Footer.js', //设置footer
    homePage: {
        name: 'mdoc的用法',
        path: 'index.md',
    },
    menus: [
        {
            name: '帮助',
            mainPage: 'help.js',
        },
        {
            name: '示例',
            mainPage: 'md/container.md',
            groups: [
                {
                    name: '常用',
                    pages: [
                        {
                            name: '对联',
                            path: 'common/mixed.md',
                        },
                        {
                            name: '新闻',
                            path: 'common/news.md',
                        },
                        {
                            name: '简历',
                            path: 'common/resume.md',
                            container: {
                                dom: 'div', // default: div
                                props: { className: 'resumeContainer' },
                            }
                        },
                        {
                            name: '超链接',
                            path: 'common/href.md',
                        },
                        {
                            name: '音视频',
                            path: 'common/media.md',
                        },
                        {
                            name: 'README',
                            path: 'common/README.md',
                        },
                        {
                            name: '图片',
                            path: 'common/img.md',
                        },
                        {
                            name: 'button',
                            path: 'common/button.md',
                        },
                    ]
                },
                {
                    name: '插件',
                    pages: [
                        {
                            name: 'list',
                            path: 'md/list.md',
                        },
                        {
                            name: '工具',
                            path: 'md/tools.md',
                        },
                        {
                            name: '表单',
                            path: 'md/form.md',
                            supports: ['antd'],
                        },
                        {
                            name: '表格',
                            path: 'md/table.md',
                            supports: ['antd'],
                        },
                        {
                            name: 'tabs',
                            path: 'md/tabs.md',
                            supports: ['tabs'],
                        },
                        {
                            name: 'swiper',
                            path: 'md/swiper.md',
                            supports: ['swiper'],
                        },
                        {
                            name: 'react',
                            path: 'md/react.md',
                            supports: ['react'],
                        },
                        {
                            name: '图片列表',
                            path: 'md/images.md',
                            supports: ['viewer'],
                        },
                        {
                            name: 'attrs',
                            path: 'md/attrs.md',
                        },
                        {
                            name: 'variable',
                            path: 'md/variable.md',
                        },
                        {
                            name: 'sequence',
                            path: 'md/sequence.md',
                            supports: ['sequence'],
                        },
                        {
                            name: 'chart',
                            path: 'md/chart.md',
                            supports: ['chart'],
                        },
                        {
                            name: 'flow',
                            path: 'md/flow.md',
                            supports: ['flow'],
                        },
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
                    ]
                },
            ],
        },
        {
            name: '四面通',
            mainPage: 'smt/tuxiang.png',
            groups: [
                {
                    name: '快速了解',
                    pages: [
                        {
                            name: '四面通物流组织结构',
                            path: 'smt/四面通物流组织结构.png',
                        },
                        {
                            name: '概括',
                            path: 'smt/index.js',
                            styles: ['css/custom.css'],
                        },
                    ]
                },
                {
                    name: '公司风采',
                    pages: [
                        {
                            name: '公司面貌',
                            path: 'smt/tuxiang.png',
                        },
                        {
                            name: 'api文档',
                            path: 'smt/api.md',
                        },
                    ]
                },
                {
                    name: '招聘信息',
                    pages: [
                        {
                            name: '最新招聘',
                            path: 'smt/zhaopin.md',
                        },
                        {
                            name: '用户须知',
                            path: 'smt/user.html',
                        },
                        {
                            name: '说明',
                            path: 'smt/test.pdf',
                        },
                        {
                            name: '动态React',
                            path: 'button.js',
                            supports: ['react'],
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
                    supports: ['tree'],
                },
                {
                    name: 'pdclient',
                    path: 'api/pdclient.md',
                    supports: ['tree'],
                },
            ],
        },
        {
            name: 'baidu',
            mainPage: 'https://www.baidu.com/',
            blank: true,
        },
        {
            name: 'githubs',
            pages: [
                {
                    name: 'mdoc-example',
                    path: 'https://github.com/remobile/mdoc-example',
                    blank: true,
                },
                {
                    name: 'mdoc',
                    path: 'https://github.com/remobile/mdoc',
                    blank: true,
                },
            ],
        },
    ],
};

module.exports = config;
