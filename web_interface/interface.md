# 博学谷接口文档

## 文档说明

#### 响应格式

```JSON
{ code: 200, msg: 'OK', result: {} || [] || "", time: 1495357806453 }
```

| 字段名 | 必填 | 类型  | 说明  |
|:------|:----|:-----|:----|
| code   | number      |是         | 状态码 |
| msg    | string         |是         | 状态信息 |
| result  | mixed         |否         | 响应结果 |
| time    | timestamp |是         | 时间戳 |

#### 状态码

> 有些接口偶尔会返回404，这并非是接口不存在，通常是因为少传参数或者传错参数了

| 状态码 | 状态信息             | 说明 |
|:------|:--------------|:----|
| 200   | OK            | 成功 |
| 401   | Unauthorized  | 未授权 |
| 403   | Forbidden       | 没有权限 |
| 500   | Servers Error   | 服务器内部错误 |

## 权限管理

### 接口涵盖数据预览
| 字段名 | 类型  | 说明  |
|:------|:-----|:-----|
| tc_name | string | 用户名称 |
| tc_pass | string | 用户密码 |

### 登录

> 使用讲师名称和密码登录(如果讲师状态被禁用无法登录)，用于登陆页面。

##### 地址

- http://api.botue.com/v6/login

##### 请求

* 请求方式 POST
* 数据格式 FormData
* 请求参数

| 字段名 | 必填 | 类型  | 说明  |
|:------|:----|:-----|:----|
| tc_name | 是 |string | 用户名称 |
| tc_pass | 是 |string | 用户密码 |

##### 响应

* 数据格式 JSON
* 数据示例

```json
{
  "code": 200,
  "msg": "登录成功!",
  "result": {
    "tc_name": "前端学院",
    "tc_avatar": "http://static.botue.com/images/avatar/58613845e749c.jpg"
  },
  "time": 1482213239
}
```

### 退出登录

##### 地址

- http://api.botue.com/v6/logout

##### 请求

* 请求方式 POST
* 请求参数 无

##### 响应
> 注意：这个接口返回的code数据格式是字符串！！！

* 数据格式 JSON
* 数据示例

```json
{
  "code": "200",
  "msg": "退出成功",
  "time": 1482385456
}
```

## 讲师管理

### 接口涵盖数据预览
| 字段名 | 类型  | 说明  |
|:------|:-----|:-----|
| tc_id | number | 讲师id |
| tc_name | string | 讲师名称 |
| tc_pass | string | 讲师密码 |
| tc_type | number | 讲师类型： 0 管理员 1 普通 |
| tc_gender | number | 讲师性别： 0 男 1 女 |
| tc_status | number | 状态： 0 启用 1 注销 |
| tc_roster | string | 昵称 |
| tc_avatar | string | 头像地址 |
| tc_birthday | string | 生日： yyyy-mm-dd |
| tc_join_date | string | 入职时间： yyyy-mm-dd |
| tc_hometown | string | 家乡  |
| tc_cellphone | number | 手机号码 |
| tc_email | string | 邮箱地址 |
| tc_introduce | string | 自我介绍 |

### 讲师列表

> 获取所有讲师的基本信息(管理员除外)，需要管理员权限。用于讲师列表页。

##### 地址

- http://api.botue.com/v6/teacher

##### 请求

* 请求方式 GET
* 请求参数 无

##### 响应

* 数据格式 JSON
* 数据示例

```json
{
  "code": 200,
  "msg": "OK",
  "result": [
    {
      "tc_id": 2,
      "tc_name": "李清照",
      "tc_roster": "易安居士",
      "tc_gender": 1,
      "tc_cellphone": "18500409233",
      "tc_email": "linan@itcast.cn",
      "tc_status": 0,
      "tc_birthday": "1991-03-01",
      "tc_join_date": "2015-09-30"
    },
    {
      "tc_id": 9,
      "tc_name": "令狐冲",
      "tc_roster": "攻城狮",
      "tc_gender": 1,
      "tc_cellphone": "",
      "tc_email": "",
      "tc_status": 0,
      "tc_birthday": "1970-01-01",
      "tc_join_date": "1970-01-01"
    },
    {
      "tc_id": 16,
      "tc_name": "风清杨",
      "tc_roster": "无剑级",
      "tc_gender": 0,
      "tc_cellphone": "",
      "tc_email": "",
      "tc_status": 0,
      "tc_birthday": "1970-01-01",
      "tc_join_date": "1970-01-01"
    },
  ]
}
```

### 添加讲师

> 添加讲师或管理员，需要管理员权限。用于讲师添加页。

##### 地址

- http://api.botue.com/v6/teacher/add

##### 请求

* 请求方式 POST
* 支持格式 FormData
* 请求参数

| 字段名 | 必填 | 类型  | 说明  |
|:------|:----|:-----|:----|
| tc_name | 是  | string | 讲师名称 |
| tc_pass | 是  | string | 讲师密码 |
| tc_join_date | 是  | string | 入职时间 yyyy-mm-dd |
| tc_type | 是  | number | 讲师类型 0 管理员 1 普通 |
| tc_gender | 是  | number | 讲师性别 0 男 1 女 |

##### 响应

* 数据格式 JSON
* 数据示例

```json
{
  "code": 200,
  "msg": "OK",
  "time": 1482385456
}
```

### 编辑讲师

> 获取某讲师的基本信息，需要管理员权限。用于讲师编辑页。

##### 地址

- http://api.botue.com/v6/teacher/edit

##### 请求

* 请求方式 GET
* 支持格式 queryString
* 请求参数

| 字段名 | 必填 | 类型  | 说明  |
|:------|:----|:-----|:----|
| tc_id | 是  | number | 讲师id |

#### 响应

* 数据格式 JSON
* 数据示例

```json
{
  "code": 200,
  "msg": "OK",
  "result": {
    "tc_id": 2,
    "tc_name": "李清照",
    "tc_join_date": "2015-09-30",
    "tc_type": 1,
    "tc_gender": 1
  },
  "time": 1482470649
}
```

### 修改讲师

> 修改某讲师的基本信息，需要管理员权限。用于讲师编辑页。

##### 地址

- http://api.botue.com/v6/teacher/update

##### 请求

* 请求方式 POST
* 支持格式 FormData
* 请求参数

| 字段名 | 必填 | 类型  | 说明  |
|:------|:----|:-----|:----|
| tc_id | 是  | number | 讲师id |
| tc_name | 是  | string | 讲师姓名 |
| tc_join_date | 是  | string | 入职日期 |
| tc_type | 是  | number | 讲师类型 0 管理员 1 普通 |
| tc_gender | 是  | number | 讲师性别 0 男 1 女 |

##### 响应

* 数据格式 JSON
* 数据示例

```json
{
  "code": 200,
  "msg": "OK",
  "time": 1482385456
}
```

### 查看讲师

> 查看某讲师的详细信息，需要管理员权限。用于讲师列表页。

##### 地址

- http://api.botue.com/v6/teacher/view

##### 请求

* 请求方式 GET
* 支持格式 queryString
* 请求参数

| 字段名 | 必填 | 类型  | 说明  |
|:------|:----|:-----|:----|
| tc_id | 是  | number | 讲师id |

##### 响应

* 数据格式 JSON
* 数据示例

```json
{
  "code": 200,
  "msg": "OK",
  "result": {
    "tc_id": 8,
    "tc_name": "前端学院",
    "tc_roster": "攻城狮",
    "tc_pass": "c33367701511b4f6020ec61ded352059",
    "tc_status": 0,
    "tc_birthday": "1990-02-14",
    "tc_hometown": "河北省|保定市|曲阳县",
    "tc_avatar": "http://static.botue.com/images/avatar/5861fd014b193.jpg",
    "tc_gender": 0,
    "tc_cellphone": "13666668886",
    "tc_email": "web@itcast.cn",
    "tc_join_date": "2016-07-07",
    "tc_introduce": "<p>前端工程师的职责是制作标准优化的代码，并增加交互动态功能，开发JavaScript以及Flash模块，同时结合后台开发技术模拟整体效果，进行丰富互联网的Web开发，致力于通过技术改善用户体验。</p>\n\n<p>前端工程师属于IT技术职业的一种，是近5年发展起来的职业，旧的体系将其定义为Web前端工程师，主要的技术包含：HTML、JavaScript、CSS。但IT技术属于变化比较快的领域，最近发生了很大的变革，新的体系下，前端工程师技术又增加了：nodejs、Hybrid App。</p>\n"
  },
  "time": 1482909980
}
```

### 注销/启用讲师

> 注销或启用讲师，需要管理员权限。用于讲师列表页。

##### 地址

- http://api.botue.com/v6/teacher/handle

##### 请求

* 请求方式 POST
* 支持格式 FormData
* 请求参数

| 字段名 | 必填 | 类型  | 说明  |
|:------|:----|:-----|:----|
| tc_id | 是  | number | 讲师id |
| tc_status | 是  | number | 状态 |

##### 响应

* 数据格式 JSON
* 数据示例

```json
{
  "code": 200,
  "msg": "OK",
  "result": {
    "tc_status": 1
    },
  "time": 1482560649
}
```

## 个人管理

### 接口涵盖数据预览
| 字段名 | 类型  | 说明  |
|:------|:-----|:-----|
| tc_id | number | 讲师id |
| tc_name | string | 讲师名称 |
| tc_roster | string | 讲师昵称 |
| tc_gender | number | 讲师性别： 0 男 1 女 |
| tc_avatar | string stream | 头像地址或二进制数据 |
| tc_birthday | string | 生日： yyyy-mm-dd |
| tc_join_date | string | 入职时间： yyyy-mm-dd |
| tc_province | number | 所在省份 |
| tc_city | number | 所在城市 |
| tc_district | number | 所在县/区 |
| tc_hometown | string | 家乡  |
| tc_cellphone | number | 手机号码 |
| tc_email | string | 邮箱地址 |
| tc_introduce | string | 自我介绍 |
| tc_pass | string | 原密码 |
| tc_new_pass | number | 新密码 |

### 个人信息

> 获取个人信息，用于个人中心页。

##### 地址

- http://api.botue.com/v6/teacher/profile

##### 请求

* 请求方式 GET
* 请求参数 无

##### 响应

* 数据格式 JSON
* 数据示例

```json
{
  "code": 200,
  "msg": "OK",
  "result": {
    "tc_id": 8,
    "tc_name": "前端学院",
    "tc_roster": "攻城狮",
    "tc_birthday": "1990-02-14",
    "tc_province": "130000",
    "tc_city": "130600",
    "tc_district": "130634",
    "tc_hometown": "河北省|保定市|曲阳县",
    "tc_avatar": "http://static.botue.com/images/avatar/58613845e749c.jpg",
    "tc_gender": 0,
    "tc_cellphone": "13666668888",
    "tc_email": "web@itcast.cn",
    "tc_join_date": "2016-07-07",
    "tc_introduce": "<p>前端工程师的职责是制作标准优化的代码，并增加交互动态功能，开发JavaScript以及Flash模块，同时结合后台开发技术模拟整体效果，进行丰富互联网的Web开发，致力于通过技术改善用户体验。</p>\n\n<p>前端工程师属于IT技术职业的一种，是近5年发展起来的职业，旧的体系将其定义为Web前端工程师，主要的技术包含：HTML、JavaScript、CSS。但IT技术属于变化比较快的领域，最近发生了很大的变革，新的体系下，前端工程师技术又增加了：nodejs、Hybrid App。</p>\n"
  },
  "time": 1482766412
}
```

### 完善个人信息

> 更新或完善个人信息，用于个人中心页。

##### 地址

- http://api.botue.com/v6/teacher/modify

##### 请求

* 请求方式 POST
* 支持格式 FormData
* 请求参数

| 字段名 | 必填 | 类型  | 说明  |
|:------|:----|:-----|:----|
| tc_id | 是  | number | 讲师id |
| tc_roster | 是  | string | 昵称 |
| tc_gender | 是  | number | 性别 0 男 1 女 |
| tc_birthday | 否  | string | 生日 yyyy-mm-dd |
| tc_province | 是  | number | 所在省份 |
| tc_city | 是  | number | 所在城市 |
| tc_district | 是  | number | 所在县/区 |
| tc_hometown | 是  | string | 家乡 |
| tc_cellphone | 否  | number | 手机号码 |
| tc_email | 否  | string | 邮箱地址 |
| tc_join_date | 否  | string | 入职时间 |
| tc_introduce | 是  | string | 自我介绍 |

##### 响应

* 数据格式 JSON
* 数据示例

```json
{
  "code": 200,
  "msg": "OK",
  "time": 1482391415
}
```

### 上传头像

> 上传自定义头像，用于个人中心页。

##### 地址

- http://api.botue.com/v6/uploader/avatar

##### 请求

* 请求方式 POST
* 支持格式 multipart/form-data
* 请求参数

| 字段名 | 必填 | 类型  | 说明  |
|:------|:----|:-----|:----|
| tc_avatar | 是  | stream | 图片格式 |

##### 响应

* 数据格式 JSON
* 数据示例

```json
{
  "code": 200,
  "msg": "OK",
  "result": {
    "path": "http://static.botue.com/images/avatar/58613cba34760.jpg"
  }
  "time": 1482767547
}
```

### 修改密码

> 修改个人登录密码，用于个人中心页。

##### 地址

- http://api.botue.com/v6/teacher/repass

##### 请求

* 请求方式 POST
* 支持格式 FormData
* 请求参数

| 字段名 | 必填 | 类型  | 说明  |
|:------|:----|:-----|:----|
| tc_pass | 是  | number | 原密码 |
| tc_new_pass | 是  | number | 新密码 |

##### 响应

* 数据格式 JSON
* 数据示例

```json
{
  "code": 200,
  "msg": "OK",
  "time": 1482395042
}
```

## 学科分类管理

#### 接口涵盖数据预览
| 字段名 | 类型  | 说明  |
|:------|:-----|:-----|
| cg_id | number | 分类id |
| cg_pid | number | 从属学科(父学科) |
| cg_name | string | 分类名称 |
| cg_order | number | 排序权重 |
| cg_is_hide | number | 是否隐藏 0 显示 1 隐藏 |
| cg_update_time | number | 更新时间 |
| level | number | 等级 |

### 学科列表

> 获取所有的学科，根据学科的cg_pid值可以区分是顶级学科还是子级学科，用于学科列表页。

##### 地址

- http://api.botue.com/v6/category

##### 请求
* 请求方式 GET
* 请求参数 无

##### 响应

* 数据格式 JSON
* 数据示例

```json
{
  "code": 200,
  "msg": "OK",
  "result": [
    {
      "cg_id": 1,
      "cg_pid": 0,
      "cg_name": "前端开发",
      "cg_order": 10,
      "cg_is_hide": 0,
      "cg_update_time": "2016-11-13 15:36:01",
      "level": 0
    },
    {
      "cg_id": 5,
      "cg_pid": 1,
      "cg_name": "HTML/CSS",
      "cg_order": 10,
      "cg_is_hide": 0,
      "cg_update_time": "2016-11-13 15:36:46",
      "level": 1
    },
    {
      "cg_id": 6,
      "cg_pid": 1,
      "cg_name": "Javascript",
      "cg_order": 10,
      "cg_is_hide": 0,
      "cg_update_time": "2016-11-13 15:36:56",
      "level": 2
    },
    {
      "cg_id": 7,
      "cg_pid": 1,
      "cg_name": "Mobile",
      "cg_order": 10,
      "cg_is_hide": 0,
      "cg_update_time": "2016-11-13 15:37:07",
      "level": 3
    }
  ]
}
```

### 添加学科

> 添加顶级或子级学科，用于添加学科页。

##### 地址

- http://api.botue.com/v6/category/add

##### 请求

* 请求方式 POST
* 支持格式 FormData
* 请求参数

| 字段名 | 必填 | 类型  | 说明  |
|:------|:----|:-----|:----|
| cg_name | 是  | string | 学科名称 |
| cg_pid | 是  | number | 从属学科(父学科) |
| cg_order | 否  | number | 排序 |
| cg_is_hide | 否  | number | 是否隐藏 0 显示 1隐藏 |

##### 响应

* 数据格式 JSON
* 数据示例

```json
{
  "code": 200,
  "msg": "OK",
  "time": 1482398093
}
```

### 编辑学科

> 获取学科的基本信息，用于编辑学科的第一步页。

##### 地址

- http://api.botue.com/v6/category/edit

##### 请求

* 请求方式 GET
* 支持格式 queryString
* 请求参数

| 字段名 | 必填 | 类型  | 说明  |
|:------|:----|:-----|:----|
| cg_id | 是  | number | 学科id |

##### 响应

* 数据格式 JSON
* 数据示例

```json
{
  "code": 200,
  "msg": "OK",
  "result": {
    "cg_id": 6,
    "cg_pid": 1,
    "cg_name": "Javascript",
    "cg_order": 10,
    "cg_is_hide": 0,
    "top": [
      {
        "cg_id": 1,
        "cg_name": "前端开发"
      },
      {
        "cg_id": 2,
        "cg_name": "后端开发"
      },
      {
        "cg_id": 3,
        "cg_name": "数据库"
      },
      {
        "cg_id": 4,
        "cg_name": "视觉设计"
      },
      {
        "cg_id": 15,
        "cg_name": "移动开发"
      },
      {
        "cg_id": 16,
        "cg_name": "云计算&大数据"
      },
      {
        "cg_id": 17,
        "cg_name": "运维&测试"
      }
    ]
  },
  "time": 1482914596
}
```

### 修改分类

> 修改学科的基本信息，用于编辑学科页。

##### 地址

- http://api.botue.com/v6/category/modify

##### 请求

* 请求方式 POST
* 支持格式 FormData
* 请求参数

| 字段名 | 必填 | 类型  | 说明  |
|:------|:----|:-----|:----|
| cg_id | 是  | number | 学科id |
| cg_name | 是  | string | 学科名称 |
| cg_pid | 是  | number | 从属学科(父学科) |
| cg_order | 否  | number | 排序 |
| cg_is_hide | 否  | number | 是否隐藏 0 显示 1隐藏 |

##### 响应

* 数据格式 JSON
* 数据示例

```json
{
  "code": 200,
  "msg": "OK",
  "time": 1482930691
}
```

### 顶级学科分类

> 获取顶级学科列表，用于添加学科页。

##### 地址

- http://api.botue.com/v6/category/top

##### 请求

* 请求方式 GET
* 请求参数 无

##### 响应

* 数据格式 JSON
* 数据示例

```json
{
  "code": 200,
  "msg": "OK",
  "result": [
    {
      "cg_id": 1,
      "cg_name": "前端开发"
    },
    {
      "cg_id": 2,
      "cg_name": "后端开发"
    },
    {
      "cg_id": 3,
      "cg_name": "数据库"
    },
    {
      "cg_id": 4,
      "cg_name": "视觉设计"
    },
    {
      "cg_id": 15,
      "cg_name": "移动开发"
    },
    {
      "cg_id": 16,
      "cg_name": "云计算&大数据"
    },
    {
      "cg_id": 17,
      "cg_name": "运维&测试"
    }
  ],
  "time": 1482913594
}
```

### 子级学科分类

> 获取子级学科列表，用于课程信息完善第一步页的二级联动。

##### 地址

- http://api.botue.com/v6/category/child

##### 请求

* 请求方式 GET
* 支持格式 queryString
* 请求参数

| 字段名 | 必填 | 类型  | 说明  |
|:------|:----|:-----|:----|
| cg_id | 是  | number | 顶级学科id |

##### 响应

* 数据格式 JSON
* 数据示例

```json
{
  "code": 200,
  "msg": "OK",
  "result": [
    {
      "cg_id": 5,
      "cg_name": "HTML/CSS"
    },
    {
      "cg_id": 6,
      "cg_name": "Javascript"
    },
    {
      "cg_id": 7,
      "cg_name": "Mobile"
    },
    {
      "cg_id": 24,
      "cg_name": "AngularJS"
    },
    {
      "cg_id": 25,
      "cg_name": "Vue"
    }
  ],
  "time": 1483665033
}
```

## 课程管理

#### 接口涵盖数据预览
| 字段名 | 类型  | 说明  |
|:------|:-----|:-----|
| cs_id | number | 课程id |
| cs_tc_id | number | 课程所属讲师id |
| cs_cg_id | number | 课程所属学科id |
| cs_cg_pid | number | 课程所属顶级学科id |
| cs_name | string | 课程名称 |
| tc_name | number | 授课讲师姓名 |
| cs_brief | string | 课程描述 |
| cs_tags | string | 课程标签 |
| cs_cover | string | 课程封面裁剪后的图片地址 |
| cs_cover_original | string stream | 课程封面原图地址或数据 |
| x | number | 基于原图裁剪x坐标 |
| y | number | 基于原图裁剪y坐标 |
| w | number | 裁剪宽度 |
| h | number | 裁剪高度 |

### 课程列表

> 获取所有课程，用于课程列表页。

##### 地址

- http://api.botue.com/v6/course

##### 请求

* 请求方式 GET
* 支持格式 queryString
* 请求参数 无

##### 响应

* 数据格式 JSON
* 数据示例

```json
{
  "code": 200,
  "msg": "OK",
  "result": [
    {
      "cs_id": 1,
      "cs_name": "CSS",
      "cs_cover": "http://static.botue.com/images/cover/586a53f784601.jpg?x-oss-process=image/crop,x_0,y_39,w_512,h_256",
      "tc_name": "李清照",
      "cg_name": "HTML/CSS"
    },
    {
      "cs_id": 2,
      "cs_name": "移动Web",
      "cs_cover": "http://static.botue.com/images/cover/586a5c7659052.jpg?x-oss-process=image/crop,x_13,y_0,w_699,h_350",
      "tc_name": "风清扬",
      "cg_name": "HTML/CSS"
    }
  ],
  "time": 1483711927
}
```

### 添加课程

> 添加新课程，用于添加课程页

##### 地址

- http://api.botue.com/v6/course/create

##### 请求

* 请求方式 POST
* 支持格式 FormData
* 请求参数

| 字段名 | 必填 | 类型  | 说明  |
|:------|:----|:-----|:----|
| cs_name | 是  | string | 课程名称 |

##### 响应

* 数据格式 JSON
* 数据示例

```json
{
  "code": 200,
  "msg": "OK",
  "result": {
    "cs_id": "17"
  },
  "time": 1483323950
}
```

### 课程基本信息

> 获取课程的基本信息，用于课程编辑第一步页。

##### 地址

- http://api.botue.com/v6/course/basic

##### 请求

* 请求方式 GET
* 支持格式 queryString
* 请求参数

| 字段名 | 必填 | 类型  | 说明  |
|:------|:----|:-----|:----|
| cs_id | 是  | number | 课程id |

##### 响应

* 数据格式 JSON
* 数据示例

```json
{
  "code": 200,
  "msg": "OK",
  "result": {
    "cs_id": 1,
    "cs_cg_id": 5,
    "cs_tc_id": 2,
    "cs_name": "HTML5",
    "tc_name": "李清照",
    "cs_brief": "<p>最精彩的网页布局教程</p>\n",
    "cs_tags": "HTML",
    "cs_cover": "http://static.botue.com/images/cover/half.jpg?x-oss-process=image/crop,x_100,y_50,w_500,h_250",
    "cs_cg_pid": 1,
    "teacher": [
      {
        "tc_id": 2,
        "tc_name": "李清照"
      },
      {
        "tc_id": 8,
        "tc_name": "前端学院"
      },
      {
        "tc_id": 9,
        "tc_name": "令狐冲"
      },
      {
        "tc_id": 10,
        "tc_name": "张无忌"
      },
      {
        "tc_id": 16,
        "tc_name": "风清杨"
      }
    ],
    "category": {
      "top": [
        {
          "cg_id": 1,
          "cg_name": "前端开发"
        },
        {
          "cg_id": 2,
          "cg_name": "后端开发"
        },
        {
          "cg_id": 3,
          "cg_name": "数据库"
        },
        {
          "cg_id": 4,
          "cg_name": "视觉设计"
        },
        {
          "cg_id": 15,
          "cg_name": "移动开发"
        },
        {
          "cg_id": 16,
          "cg_name": "云计算&大数据"
        },
        {
          "cg_id": 17,
          "cg_name": "运维&测试"
        }
      ],
      "childs": [
        {
          "cg_id": 5,
          "cg_pid": 1,
          "cg_name": "HTML/CSS"
        },
        {
          "cg_id": 6,
          "cg_pid": 1,
          "cg_name": "Javascript"
        },
        {
          "cg_id": 7,
          "cg_pid": 1,
          "cg_name": "Mobile"
        }
      ]
    }
  },
  "time": 1483321817
}
```

### 编辑基本信息

> 修改课程的基本信息，用于课程编辑第一步页。

##### 地址

- http://api.botue.com/v6/course/update/basic

##### 请求

* 请求方式 POST
* 支持格式 FormData
* 请求参数

| 字段名 | 必填 | 类型  | 说明  |
|:------|:----|:-----|:----|
| cs_id | 是  | number | 课程id |
| cs_name | 是  | string | 课程名称 |
| cs_brief | 是  | string | 课程描述 |
| cs_tc_id | 是  | number | 讲师id |
| cs_cg_id | 是  | number | 分类id |
| cs_tags | 否  | string | 课程标签 |

##### 响应

* 数据格式 JSON
* 数据示例

```json
{
  "code": 200,
  "msg": "OK",
  "result": {
    "cs_id": "14"
  },
  "time": 1483324805
}
```

### 编辑课程封面

> 获取课程的封面信息，用于课程编辑第二步页。

##### 地址

- http://api.botue.com/v6/course/picture

##### 请求

* 请求方式 GET
* 支持格式 queryString
* 请求参数

| 字段名 | 必填 | 类型  | 说明  |
|:------|:----|:-----|:----|
| cs_id | 是  | number | 课程id |

##### 响应

* 数据格式 JSON
* 数据示例

```json
{
  "code": 200,
  "msg": "OK",
  "result": {
    "cs_id": 1,
    "cs_name": "AngularJS",
    "tc_name": "李清照",
    "cs_cover": "http://static.botue.com/images/cover/586a53f784601.jpg?x-oss-process=image/crop,x_0,y_20,w_512,h_256",
    "cs_cover_original": "http://static.botue.com/images/cover/586a53f784601.jpg"
  },
  "time": 1483364755
}
```

### 上传封面图

> 上传课程的封面，用于课程编辑第二步页。

##### 地址

- http://api.botue.com/v6/uploader/cover

##### 请求

* 请求方式 POST
* 支持格式 FormData
* 请求参数

| 字段名 | 必填 | 类型  | 说明  |
|:------|:----|:-----|:----|
| cs_id | 是  | number | 课程id |
| cs_cover_original | 是  | stream | 课程图片 |

##### 响应

* 数据格式 JSON
* 数据示例

```json
{
  "code": 200,
  "msg": "OK",
  "result": {
    "filename": "586a5c7659052.jpg",
    "path": "http://static.botue.com/images/cover/586a5c7659052.jpg"
  },
  "time": 1483365496
}
```

### 图片裁切

> 裁切课程的封面，用于课程编辑第二步页。

##### 地址

- http://api.botue.com/v6/course/update/picture

##### 请求

* 请求方式 POST
* 支持格式 FormData
* 请求参数

| 字段名 | 必填 | 类型  | 说明  |
|:------|:----|:-----|:----|
| cs_id | 是  | number | 课程id |
| x | 是  | number | x 坐标 |
| y | 是  | number | y 坐标 |
| w | 是  | number | w 宽度 |
| h | 是  | number | h 高度 |

##### 响应

* 数据格式 JSON
* 数据示例

```json
{
  "code": 200,
  "msg": "OK",
  "result": {
    "cs_id": 1
  },
  "time": 1483364755
}
```

## 章节管理

### 接口涵盖数据预览
| 字段名 | 类型  | 说明  |
|:------|:-----|:-----|
| cs_id | number | 课程id |
| ct_id | number | 章节id |
| ct_cs_id | number | 章节所属课程 |
| ct_name | string | 章节名称 |
| ct_brief | string | 章节介绍 |
| ct_is_free | number | 是否免费 0 否 1 是 |
| ct_video | string | 视频地址 |
| ct_minutes | number | 视频时长分 |
| ct_seconds | number | 视频时长秒 |
| ct_recommend_duration | number | 推荐学习时长时 |

### 章节列表

> 获取课程的章节列表，用于课程编辑第三步页。

##### 地址

- http://api.botue.com/v6/course/lesson

##### 请求

* 请求方式 GET
* 支持格式 queryString
* 请求参数

| 字段名 | 必填 | 类型  | 说明  |
|:------|:----|:-----|:----|
| cs_id | 是  | number | 课程id |

##### 响应

* 数据格式 JSON
* 数据示例

```json
{
  "code": 200,
  "msg": "OK",
  "result": {
    "cs_id": 1,
    "cs_name": "CSS",
    "tc_name": "李清照",
    "cs_cover": "http://static.botue.com/images/cover/586a53f784601.jpg?x-oss-process=image/crop,x_0,y_39,w_512,h_256",
    "lessons": [
      {
        "ct_id": 1,
        "ct_name": "介绍",
        "ct_video_duration": "08:12"
      },
      {
        "ct_id": 2,
        "ct_name": "定位",
        "ct_video_duration": "08:14"
      }
    ]
  },
  "time": 1483672570
}
```

### 添加章节

> 添加新章节，用于课程编辑第三步页。

##### 地址

- ttp://api.botue.com/v6/course/chapter/add

##### 请求

* 请求方式 POST
* 支持格式 FormData
* 请求参数

| 字段名 | 必填 | 类型  | 说明  |
|:------|:----|:-----|:----|
| ct_cs_id | 是  | number | 章节所属课程id |
| ct_name | 是  | string | 章节名称 |
| ct_brief | 是  | string | 章节介绍 |
| ct_is_free | 是  | number | 是否免费 0 否 1 是 |
| ct_video | 是  | string | 视频地址 |
| ct_minutes | 是  | number | 视频时长 |
| ct_seconds | 是  | number | 视频时长 |
| ct_recommend_duration | 是  | number | 推荐学习时长 |

##### 响应

* 数据格式 JSON
* 数据示例

```json
{
  code: 200,
  msg: "OK",
  result: "5",
  time: 1483685459
}
```

### 编辑章节

> 获取章节信息，用于课程编辑第三步页。

##### 地址

- http://api.botue.com/v6/course/chapter/edit

##### 请求

* 请求方式 GET
* 支持格式 queryString
* 请求参数

| 字段名 | 必填 | 类型  | 说明  |
|:------|:----|:-----|:----|
| ct_id | 是  | number | 章节id |

##### 响应

* 数据格式 JSON
* 数据示例

```json
{
  "code": 200,
  "msg": "OK",
  "result": {
    "ct_id": 1,
    "ct_cs_id": 1,
    "ct_name": "介绍",
    "ct_brief": "层叠样式表(英文全称：Cascading Style Sheets)是一种用来表现HTML（标准通用标记语言的一个应用）或XML（标准通用标记语言的一个子集）等文件样式的计算机语言。CSS不仅可以静态地修饰网页，还可以配合各种脚本语言动态地对网页各元素进行格式化。",
    "ct_is_free": 1,
    "ct_video": "http://www.youku.com",
    "ct_recommend_duration": "0.5",
    "ct_minutes": "08",
    "ct_seconds": "12"
  },
  "time": 1483684058
}
```

### 修改章节

> 修改章节信息，用于课程编辑第三步页。

##### 地址

- http://api.botue.com/v6/course/chapter/modify

##### 请求

* 请求方式 POST
* 支持格式 FormData
* 请求参数

| 字段名 | 必填 | 类型  | 说明  |
|:------|:----|:-----|:----|
| ct_id | 是  | number | 章节id |
| ct_cs_id | 否  | number | 章节所属课程id |
| ct_name | 是  | string | 章节名称 |
| ct_brief | 是  | string | 章节介绍 |
| ct_is_free | 是  | number | 是否免费 0 否 1 是 |
| ct_video | 是  | string | 视频地址 |
| ct_minutes | 是  | number | 视频时长 |
| ct_seconds | 是  | number | 视频时长 |
| ct_recommend_duration | 是  | number | 推荐学习时长 |

##### 响应

* 数据格式 JSON
* 数据示例

```json
{
  code: 200,
  msg: "OK",
  time: 1483686203
}
```
