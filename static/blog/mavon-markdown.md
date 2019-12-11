# 解析怎么使用mavon-markdown

>###前言
>mavon-markdown 是一款基于node平台的Markdown在线编辑vue组件。markdown以其及其便捷的书写方式，深受大家喜爱。

##一、安装

在命令控制器中输入一下代码，自动安装
>
```
npm install mavon-markdown --save
```
##二、在vue项目中使用mavon-markdown
###引入方法：
>//editor.vue 
>  
	<script type="text/javascript">
	import {mavonEditor} from 'mavon-editor'
	import 'mavon-editor/dist/css/index.css'
	export default {
		components: {
			mavonEditor
		},
		data(){
			return {
				value: 'hello world'
			}
		}
	}
	</script>

>//index.js
>
	<template>
		<mavon-editor v-model="value" style="height: 100%"></mavon-editor>
	</template>

这样就使用引入mavon-markdown的功能成功了，下一步就是给编辑框绑定相关的功能。