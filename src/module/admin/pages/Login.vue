<template>
	<div id="login">
		<div class="login_box">
			<form id="loginForm">
				<div class="login_box_header">
					<p>Sign in</p>
				</div>
				<div class="login_box_body">
					<label for="login_username">Username or email address</label>
					<input type="text" id="login_username" name="username">
					<label for="login_password">Password</label>
					<input type="password" id="login_password" name="password">
					<input type="submit" value="login in" class="btn btn-primary" @click="login">
				</div>
				<div class="login_box_footer">
					<p>游客请使用<b>why666/999999</b>登录</p>
				</div>
			</form>
		</div>
	</div>
</template>
<script>
	import * as $http from '@/http/http.js'
	export default {
		methods: {
			login: function(e) {
				if (e.preventDefault) {
					e.preventDefault();
				}else {
					window.event.returnValue = false;
				}
				let $vm = this;
				let form = document.querySelector('#loginForm');
				let formdata = new FormData(form);
				let data = {
					username: formdata.get('username'),
					password: formdata.get('password')
				};
				$http.login(data).then(res => {
					console.log(res);
					if (res.data.status == -1) {
						console.log('用户名错误');
					}else if(res.data.status == 0) {
						console.log('密码错误');
					}else {
						console.log('登录成功');
						$vm.$router.push({path: '/admin'});
					}
				});
				//
			}
		}
	}
</script>
<style scoped>


	#login {
		background-color: #f9f9f9;
	}
	.login_box {
		width: 300px;
		height: 400px;

		position: absolute;
		top: 50%;
		left: 50%;
		margin-top: -200px;
		margin-left: -150px;
	}
	.login_box_header,
	.login_box_body {

	}
	.login_box_header {
		margin-top: 20px;
		margin-bottom: 15px;
	}
	.login_box_header p {
		font-size: 22px;
		font-weight: 600;
		text-align: center;
	}
	.login_box_body {
		background-color: white;
		border: 1px solid #d8dee2;
		padding: 20px 20px;
		border-radius: 5px;
	}
	label {
		width: 100%;
		margin-bottom: 3px;
		color: black;
		font-size: 12px;
	}
	#login_username,#login_password {
		margin-top: 5px;
		margin-bottom: 20px;
		width: 100%;
		height: 30px;
		padding: 5px;
	}
	#login_username:focus, 
	#login_password:focus {
		border-color: blue;
	}
	input[type="submit"] {
		width: 100%;

	}
	.login_box_footer {
		background-color: white;
		border: 1px solid #d8dee2;
		padding: 15px 20px;
		border-radius: 5px;
		margin-top: 20px;
	}
	.login_box_footer p{
		font-size: 14px;
		text-align: center;
		margin-bottom: 0;
	}
</style>