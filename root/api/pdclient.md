[TOC] number tree 400

# pdclient接口文档

## 基础api

---

### 登录
- `login`
- 请求方式：`POST`

| 参数名称 | 参数类型  | 描述 |
| :- |:-:| :-:|
| phone | String | 登录手机号码 |
| password | String | 登录密码 |

```js
{
    "success": true,
    "context": {
        "userId": "10000"
    }
}
```

---

### 注册
- `register`
- 请求方式：`POST`

| 参数名称 | 参数类型  | 描述 |
| :- |:-:| :-:|
| phone | String | 登录手机号码 |
| email | String | 找回密码的邮箱 |
| password | String | 登录密码 |


```js
{
    "success": true
}
```

---

### 发送验证码
- `requestSendVerifyCode`
- 请求方式：`POST`

| 参数名称 | 参数类型  | 描述 |
| :- |:-:| :-:|
| phone | String | 登录手机号码 |

```js
{
    "success": true
}
```

---

## 协议文档

---

### 用户协议
- `user`
- url: `protocals/user.html`

---

### 获取软件许可协议
- `software`
- url: `protocals/software.html`

---

### 关于
- `about`
- url: `protocals/about.html`
