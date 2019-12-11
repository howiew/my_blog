# 个人博客后端管理系统 RESTful api设计 #

### 1、用户管理api ###
	
| request|   api   | description  |
| -------|:-------:| ------------:|
|  Post  | /user    |  请求用户列表  |
|  Get   | /user    |   修改用户信息 |
|  delete| /user    |    删除用户   |  

### 3、文章管理api ###
| request|      api     | description  |
| -------|:------------:| ------------:|
|  get   | /article     |  请求所有的文章列表  |
|  post  | /article     |  新建一篇文章 |
|  get   | /article/ID  |  请求指定ID的文章   |
|  patch | /article/ID  |  更新指定ID的文章(提供某一部分信息)|
|  put   | /article/ID  |  更新指定ID的文章(提供文章全部信息)|
|  get   | /article/type|  请求指定类型的文章列表|
|  delete| /article/ID  |  删除指定ID的文章|