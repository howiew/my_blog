<template>
	<div class="fixed-content" id="page_recommend">
		<div class="template">
			<templateList :list_template='list_template' />
		</div>
		<div class="postlist">
			<postList :list_post='post_show' />
			<pagination :total="page.count" :current-page="page.cur" :page-display="page.per" @pagechange="pagechange"></pagination>
		</div>
		
	</div>
</template>
<script>
import PostList from '@/components/Index/IndexViewMainPostList.vue'
import TemplateList from '@/components/Index/IndexViewMainTemplateList.vue'
import {getLatestList} from '@/assets/js/http.js'
import Pagination from '@/components/common/Pagination.vue'

export default {
	data(){
		return {
			list_post:{},
			list_template:[{
				title:'蓝色玫瑰',
				image_src: '/src/assets/image/wang.jpg',
				up_time: '2011-11-1',
				up_author: 'howie',
				count: '2220'
			},{
				title:'蓝色玫瑰',
				image_src: '/src/assets/image/wang.jpg',
				up_time: '2011-11-1',
				up_author: 'howie',
				count: '2220'
			},{
				title:'蓝色玫瑰',
				image_src: '/src/assets/image/wang.jpg',
				up_time: '2011-11-1',
				up_author: 'howie',
				count: '2220'
			},{
				title:'蓝色玫瑰',
				image_src: '/src/assets/image/wang.jpg',
				up_time: '2011-11-1',
				up_author: 'howie',
				count: '2220'
			}],
			page: {
				//页信息
				count: 0, //数据总条数
				per: 6, //每页显示条数
				cur: 1 //当前显示页
			}
		}
	},
	components: {
		PostList,
		TemplateList,
		Pagination
	},
	created: function(){
		let vm = this;
		// 发送请求获取最新的消息列表
		getLatestList().then(function(res){
			//返回消息的列表数组
			return res.data.content.rows;
		}).then(function(res){
			console.log(res);
			//格式化客户端返回的原始数据
			vm.datasFormat(res);
			// 计算数据条数
			vm.page.count = res.length;
			// 将数据进行分页处理
			vm.list_post = vm.doPagination(res);
		});
	},
	computed: {
		post_show: function () {
			let vm = this;
			console.log(vm.getNewPage(vm.page.cur));
			return vm.getNewPage(vm.page.cur);
		}
	},
	methods: {
		datasFormat: function (datas) {
			// 此函数功能为格式化客户端返回的元素数据
			let vm = this;
			for (let i=0; i< datas.length;i++) {
				datas[i].time = vm.dateFormat(datas[i].time); 
			}
		},
		doPagination: function (datas) {
			// 此函数功能：将原始数据进行分页处理
			let vm = this;
			let pages= [];
			let currentPage = 1;
			let pageCount = vm.page.per;
			let len = Math.ceil(vm.page.count / pageCount);
			// 将分页数据信息按第一页、第二页、第三页...的方式进行保存处理
			for (currentPage; currentPage <= len; currentPage++) {
				let start_pos = (currentPage - 1) * pageCount;
				let end_pos;
				if (currentPage != len) {
					end_pos = currentPage*pageCount;
					pages[currentPage] = datas.slice(start_pos,end_pos);
				}else {
					pages[currentPage] = datas.slice(start_pos);
				}
				
			}

			return pages;
		},
		getNewPage: function (currentPage) {
			// 该函数功能：分页切换时进行数据切换更新
			let vm = this;
			return vm.list_post[currentPage];
		},
		dateFormat: function(d){
			//该函数对服务器返回的消息时间进行格式化处理
			let date = new Date(d);
			let date_y = date.getFullYear();
			let date_m = date.getMonth();
			let date_d = date.getDate();
			return `${date_y}-${date_m}-${date_d}`;
		},
		pagechange: function(page){
			let vm = this;
			vm.page.cur = page;
			console.log(`aceept request from page:${page}`);
		}
	},
	watch: {
	}
}
</script>
<style>
.fixed-container {
	width: 100%;
}

</style>