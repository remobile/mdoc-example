### 这是表格示例的页面

## table1

``` table width=720 url=http://localhost:3000/api/shop/getBranchShopList listName=branchShopList  params={userId=5b4e979194fc8a28d9f9cff2} pageSize=2 hasTotalCount
title=分店名称 dataIndex=name
title=分层比例 dataIndex=profitRate width=100 render=(data={})=>`${data*100}%`
title=分店董事长 dataIndex=chairMan width=100 render=(data={})=>`${data.name}(${data.phone})`
title=所在地 dataIndex=addressRegion
title=地址 dataIndex=address
title=联系电话 dataIndex=phoneList
```

## table2
