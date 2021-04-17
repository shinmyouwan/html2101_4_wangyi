import {} from "https://cdn.bootcdn.net/ajax/libs/jquery/1.12.4/jquery.min.js";
import {} from "https://cdn.bootcdn.net/ajax/libs/jquery.lazyload/1.9.1/jquery.lazyload.min.js";
import { href } from "./constant_module.js"; // 引入网址
let sid = location.search.substring(1).split("=")[1];
if (!sid) {
	sid = 1;
}
let timer = null;
var getDetail = function () {
	let pif = $(".product_img_f"); // 小放
	let pic = $(".product_img_cent"); // 小图
	let pih = $(".product_img_hide"); // 大放
	let pib = $(".product_img_big"); // 大图
	let sX = pih.width() / pif.width();
	let sY = pih.height() / pif.height();
	let pifw = pif.width() / 2;
	let pifh = pif.height() / 2;
	let picPosition = pic.offset();
	$.ajax({
		url: href + "/php/getsid.php",
		data: {
			dataSid: sid,
		},
		dataType: "json",
		success: function (data) {
			console.log(data);
		},
	});
	$(".product_img_box").hover(
		function () {
			pif.show();
			pih.show();
		},
		function () {
			pif.hide();
			pih.hide();
		}
	);
	$(".product_img_box").on("mousemove", function (event) {
		let x = event.pageX - picPosition.left - pifh;
		let y = event.pageY - picPosition.top - pifw;
		if (x < 0) {
			x = 0;
		} else if (x > 200) {
			x = 200;
		}
		if (y < 0) {
			y = 0;
		} else if (y > 200) {
			y = 200;
		}
		if ($(event.target)) pif.css("top", y);
		pif.css("left", x);
	});
};
export { getDetail };
