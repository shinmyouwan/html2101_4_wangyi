import {} from "https://cdn.bootcdn.net/ajax/libs/jquery/1.12.4/jquery.min.js";
import {} from "https://cdn.bootcdn.net/ajax/libs/jquery.lazyload/1.9.1/jquery.lazyload.min.js";
import { href } from "./constant_module.js"; // 引入网址
let sid = location.search.substring(1).split("=")[1];
if (!sid) {
	sid = 1;
}
let timer = null;
var getDetail = function () {
	let ps = $(".product_simg_box"); // 缩放图盒子
	let pt = $(".product_title");
	let pcn = $(".product_ct_num");
	let dt = $(".detail_title");
	$.ajax({
		url: href + "/php/getsid.php",
		data: {
			dataSid: sid,
		},
		dataType: "json",
		success: function (data) {
			if (data) {
				$(".product_img_big, .product_img_cent").prop(
					"src",
					data.picurl
				);
				dt.text(data.title);
				pt.text(data.title);
				pcn.text(data.price);
				let strarr = data.piclisturl;
				if (strarr) {
					strarr = strarr.split(",");
					for (const li of strarr) {
						let str = `<img src="${li}" alt="">`;
						ps.append(str);
					}
				} else {
					ps.append(`<img src="${data.picurl}" alt="">`);
				}
				setDetail();
			}
		},
	});
};
var setDetail = function () {
	let pif = $(".product_img_f"); // 小放
	let pic = $(".product_img_cent"); // 小图
	let pih = $(".product_img_hide"); // 大放
	let pib = $(".product_img_big"); // 大图
	let ps = $(".product_simg_box"); // 缩放图盒子
	let psi = $(".product_simg_box>img"); // 缩放图列表
	let sX = pih.width() / pif.width();
	let sY = pih.height() / pif.height();
	let pifw = pif.width() / 2;
	let pifh = pif.height() / 2;
	let picPosition = pic.offset();
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
		pif.css("top", y);
		pif.css("left", x);
		pib.css("top", -sY * y);
		pib.css("left", -sX * x);
	});
	let img;
	psi.hover(function () {
		psi.removeClass("product_simg_active");
		img = $(this);
		img.addClass("product_simg_active");
		let strarr = img.prop("src").split(",w_64");
		strarr.splice(1, 0, ",w_800");
		$(".product_img_big, .product_img_cent").prop("src", strarr.join(""));
	});
	$(".product_simg_next").on("click", function () {
		let psa = $(".product_simg_active");
		let index = psi.index(psa);
		if (index < psi.length - 1) {
			$(psi[index]).removeClass("product_simg_active");
			$(psi[index + 1]).addClass("product_simg_active");
			let strarr = $(psi[index + 1])
				.prop("src")
				.split(",w_64");
			strarr.splice(1, 0, ",w_800");
			$(".product_img_big, .product_img_cent").prop(
				"src",
				strarr.join("")
			);
			let left = +ps.css("left").split("px")[0];
			if (left > (psi.length - 4) * -80) ps.css("left", left - 80 + "px");
		}
	});
	$(".product_simg_pre").on("click", function () {
		let psa = $(".product_simg_active");
		let index = psi.index(psa);
		if (index > 0) {
			$(psi[index]).removeClass("product_simg_active");
			$(psi[index - 1]).addClass("product_simg_active");
			let strarr = $(psi[index - 1])
				.prop("src")
				.split(",w_64");
			strarr.splice(1, 0, ",w_800");
			$(".product_img_big, .product_img_cent").prop(
				"src",
				strarr.join("")
			);
			let left = +ps.css("left").split("px")[0];
			if (left < 0) ps.css("left", left + 80 + "px");
		}
	});
	let pnc = $(".product_number_cent");
	$(".product_number_jian").on("click", function () {
		let cartNum = pnc.val();
		if (cartNum > 1) {
			pnc.val(+cartNum - 1);
		}
	});
	$(".product_number_jia").on("click", function () {
		let cartNum = pnc.val();
		pnc.val(+cartNum + 1);
	});
	$(".product_cart").on("click", function () {
		let gId = localStorage.getItem("goodsSid");
		let gNum = localStorage.getItem("goodsNum");
		if (!gId || !gNum) {
			gId = [];
			gNum = [];
		} else {
			gId = gId.split(",");
			gNum = gNum.split(",");
		}
		let pnc = $(".product_number_cent");
		if (gId.indexOf(sid) === -1) {
			gId.push(sid);
			gNum.push(pnc.val());
		} else {
			let index = gId.indexOf(sid);
			gNum[index] = +gNum[index] + +pnc.val();
		}
		localStorage.setItem("goodsSid", gId);
		localStorage.setItem("goodsNum", gNum);
	});
};
export { getDetail };
