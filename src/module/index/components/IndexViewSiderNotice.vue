<template>
	<div class="notice">
	  <h4>网站公告</h4>
	  <div class="notice_content">
	    <a href="#" class="text-ellipsis">【故障说明】6月27日阿里云故障说明</a>
	    <a href="#" class="text-ellipsis">【异常通告】6月27日阿里云产品及其部分用户无法登陆的通告</a>
	    <a href="#" class="text-ellipsis">【升级】6月28日MQ升级通知</a>
	  </div>
	</div>
</template>
<script>
	export default {

	}
</script>
<style>
.notice {
	padding-top: 10px;
	padding-bottom: 10px;
	padding-right: 15px;
	padding-left: 15px;
	background-color: white;
	margin-bottom: 10px;
}
.notice > h4 {
	margin-left: -15px;
	margin-right: -15px;
	margin-top: -10px;
	padding-top: 10px;
	padding-bottom: 10px;
	text-indent: 15px;
	background-color: #F5F5F6;
}
.notice .notice_content {

}
.notice .notice_content > a {
	display: block;
	height: 24px;
	line-height: 24px;
	font-size: 12px;
	color: black;
}
.notice .notice_content > a:hover {
	text-decoration: underline;
}
</style>