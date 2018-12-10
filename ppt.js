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
    documentPath: 'ppt', //默认为doc
    styles: [],
    scripts: [],
    pages: [
        {
            name: '第一页',
            path: '1.md',
        },
        {
            name: '第二页',
            path: '2.md',
        },

    ],
};

module.exports = config;
