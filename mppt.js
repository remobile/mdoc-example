module.exports = {
    projectName: 'mdoc-ppt',
    title: '酷炫H5',
    favicon: 'img/favicon.ico',
    logo: 'img/logo.png',
    documentPath: 'mppt',
    imagePath: 'mppt',
    transition: 'slide',
    backgroundImage: 'mppt/5d9d42c572dec.png',
    arrowColor: '#FFF',
    dist: '1.html',
    pages: [
        {
            name: '第1页',
            path: '1.md',
        }, {
            name: '第2页',
            path: '2.md',
            transition: 'zoom',
            arrowColor: 'blue',
        }, {
            name: '第3页',
            path: '3.md',
        }, {
            name: '第4页',
            path: '4.md',
        }, {
            name: '第5页',
            path: '5.md',
        },
    ],
};
