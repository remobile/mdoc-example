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
``` table tabs width=720 url=http://localhost:3000/api/shop/getInfoRecords  params={userId=5b4e979194fc8a28d9f9cff2} pageSize=2 hasTotalCount
--- shopmember 总部员工
title=姓名 dataIndex=name
title=年龄 dataIndex=age
title=性别 dataIndex=sex
title=应聘岗位 dataIndex=post
title=联系电话 dataIndex=phone
title=邮箱 dataIndex=email
title=留言 dataIndex=remark
--- shipper 物流公司抢驻
title=公司名 dataIndex=company
title=主运营线路 dataIndex=roadmap
title=联系人 dataIndex=name
title=联系人手机号 dataIndex=phone
title=联系人微信 dataIndex=weixin
title=座机号 dataIndex=sitePhone
title=邮箱 dataIndex=email
title=留言 dataIndex=remark
--- receivepartment 收货部
title=联系人 dataIndex=name width=250
title=联系人手机号 dataIndex=sitePhone width=250
title=团队人数 dataIndex=teamNumbers width=250
title=邮箱 dataIndex=email width=250
title=留言 dataIndex=remark
--- carrypartment 搬运部
title=联系人 dataIndex=name
title=联系人手机号 dataIndex=phone
title=团队人数 dataIndex=teamNumbers
title=是否自备叉车 dataIndex=hasForklift render=(data)=>data?'是':'否'
title=邮箱 dataIndex=email
title=留言 dataIndex=remark
--- shop 分店加盟
title=公司名 dataIndex=company
title=联系人 dataIndex=name
title=联系人手机号 dataIndex=phone
title=联系人微信 dataIndex=weixin
title=座机号 dataIndex=sitePhone
title=拟合作城市 dataIndex=coCity
title=拟投资金(万元) dataIndex=investAmount
title=是否自带场地 dataIndex=hasYard render=(data)=>data?'是':'否'
title=场地面积(亩) dataIndex=yardArea
title=现场图片 dataIndex=yardImage
title=邮箱 dataIndex=email
title=留言 dataIndex=remark
--- agent 小型收货点加盟
title=联系人姓名 dataIndex=name width=150
title=联系人手机号 dataIndex=phone width=150
title=联系人微信 dataIndex=weixin width=150
title=座机号 dataIndex=sitePhone width=150
title=拟投入资金(万元) dataIndex=investAmount width=150
title=拟加盟城市 dataIndex=coCity width=150
title=详细地址 dataIndex=address width=150
title=是否有门面 dataIndex=hasYard render=(data,record)=>data?'是':'否' width=150
title=门面面积(平方米) dataIndex=yardArea width=100
title=门面图片 dataIndex=yardImage width=200
title=邮箱 dataIndex=email width=250
title=留言 dataIndex=remark
--- media 新闻媒体预约
title=媒体名称 dataIndex=media
title=记者姓名 dataIndex=name
title=联系人手机 dataIndex=phone
title=联系人微信 dataIndex=weixin
title=座机 dataIndex=sitePhone
title=邮箱 dataIndex=email
title=留言 dataIndex=remark
--- landcargo 我要落货
title=电话 dataIndex=phone
```
