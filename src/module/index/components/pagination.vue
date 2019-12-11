<template>
	<nav>
		<ul class="pagination">
			<li :class="{'disabled': current==1}">
				<a @click="setCurrent(current - 1)">上一页</a>
			</li>
			<li v-for="p in pagelist" :key="p.val" :class="{'active': current == p.val}">
				<a @click="setCurrent(p.val)">{{p.text}}</a>
			</li>
			<li :class="{'disabled': current==page}">
				<a @click="setCurrent(current + 1)">下一页</a>
			</li>
		</ul>
	</nav>
</template>
<script>
	export default {
		data() {
			return {
				current: this.currentPage
			}
		},
		props: {
			total: {
				//数据总条数
				type: Number,
				default: 0
			},
			currentPage: {
				//实时页码
				type: Number,
				default: 1
			},
			pagegroup: {
				//显示页码量
				type: Number,
				default: 5
			},
			pageDisplay: {
				type: Number,
				default: 6
			}
		},
		computed: {
			page: function () {
				//总页数
				return Math.ceil(this.total / this.pageDisplay);
			},
			pagelist: function () {
				let len = this.page, temp = [], list =[], count = Math.floor(this.pagegroup / 2), center = this.current;
				if (len <= this.pagegroup) {
					while (len--) {
						temp.push({text: this.page - len, val: this.page -len});
					}
					return temp;
				}
				while (len--) {
					temp.push(this.page - len);
				}
				let idx = temp.indexOf(center);
				(idx < count) && ( center = center + count - idx);
				(this.current > this.page - count) && ( center = this.page - count);
				temp = temp.splice(center - count - 1, this.pagegroup);
				do {
			          var t = temp.shift();
			          list.push({
			            text: t,
			            val: t
			          });
			    } while (temp.length);
			    if (this.page > this.pagegroup) {
		          (this.current > count + 1) && list.unshift({text: '...', val: list[0].val - 1});
		          (this.current < this.page - count) && list.push({text: '...', val: list[list.length - 1].val + 1});
		        }
		        return list;
			}
		},
		methods: {
			setCurrent: function (val) {
				//向父组件提交页码改变事件
				if (this.current != val && val > 0 && val < this.page + 1)
				{
					this.current = val;
					this.$emit('pagechange',val);
				}
				
			}
		}
	}
</script>
<style scoped>
	nav {
		background-color: transparent;
	}
	.pagination {
		font-size: 0;
	}
	.pagination > li {
		display: inline-block;
		padding: 10px 3px;
	}
	.pagination >li > a {
		display: block;
		padding: 10px 13px;
		font-size: 14px;
		color: black;
		cursor: pointer;
		background-color: transparent;
		border-radius: 5px;
		transition: all .7s ease;
	}
	.pagination a:hover {
		color: white;
		background-color: black;
	}
	li.active > a {
		color: white;
		background-color: black;
	}
</style>