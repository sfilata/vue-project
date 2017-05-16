<template>
	<div class="banner">
		<img src="https://mimg.127.net/m/lc/img/LoginBackgroundPic/1189/1/promPic.jpg">
		<div class="loginBox">
			<div class="title">帐号登录</div>
			<div class="input-container">
				<input class="username" name="username" placeholder="用户名" type="text">
			</div>
			<div class="input-container">
				<input class="password" name="password" placeholder="密码" type="text">
			</div>
			<div class="forget">忘记密码</div>
			<div class="button-container">
				<div class="button login">登录</div>
				<div class="button register">去注册</div>
			</div>
		</div>
	</div>
</template>

<script>
    export default {
        data () {
            return {
                msg: 'Hello World!'
            }
        }
    }
</script>

<style type="text/css">
	body {
		font-family: "Microsoft YaHei","微软雅黑", verdana, sans-serif;
		margin: 5px;
		text-align: center;
		background: #eee;
	}

	.header {
		width: 100%;
		background: white;
		text-align: center;
		font-size: 30px;
	}

	.banner {
		position: relative;
		width: 100px;
		height: 600px;
		margin: 0 130px;
	}

	.loginBox {
		height: 340px;
		width: 300px;
		position: absolute;
		top: 105px;
		left: 625px;
		z-index: 20;
		background: #fff;
		border-radius: 5px;
		padding: 20px 0;
	}

	.title {
		text-align: center;
		height: 47px;
		line-height: 47px;
		font-size: 22px;
	}

	.input-container {
		display: block;
		width: 77%;
		margin: 20px auto;
		height: 35px;
		border-radius: 10px;
		border: 1px solid #848585;
		padding: 3px;
	}

	input {
		height: 80%;
		width: 100%;
		border: none;
	}

	.forget {
		float: right;
		margin-right: 26px;
		height: 14px;
		padding: 2px 0 0 77px;
		line-height: 14px;
		font-size: 12px;
		color: #848585;
	}

	.button-container {
		text-align: center;
		margin-top: 80px;
	}

	.button {
		display: inline-block;
		width: 110px;
		height: 38px;
		text-align: center;
		line-height: 38px;
		border-radius: 10px;
		margin: 0 10px;
	}

	.login {
		color: #fff;
		background: green;
	}

	.register {
		border: 1px solid #848585;
	}

	.footer {
		height: 50px;
		text-align: center;
		font-size: 20px;
		color: #848485;
		line-height: 50px;
		background: #fff;
	}
</style>