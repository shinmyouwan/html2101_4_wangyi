import {} from "https://cdn.bootcdn.net/ajax/libs/jquery/1.12.4/jquery.min.js";
import { href } from "./constant_module.js"; // 引入网址
// 1 手机号为空
// 2 手机号在数据库不存在
// 10 验证码为空
// 11 验证码错误
// 20 密码为空
// 21 密码错误
// 22 密码格式错误
// 100 注册成功
// 101 登录成功
// 102 手机号存在

// 验证码按钮
// 按下验证码按钮 btn 后, 将 box 的值设为服务器指定的验证码

var isTel = false; // 手机号是否符合格式
var isPw = false; // 密码是否符合格式

// 清空表单所有数据
var formClear = function () {
	$(".login_form_pw").val("");
	$(".login_form_tel, .login_form_yzm").val("");
	setFormMsg("");
};
// 获取验证码方法, 先判断手机号是否规范
var captchaText = function () {
	$(document).ready(function () {
		$(".login_captcha").on("click", function () {
			if (!isTel) {
				setFormMsg("3");
				return false;
			} else {
				$.ajax({
					url: href + "/php/captcha.php",
					success: (data) => {
						console.log(data);
					},
				});
			}
		});
	});
};
// 验证码登录按钮
// 按下登录按钮 btn 后, 将 tel: 手机号 和 yzm: 验证码 传递给服务器判断是否可以登录等操作
var telLogin = function () {
	$(document).ready(function () {
		let tel = $(".login_form_2_tel");
		let yzm = $(".login_form_yzm");
		$(".login_tel_login_btn").on("click", function () {
			if (!isTel) {
				setFormMsg("3");
				return false;
			} else {
				$.ajax({
					type: "post",
					url: href + "/php/yzm_login.php",
					data: {
						tel: tel.val(),
						yzm: yzm.val(),
					},
					success: (data) => {
						setFormMsg(data);
						setFormMsg("telLogin:success: " + data);
					},
					error: (data) => {
						setFormMsg(data);
						setFormMsg("telLogin:error: " + data);
					},
				});
			}
		});
	});
};
// 密码登录按钮
// 按下登录按钮 btn 后, 将 tel: 手机号 和 pw: 密码 传递给服务器判断是否可以登录等操作
var pwLogin = function () {
	$(document).ready(function () {
		let tel = $(".login_form_1_tel");
		let pw = $(".login_form_pw");
		$(".login_pw_login_btn").on("click", function () {
			if (!isTel) {
				setFormMsg("3");
				return false;
			} else if (!isPw) {
				setFormMsg("22");
				return false;
			} else {
				$.ajax({
					type: "post",
					url: href + "/php/pw_login.php",
					data: {
						tel: tel.val(),
						pw: pw.val(),
					},
					success: (data) => {
						setFormMsg(data);
					},
					error: (data) => {
						setFormMsg(data);
					},
				});
			}
		});
	});
};
var setFormMsg = (function () {
	// 闭包, 参数如果是标签则记录, 如果参数为字符串则处理并输出
	let box = null;
	return function (element) {
		if (Object.prototype.toString.call(element) === "[object String]") {
			switch (element) {
				case "":
					box.hide();
					break;
				case "1":
					box.show();
					box.text("手机号为空");
					break;
				case "2":
					box.show();
					box.text("手机号在数据库不存在");
					break;
				case "3":
					box.show();
					box.text("手机号格式错误");
					break;
				case "10":
					box.show();
					box.text("验证码为空");
					break;
				case "11":
					box.show();
					box.text("验证码错误");
					break;
				case "20":
					box.show();
					box.text("密码为空");
					break;
				case "21":
					box.show();
					box.text("手机号或密码错误");
					break;
				case "22":
					box.show();
					box.text("密码格式错误");
					break;
				case "100":
					box.show();
					box.text("注册成功");
					break;
				case "101":
					box.show();
					box.text("登录成功");
					break;
				case "102":
					box.show();
					box.text("手机号存在");
					break;
				default:
					console.log(element);
			}
		} else if (
			Object.prototype.toString.call(element) === "[object Object]"
		) {
			box = element;
		}
	};
})();
// 设置闭包内参数为 消息窗口
$(document).ready(function () {
	setFormMsg($(".login_form_msg"));
});
// 切换登录模式方法
var modeSwitch = function () {
	$(document).ready(function () {
		let lfs = ".login_form_switch";
		let lf1 = $(".login_form_1");
		let lf2 = $(".login_form_2");
		$(lfs).on("click", function () {
			formClear();
			isTel = false;
			isPw = false;
			if ($(this).index(lfs) === 0) {
				lf2.show();
				lf1.hide();
			} else if ($(this).index(lfs) === 1) {
				lf1.show();
				lf2.hide();
			}
		});
	});
};
// 移除焦点时, 测试 box 里的电话是否规范
var telOutTest = function () {
	$(document).ready(function () {
		let lft = $(".login_form_tel");
		lft.change(function () {
			if (!telTest($(this).val())) {
				setFormMsg("3");
				isTel = false;
			} else {
				setFormMsg("");
				isTel = true;
			}
		});
	});
};
// 移除焦点时, 测试 box 里的密码是否规范
var pwOutTest = function () {
	$(document).ready(function () {
		let lfp = $(".login_form_pw");
		lfp.change(function () {
			if (!pwTest($(this).val())) {
				setFormMsg("22");
				isPw = false;
			} else {
				setFormMsg("");
				isPw = true;
			}
		});
	});
};
// 测试电话格式是否正确
var telTest = function (tel) {
	return /^1([38][0-9]|4[5-9]|5[0-3,5-9]|66|7[0-8]|9[89])[0-9]{8}$/.test(tel);
};
// 测试密码格式是否正确
var pwTest = function (tel) {
	if (/^\d{6,20}$/.test(tel)) return false;
	return /^\w{6,20}$/.test(tel);
};
export {
	captchaText,
	telLogin,
	pwLogin,
	setFormMsg,
	modeSwitch,
	telOutTest,
	pwOutTest,
};