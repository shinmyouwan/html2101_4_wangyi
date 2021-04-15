import {
	captchaText,
	telLogin,
	pwLogin,
	modeSwitch,
	telOutTest,
	pwOutTest,
} from "http://10.31.157.37/src/script/login_module.js";
import { getList } from "http://10.31.157.37/src/script/list_module.js";

// 参数之前用的是 ID 选择器, 需要重新修改
if (document.querySelector(".login")) {
	captchaText();
	telLogin();
	pwLogin();
	modeSwitch();
	telOutTest();
	pwOutTest();
} else if (document.querySelector(".list")) {
	getList();
}
