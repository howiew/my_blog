<template>
	<div class="fixed-content" id="page_post">
		<div class="postlist">
			<postList :list_post='render_posts' />
			<pagination
			:total='post_count' 
			:current-page='page.per' 
			:page-display='page.cur' 
			@pageChange='pageUpdate'></pagination>
		</div>
	</div>
</template>
<script>
import PostList from '@/components/Index/IndexViewMainPostList.vue'
import Pagination from '@/components/common/Pagination.vue'
import {getLatestList} from '@/assets/js/http.js'

export default {
	data(){
		return {
			list_post:{},
			page: {
				//页信息
				per: 2,
				cur: 1
			}
		}
	},
	components: {
		PostList,
		Pagination
	},
	computed: {
		render_posts: function () {
			//文章视图所需的唯一参数
			// let posts = [];
			// let start_sq = (this.cur - 1)
			// let end_sq = this.cur * this.per - 1;
			// for (let i = start_sq;i<=end_sq;i++) {
			// 	posts.push(list_post[i]);
			// }
			// console.log(posts);
			// return posts;
			console.log(this.list_post);
		},
		post_count: function() {
			return this.list_post.length;
		}
	},
	created: function(){
		let vm = this;
		// 发送请求获取最新的消息列表
		getLatestList().then(function(res){
			//返回消息的列表数组
			return res.data.content.rows;
		}).then(function(res){
			console.log(res);
			for (let i=0;i<res.length;i++){
				res[i].time = vm.dateFormat(res[i].time);
			}
			vm.list_post = res;
		});
	},
	methods: {
		dateFormat: function(d){
			//该函数对服务器返回的消息时间进行格式化处理
			let date = new Date(d);
			let date_y = date.getFullYear();
			let date_m = date.getMonth();
			let date_d = date.getDate();
			return `${date_y}-${date_m}-${date_d}`;
		},
		pageUpdate: function(page){
			let vm = this;
			vm.page.cur = page;
			console.log(`aceept request from page:${page}`);
			// getLatestList().then(function(res){
			// 	//返回消息的列表数组
			// 	return res.data.content.rows;
			// }).then(function(res){
			// 	console.log(res);
			// 	for (let i=0;i<res.length;i++){
			// 		res[i].time = vm.dateFormat(res[i].time);
			// 	}
			// 	vm.postList = res;
			// });
			
		}
	},
	watch: {
		cur: function(val) {
			this.pageUpdate(val);
		}
	}
}
</script>
<style>
	.fixed-content {
		background-color: transparent;
	}
	.postlist {
		margin-top: 20px;
		background-color: white;
	}
</style>