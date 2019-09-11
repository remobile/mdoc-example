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
    sideNavCollapsible: true, // 侧边栏是否可以折叠
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
            name: '文件夹展示1', // 如果没有该值，则为文件夹的名称 (expand 为 true 时无效)
            folder: 'dir/menu', // 指定的路径
            static: false, // 是否为static里面的文件
            expand: false, // 如果为true,则该文件夹中的子文件夹在顶部展示为各个 menuItem，此时 name 无效，否则，以 name 为 menuItem，子文件夹为 group
            // origin: 'https://raw.githubusercontent.com/blogoo/photo/master/', // 原始文件的链接
        },
        {
            name: '文件夹展示2',
            groups: [
                {
                    name: '文件夹展示实例1', // 如果没有该值，则为文件夹的名称 (expand 为 true 时无效)
                    folder: 'dir/group', // 指定的路径
                    static: false, // 是否为static里面的文件
                    expand: false, // 如果为true,则该文件夹中的子文件夹在顶部展示为各个 group，此时 name 无效，否则，以 name 为 group，子文件夹为 group 的内容
                    // origin: 'https://raw.githubusercontent.com/blogoo/photo/master/', // 原始文件的链接
                },
                {
                    name: '文件夹展示实例2',
                    pages: [
                        {
                            name: 'fragment',
                            path: 'md/fragment.md',
                        },
                        {
                            name: '文件夹展示实例3', // 如果没有该值，则为文件夹的名称 (expand 为 true 时无效)
                            folder: 'dir/page', // 指定的路径
                            static: false, // 是否为static里面的文件
                            expand: true, // 如果为true,则该文件夹中的子文件夹在顶部展示为各个 page，此时 name 无效，否则，以 name 为 page，子文件夹为 page 的内容
                            // origin: 'https://raw.githubusercontent.com/blogoo/photo/master/', // 原始文件的链接
                        },
                        {
                            name: 'fragment',
                            path: 'md/fragment.md',
                        },
                    ]
                },
            ]
        },
        {
            name: '示例',
            mainPage: 'md/container.md',
            groups: [
                {
                    name: '常用',
                    pages: [
                        {
                            name: 'toc',
                            path: 'common/toc.md',
                            tocList: ['h2', 'h3'], // 可选的值有: ['h2', 'h3'], true（true默认为['h2', 'h3']）
                        },
                        {
                            name: 'fragment',
                            path: 'md/fragment.md',
                        },
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
