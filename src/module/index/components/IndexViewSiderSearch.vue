<template>
	<div class="search">
	  <h4>站内搜索</h4>
	  <input type="text" class="search_box" placeholder="请键入要查询的内容" v-model="keyword" @keydown="search">
	  {{keyword}}
	</div>
</template>
<script>
	export default {
		data(){
			return {
				keyword:''
			}
		},
		methods:{
			search: function(e){
				let vm = this;
				if (!e) e = window.event
				if (e.keyCode == 13 && vm.keyword){
					// 如果按键为ENTER键 则进入路由
					vm.$router.push({path:'/search',query:{q:`${vm.keyword}`}});
				}
				
			}
		}
	}
</script>
<style>
.search {
	padding-top: 10px;
	padding-bottom: 10px;
	padding-right: 15px;
	padding-left: 15px;
	background-color: white;
	margin-bottom: 10px;
}
.search > h4 {
	margin-left: -15px;
	margin-right: -15px;
	margin-top: -10px;
	padding-top: 10px;
	padding-bottom: 10px;
	text-indent: 15px;
	background-color: #F5F5F6;
}
.search_box {
	width: 200px;
	height: 36px;
	line-height: 36px;
	color: black;
	font-size: 12px;
	font-weight: normal;
	text-indent: 12px;
	outline: none;
	border:1px solid #c3c3c3;
	border-radius: 5px;
	margin-top: 10px;
}
</style>