# vue-cli构建单页面应用（个人博客）
--------------------------
**[项目地址]:(http://www.howiew.com)**  
### 1、vue-cli简介与安装使用
>vue-cli是vue.js基于Node所打造的vue脚手架工程。其主要使用的技术为webpack+vue

	$ npm install -g vue-cli  //全局安装vue-cli
	$ vue init webpack my-project  //创建一个自己的vue项目
	$ cd my-project  //进入文件夹
	$ npm install   //安装相关依赖包
	$ npm run dev   //以开发模式运行该项目
### 2、vue-cli项目结构介绍(vue-cli版本为2.x)
----------------------------------------
### 3、使用vue-cli构建网站

### 3.1将完成的页面进行区域划分，分别构建vue组件    
--------------------------------

### 3.2完成网站的数据库设计(mysql)
>本站点由于将要采用畅言的评论系统，因此数据库表仅仅只有三张   
>>1 用户信息表  
>>>
	-- 用户信息表
	CREATE TABLE user(
		user_id int primary key auto_increment,#用户注册ID
		user_login varchar(16),#用户注册登录名
		user_password varchar(16),#用户注册密码
		user_name varchar(16),#注册用户姓名
		user_sex varchar(5),#注册用户性别
		user_age int(8),#注册用户年龄
		user_level varchar(16)#用户级别
	);  
  
>>2 文章分类表  
>>>
	-- 文章类型表
	CREATE TABLE articleType(
		articleType_id int primary key auto_increment,
		articleType_name varchar(10)
	);  

>>3 文章信息表  
>>>
	-- 文章信息表
	CREATE TABLE articles(
		aritcle_id smallint(5) primary key auto_increment,#文章ID
		article_title varchar(30),#文章标题
		article_url varchar(255),#文章MD的url
		article_keyword varchar(255),#文章的关键字
		article_time Datetime,#文章的创建时间
		article_typeid int,#外键：文章类型
		article_up tinyint(3) DEFAULT 0,#是否置顶：0为否，1为是
		article_support tinyint(3) DEFAULT 0,#博主是否推荐：0为否，1位是
		constraint FK_article_typeid foreign key(article_typeid) references articleType(articleType_id)#通过外键创建连接
	);  

>>4 相关信息的初始化(谁边弄点用于测试的)
>>>
	-- 管理员信息初始化
	INSERT user(
			user_login, 
			user_password, 
			user_name, 
			user_sex, 
			user_age, 
			user_level
		) VALUES ("howie","wangshuang","汪浩宇","MAN","26","9");  
>>>
	-- 文章类型信息表
	INSERT articleType(articleType_name) VALUES
		("杂谈"),
		("美丽生活"),
		("前端开发");  
>>>
	-- 文章信息初始化
	INSERT articles(
				article_title, 
				article_url, 
				article_keyword, 
				article_time, 
				article_up, 
				article_support
			) VALUES
				("this is first article","www.baidu.com","baidu","20111111","0","0"),
				("this is second article","www.tmall.com","baidu","20111111","0","0"),
				("this is third article","www.kekeke.com","baidu","20111111","0","0"),
				("this is four article","www.aiqiyi.com","baidu","20111111","0","0"),
				("this is five article","www.dajie.com","baidu","20111111","0","0"),
				("this is six article","www.niubi.com","baidu","20111111","0","0"),
				("this is seven article","www.qidian.com","baidu","20111111","0","0"),
				("this is eight article","www.weiruan.com","baidu","20111111","0","0"),
				("this is nine article","www.shands.com","baidu","20111111","0","0");  

>>5 下面是数据库查询建表情况的截图  
>>>###<center>数据库表列表</center>
>![blog_tablses](https://i.imgur.com/yHXGw1q.png) 
>
>>>###<center>用户表</center> 
>![blog_user](https://i.imgur.com/y1M5sfb.png) 
>
>>>###<center>文章分类信息表</center>
>![blog_articleType](https://i.imgur.com/yaV6tO2.png)  
>
>>>###<center>文章信息表</center>  
>>>![blog_articles](https://i.imgur.com/LvFd2vj.png)
--------------------------------
### 3.3完成网站的后端设计(koa) 

--------------------------------

