<template>
	<div class="blog-header">
		<div class="banner"></div>
		<div class="primary-menu">
			<nav class="nav-menu">
				<router-link class="navbar-a" :to="{path:'/index'}">首页</router-link>
				<router-link class="navbar-a" :to="{path:'/newArticle'}">前端开发</router-link>
				<router-link class="navbar-a" :to="{path:'/template'}">网页模板</router-link>
				<router-link class="navbar-a" :to="{path:'/mobile'}">移动开发</router-link>
				<router-link class="navbar-a" :to="{path:'/system'}">人工智能</router-link>
				<router-link class="navbar-a" :to="{}">其他资源</router-link>
			</nav>
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return {
			keyword: ''
		}
	},
	methods: {
		search: function(e) {
			let vm = this;
			e = !e?window.event:e;
			if (e.keyCode == 13) {
				//键盘按下的是回车键的话,按照当前的输入值进行搜索
				let k = vm.keyword.trim();
				console.log(k);
				if (k) {
					console.log(`start search`);
					console.log(k);
					vm.$router.push({path:'/search',query:{q:`${vm.keyword}`}});
				}
			}
		}
	}

}

</script>
<style scoped>
.blog-header {
	width: 100%;
	margin-right: auto;
	margin-left: auto;
	position: relative;
	z-index: 0;
	background-color: white;
	margin-bottom: 40px;
}
.banner {
	width: 100%;
	height: 170px;
	background-image: url(/static/banner.png);
}
.primary-menu {
	width: 1000px;
	border-bottom: 1px solid #e5e9ef;
	margin: 0 auto;
	padding-top: 5px;
}
.nav-menu {
	
}
.navbar-a {
	display: inline-block;
	padding:15px 20px;
	font-size: 12px;
	line-height: 20px;
}
.navbar-a:hover{
	color: red;
}
</style>