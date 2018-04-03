### 这是公司风采2的页面
```
使用说明：
    在文档的任何地方（一般底部定义变量名称:如*[xxx]: this is xxx），在文档中出现[xxx]就会被替换，出现xxx就会有提示，替换在先。
    注意，这种用法和超链接区分开来。
```


The 《 [HTML] 》 specification
is maintained by the 《 [W3C] 》.

```

The 《 [HTML] 》 specification
is maintained by the 《 [W3C] 》.

```

![image][cat]

| 图片 | 描述 |
| ---- | ---- |
|![baidu][baidu-logo] | 百度|
|![baidu]([baidu-logo-1]) | 百度|


|#|语法|效果|
|---|----|:---:|
|1|`[![weibo-logo]](http://weibo.com/linpiaochen)`|[![weibo-logo]](http://weibo.com/linpiaochen)|
|2|`[![](/simiantong/img/zhihu.png "我的知乎，欢迎关注")][zhihu]`|[![](/simiantong/img/zhihu.png "我的知乎，欢迎关注")][zhihu]|
|3|`[![csdn-logo]][csdn]`|[![csdn-logo]][csdn]|



*[HTML]: Hyper HTML Markup Language
*[W3C]:  World Wide Web Consortium
*[cat]:/simiantong/img/cat.png
*[specification]:这是一个提示
*[baidu-logo-1]:http://www.baidu.com/img/bdlogo.gif "百度logo"

[cat]:/simiantong/img/cat.png
[baidu-logo]:http://www.baidu.com/img/bdlogo.gif "百度logo"
[weibo-logo]:/simiantong/img/weibo.png "点击图片进入我的微博"
[csdn]:http://blog.csdn.net/guodongxiaren "我的博客"
[zhihu]:https://www.zhihu.com/people/jellywong "我的知乎，欢迎关注"
[csdn-logo]:/simiantong/img/csdn.png "我的CSDN博客"
