<template>
	<ol class="breadcrumb">
		<li><a href="#">首页</a></li>
		<li><a href="#">文章</a></li>
		<li class="active">关于怎么解决问题</li>
	</ol>
</template>
<script>
	export default {

	}
</script>
<style>
* {
	box-sizing: border-box;
}
	.breadcrumb {
		padding: 10px 0px;
		margin-bottom: 15px;
		margin-top: 15px;
	}
	.breadcrumb > li {
		display: inline-block;
	}
	.breadcrumb > li > a{
		color: black;
	}
	.breadcrumb > li + li:before {
		display: inline-block;
		content: '/\00a0';
	}
	.active {
		color: gray;
	}
</style>