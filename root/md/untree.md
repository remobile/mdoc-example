### 这是图片的页面


<style>.myViewClass {color: red;}</style>
<style>.myItemClass {color: blue;}</style>
<script>
function myClickTest(itemId, itemData, itemNode) {
  console.log(itemId);
  console.log(itemData);
  console.log(itemNode);
}
</script>

## untree1

``` untree width=400 viewClass=myViewClass itemClass=myItemClass click=myClickTest
公司董事会:[总经理:[
    副总经理1:[数据中心,测量中心],
    副总经理2:[技术部,办公室],
    副总经理3:[项目部,评估一部],
    技术总监:[技术部,评估二部],
]]
```

## untree2

``` untree width=400 json
[{
    text: "公司董事会",
    children: [{
        text: "总经理",
        children: [{
            text: "副总经理1",
            children: [{text: "数据中心"},{text: "测量中心"}],
        }, {
            text: "副总经理2",
            children: [{text: "财务部"},{text: "办公室"}],
        }, {
            text: "副总经理3",
            children: [{text: "项目部"},{text: "评估一部"}],
        }, {
            text: "技术总监",
            children: [{text: "技术部"},{text: "评估二部"}],
        }],
    }],
}]
```
