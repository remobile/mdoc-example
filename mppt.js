module.exports = {
    projectName: 'mdoc-ppt',
    title: '酷炫H5',
    favicon: 'img/favicon.ico',
    logo: 'img/logo.png',
    documentPath: 'mppt',
    transition: 'slide',
    backgroundImage: 'https://cdnoss.zhizuoh5.com/mkfiles/pic/5d9d42c572dec.png',
    arrowColor: '#FFF',
    dist: '1.html',
    pages: [
        {
            name: '第一页',
            path: '1.md',
        }, {
            name: '第二页',
            path: '2.md',
            transition: 'zoom',
            arrowColor: 'blue',
        }, {
            name: '第三页',
            path: '3.md',
        }, {
            name: '第四页',
            path: '4.md',
        }, {
            name: '第五页',
            path: '5.md',
        },
    ],
};
