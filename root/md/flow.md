### 这是flow示例的页面

#### 定义元素

```
tag=>type: content:>url
```

* tag 是流程图中的标签，在第二段连接元素时会用到。名称可以任意，一般为流程的英文缩写和数字的组合。
* type 用来确定标签的类型，=>后面表示类型。由于标签的名称可以任意指定，所以要依赖type来确定标签的类型
* 标签有6种类型：start end operation subroutine condition inputoutput
* content 是流程图文本框中的描述内容，: 后面表示内容，中英文均可。特别注意，冒号与文本之间一定要有个空格
* url是一个连接，与框框中的文本相绑定，:>后面就是对应的 url 链接，点击文本时可以通过链接跳转到 url 指定页面

#### 连接流程图元素

* 使用 -> 来连接两个元素
* 对于condition类型，有yes和no两个分支，如示例中的cond(yes)和cond(no)
* 每个元素可以制定分支走向，默认向下，也可以用right指向右边，如示例中sub1(right)。



## 流程图
``` flow
start=>start: 开始
success=>end: 发送通知\n成功
error=>end: 返回错误信息
error_1=>end: 返回错误信息
c0=>condition: 该客户无需业务员
c1=>condition: 该客户正在被服务
c2=>condition: 服务员是自己
c3=>condition: 该客户被自己服务过
c4=>condition: 该客户被自己服务过
c5=>condition: 24小时内解除服务关系
op1=>operation: 恢复关系\n通话记录
op2=>operation: 添加关系
op3=>operation: 添加预备关系
start->c0(yes)->error
c0(no)->c1(yes)->c2(yes)->error_1
c2(no)->c3(no)->op3->error_1
c3(yes)->error_1
c1(no)->c4(yes)->c5(yes)->error_1
c4(no)->op2->success
c5(no)->op1->success
```

## 图1

``` flow
st=>start: Start:>http://www.google.com[blank]
e=>end:>http://www.google.com
op1=>operation: My Operation
op2=>operation: 'Stuff'|current
sub1=>subroutine: My Subroutine
cond=>condition: Yes or No? :>http://www.google.com
c2=>condition: Good idea|rejected
io=>inputoutput: catch something...|request
st->op1(right)->cond
cond(yes, right)->c2
cond(no)->sub1(left)->op1
c2(true)->io->e
c2(false)->op2->e
```

## 图2

``` flow
st=>start: Start:>http://www.google.com[blank]
e=>end:>http://www.google.com
op1=>operation: My Operation
op2=>operation: 'Stuff'|current
sub1=>subroutine: My Subroutine
cond=>condition: Yes or No? :>http://www.google.com
c2=>condition: Good idea|rejected
io=>inputoutput: catch something...|request
st->op1(right)->cond
cond(yes, right)->c2
cond(no)->sub1(left)->op1
c2(true)->io->e
c2(false)->op2->e
```
