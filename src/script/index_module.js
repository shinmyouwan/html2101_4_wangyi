import {} from "https://cdn.bootcdn.net/ajax/libs/jquery/1.12.4/jquery.min.js";
import {} from "https://cdn.bootcdn.net/ajax/libs/jquery.lazyload/1.9.1/jquery.lazyload.min.js";
import { href } from "./constant_module.js"; // 引入网址
var getIndex = function () {
	let html = $("html");
	console.log(0);
	window.onscroll = function () {
		console.log(html.scrollTop());
		if (html.scrollTop() > 80) {
			$(".head_cent").addClass("head_cent_flxed");
		} else {
			$(".head_cent").removeClass("head_cent_flxed");
		}
	};
};
export { getIndex };
