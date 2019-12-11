<template>
	<div class="list-wrapper">
		<div class="list-content">
			<table cellspacing="0" cellpadding="0">
				<thead>
					<tr>
						<th class="t1">文章名称</th>
						<th class="t2">文章分类</th>
						<th class="t3">发布时间</th>
						<th class="t4">删除</th>
						<th class="t5">置顶</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="i in 8" :key="1">
						<td class="t1"><a href="#">table表格td设置宽度后文字太多自动换行 - DIVCSS5</a></td>
						<td class="t2">javascript</td>
						<td class="t3">2019-11-16</td>
						<td class="t4">删除</td>
						<td class="t5">置顶</td>
					</tr>
				</tbody>	
			</table>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {

			}
		}
	}
</script>
<style>
	.list-wrapper {
		width: 100%;
		min-height: 600px;
	}
	.list-content {
		width: 760px;
		min-height: 300px;
		margin: 20px auto;
	}
	table {
		width: 670px;
		table-layout: fixed;
	}
	table > thead {
		background-color: gray;
	}
	table > thead > tr > th,
	table > tbody > tr >td {
		border: 1px solid #000;
		padding-top: 10px;
		padding-bottom: 10px;
		padding-right: 20px;
		padding-left: 20px;
		text-align: center;
		vertical-align: middle;
	}
	.t1 {
		width: 250px;
	}
	.t2 {
		width: 100px;
	}
	.t3 {
		width: 120px;
	}
	.t4 {
		width: 100px;
	}
	.t5 {
		width: 100px;
	}
	table > tbody > tr > td:first-child{
		text-align: left;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
</style>