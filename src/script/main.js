import {
	captchaText,
	telLogin,
	pwLogin,
	modeSwitch,
	telOutTest,
	pwOutTest,
} from "./login_module.js";
import { getList } from "./list_module.js";
import { getDetail } from "./detail_module.js";
import { getCartlist } from "./cartlist_module.js";
import { getIndex } from "./index_module.js";

// 参数之前用的是 ID 选择器, 需要重新修改
if (document.querySelector("#login")) {
	captchaText();
	telLogin();
	pwLogin();
	modeSwitch();
	telOutTest();
	pwOutTest();
} else if (document.querySelector("#list")) {
	getList();
} else if (document.querySelector("#detail")) {
	getDetail();
} else if (document.querySelector("#cartlist")) {
	getCartlist();
} else if (document.querySelector("#index")) {
	getIndex();
}
