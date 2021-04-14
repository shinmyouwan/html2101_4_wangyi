import {} from "https://cdn.bootcdn.net/ajax/libs/jquery/1.12.4/jquery.min.js";
import { href } from "./constant_module.js"; // 引入网址
// 验证码按钮
// 按下验证码按钮 btn 后, 将 box 的值设为服务器指定的验证码
var captchaText = function (btn, box) {
	btn.onclick = function () {
		$.ajax({
			url: href + "/php/captcha.php",
			success: (data) => {
				box.innerText = data;
			},
		});
	};
};
// 电话号码验证
// 单独验证电话号码, 返回成功才继续
var telCheckout = function (tel) {
	$.ajax({
		type: "post",
		url: href + "/php/checkout_Tel.php",
		data: {
			tel: tel,
		},
		success: (data) => {
			return data;
		},
		error: (data) => {},
	});
};
// 验证码登录按钮
// 按下登录按钮 btn 后, 将 tel: 手机号 和 yzm: 验证码 传递给服务器判断是否可以登录等操作
var telLogin = function (btn, tel, yzm) {
	btn.onclick = function () {
		if (telCheckout !== "102") {
			$.ajax({
				type: "post",
				url: href + "/php/yzm_login.php",
				data: {
					tel: tel.value,
					yzm: yzm.value,
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
		} else {
			console.log("手机号不存在");
		}
	};
};
// 密码登录按钮
// 按下登录按钮 btn 后, 将 tel: 手机号 和 pw: 密码 传递给服务器判断是否可以登录等操作
var pwLogin = function (btn, tel, pw) {
	btn.onclick = function () {
		if (telCheckout !== "102") {
			$.ajax({
				type: "post",
				url: href + "/php/pw_login.php",
				data: {
					tel: tel.value,
					pw: pw.value,
				},
				success: (data) => {
					setFormMsg(data);
				},
				error: (data) => {
					setFormMsg(data);
				},
			});
		} else {
			console.log("手机号不存在");
		}
	};
};
// 1 手机号为空
// 2 手机号在数据库不存在
// 10 验证码为空
// 11 验证码错误
// 20 密码为空
// 21 密码错误
// 100 注册成功
// 101 登录成功
var setFormMsg = (function () {
	// 闭包, 参数如果是标签则记录, 如果参数为字符串则处理并输出
	let box = null;
	return function (element) {
		if (Object.prototype.toString.call(element) === "[object String]") {
			switch (element) {
				case "1":
					box.innerText = "手机号为空";
					break;
				case "2":
					box.innerText = "手机号在数据库不存在";
					break;
				case "10":
					box.innerText = "验证码为空";
					break;
				case "11":
					box.innerText = "验证码错误";
					break;
				case "20":
					box.innerText = "密码为空";
					break;
				case "21":
					box.innerText = "密码错误";
					break;
				case "100":
					box.innerText = "注册成功";
					break;
				case "101":
					box.innerText = "登录成功";
					break;
				case "102":
					box.innerText = "手机号存在";
					break;
				default:
					console.log(element);
			}
		}
		if (
			Object.prototype.toString.call(element) ===
			"[object HTMLParagraphElement]"
		) {
			box = element;
		}
	};
})();
// 测试 box 里的电话是否规范
var telOutTest = function (box) {};
// 切换登录模式方法
var modeSwitch = function () {};
// 测试电话格式是否正确
var telTest = function (tel) {
	return /^1([38][0-9]|4[5-9]|5[0-3,5-9]|66|7[0-8]|9[89])[0-9]{8}$/.test(tel);
};
// 测试密码格式是否正确
var pwTest = function (tel) {
	if (/^\d{6,20}$/.test(tel)) return false;
	return /^\w{6,20}$/.test(tel);
};
export { captchaText, telLogin, pwLogin, setFormMsg, modeSwitch };
