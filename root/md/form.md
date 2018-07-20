### 这是表单示例的页面

## form1

``` form width=800 url=http://localhost:3000/api/client/register
label=手机号码 key=phone type=text rules=telephone maxLength=11
label=验证码 key=verifyCode type=text rules=verifyCode maxLength=6
label=密码 key=password type=text rules=password->rePassword maxLength=20
label=确认密码 key=rePassword type=text rules=password<-password maxLength=20 placeholder=两次输入密码保持一致
```
