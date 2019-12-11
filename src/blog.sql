-- 个人博客数据库设计
-- 作者：howie
-- email:howiew@outlook.com
-- version:1.0
-- 个人网站:http://howiew.com

SET NAMES UTF8;
CREATE DATABASE BLOG CHARSET=UTF8;
USE BLOG;

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
-- 文章类型表
CREATE TABLE articleType(
	articleType_id int primary key auto_increment,
	articleType_name varchar(10)
);

-- 文章信息表
CREATE TABLE articles(
	article_id smallint(5) primary key auto_increment,#文章ID
	article_title varchar(30),#文章标题
	article_url varchar(255),#文章MD的url
	article_keyword varchar(255),#文章的关键字
	article_time Datetime,#文章的创建时间
	article_typeid int,#外键：文章类型
	article_up tinyint(3) DEFAULT 0,#是否置顶：0为否，1为是
	article_support tinyint(3) DEFAULT 0,#博主是否推荐：0为否，1位是
	constraint FK_article_typeid foreign key(article_typeid) references articleType(articleType_id)#通过外键创建连接
);


-- 相关基础信息初始化数据
-- 
-- 
-- 
-- 管理员信息初始化
INSERT user(
		user_login, 
		user_password, 
		user_name, 
		user_sex, 
		user_age, 
		user_level
	) VALUES ("howie","wangshuang","汪浩宇","MAN","26","9");

-- 文章类型信息表
INSERT articleType(articleType_name) VALUES
	("杂谈"),
	("美丽生活"),
	("前端开发");

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

