<template>
	<div class="container">
		<div class="search_container">

			<input type="text" class="search_input" v-model="q" @keydown="search_input">
			<input type="submit" class="search_btn" value="搜索" @click="search">
		</div>
		<postList :articleList='datas' />
		<navigator :count='32' :per='6' :cur='3' />
	</div>
</template>
<script>
import PostList from '@/components/Index/IndexViewMainPostList.vue'
import Pagination from '@/components/common/Pagination.vue'
import {getLatestList} from '@/assets/js/http.js'
export default {
	data(){
		return {	
			q:'',//搜索关键词
			datas:[] //搜索结果
		}
	},
	components: {
		PostList,
		Pagination
	},
	created:function() {
		let vm = this;
		vm.q = vm.$route.query.q;
		console.log(vm.$route);
		// 发送请求获取最新的消息列表
		getLatestList().then(function(res){
			//返回消息的列表数组
			return res.data.content.rows;
		}).then(function(res){
			console.log(res);
			for (let i=0;i<res.length;i++){
				res[i].time = vm.dateFormat(res[i].time);
			}
			vm.datas = res;
		});
	},
	methods:{
		dateFormat: function(d){
			//该函数对服务器返回的消息时间进行格式化处理
			let date = new Date(d);
			let date_y = date.getFullYear();
			let date_m = date.getMonth();
			let date_d = date.getDate();
			return `${date_y}-${date_m}-${date_d}`;
		},
		search_input: function(e){
			if(!e) e=window.event;
			if(e.keyCode == 13)
				{this.search()}
		},
		search: function(){
			let vm = this;
			//在此进行axios的数据的请求。再进行数据的更新
			getLatestList().then(function(res){
				//返回消息的列表数组
				return res.data.content.rows;
			}).then(function(res){
				console.log(res);
				for (let i=0;i<res.length;i++){
					res[i].time = vm.dateFormat(res[i].time);
				}
				vm.datas = res;
			});
		}
	},
	watch: {
		q: function(newVal,oldVal){
			console.log(`old:${oldVal},new:${newVal}`);
			console.log(`动态显示搜索印象`);

		}
	}
}	
</script>
<style>
	.container {
		width: 800px;
		padding-top: 40px;
		padding-left: 15px;
		padding-right: 15px;
		margin-right: auto;
		margin-left: auto;
	}
	.search_container {
		width: 540px;
		margin-right: auto;
		margin-left: auto;
		margin-bottom: 20px;
		font-size: 0px;
	}
	.search_input {
		display: inline-block;
		width: 480px;
		height: 34px;
		line-height: 34px;
		border:2px solid #000;
		outline: none;
	}
	.search_btn {
		display: inline-block;
		width: 60px;
		height: 34px;
		text-align: center;
		color: white;
		vertical-align: bottom;
		background-color: #3385ff;
		border:none;
		outline: none;
	}
	.search_btn:hover {
		cursor: pointer;
		background-color: #3385dd;
	}
</style>