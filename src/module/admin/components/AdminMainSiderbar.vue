<template>
<div class="f-l sider-bar">
	<div class="sider-bar-brand">
		<div class="brand"></div>
	</div>
	<div class="menu-item">
		<router-link class="activelink" active-class="active" :to="{path:'/dashboard',replace:'true'}">首页</router-link>
	</div>
	<div class="menu-item">
		<router-link class="activelink" active-class="active" :to="{path:'/article',replace:'true'}">文章</router-link>
	</div>
	<div class="menu-item">
		<router-link class="activelink" active-class="active" :to="{path:'/picture',replace:'true'}">留言</router-link>
	</div>
	<div class="menu-item">
		<router-link class="activelink" active-class="active" :to="{path:'/Message',replace:'true'}">登出</router-link>
	</div>
</div>
</template>
<script type="text/javascript">
  export default {
  	data(){
  		return {
  			active: false
  		}
  	}
  }
</script>
<style type="text/css">
.sider-bar{
	width: 100px;
	height: 100%;
	background-color:#373D41;
	color: white;
}
.sider-bar-brand {
	width: 100%;
	padding-top: 10px;
	padding-bottom: 10px;
	margin-bottom: 40px;
	margin-top: 20px;
}
.brand {
	width: 80px;
	height: 80px;
	border-radius: 40px;
	background-color: white;
	margin:0 auto;
}
.menu-item {
	text-align: center;
	padding:5px 10px;
	background-color: #42485B;
}
.activelink{
	font-size: 14px;
	color: white;
	text-decoration: none;
}
.menu-item:hover {
	background-color: #00C1DE;
}
.menu-item:hover .activelink {
	color: white;
	text-decoration: none;
}
</style>