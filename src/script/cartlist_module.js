import {} from "https://cdn.bootcdn.net/ajax/libs/jquery/1.12.4/jquery.min.js";
import { href } from "./constant_module.js"; // 引入网址
var getCartlist = function () {
	let gId = localStorage.getItem("goodsSid").split(",");
	let gNum = localStorage.getItem("goodsNum").split(",");
	let cb = $(".cartlist_body");
	for (let index = 0; index < gId.length; index++) {
		$.ajax({
			url: href + "/php/getsid.php",
			data: {
				dataSid: gId[index],
			},
			dataType: "json",
			success: function (data) {
				if (data) {
					let newList = $(".cartlist_row:hidden").clone(true, true);
					newList.css("display", "flex");
					newList.attr("index", data.sid);
					newList
						.find(".cartlist_centent_text")
						.text(data.title)
						.prop(
							"href",
							href + "/src/detail.html?sid=" + gId[index]
						);
					newList.find(".carli_price_js").text(data.price);
					newList.find(".cartli_img").prop("src", data.picurl);

					newList
						.find(".cartli_number_cent")
						.val(gNum[index])
						.attr("index", data.sid);
					cb.append(newList);
					update();
				}
			},
		});
	}

	$(".alone_check").on("click", function () {
		if (
			$(".alone_check:visible").length ===
			$(".alone_check:checked").length - 1
		) {
			$(".all_check").prop("checked", true);
		} else {
			$(".all_check").prop("checked", false);
		}
		update();
	});
	$(".all_check").on("click", function () {
		if ($(this).is(":checked")) {
			$(".checkbox").prop("checked", true);
		} else {
			$(".checkbox").prop("checked", false);
		}
		update();
	});

	$(".cartli_number_jian").on("click", function () {
		let cart = $(this).siblings(".cartli_number_cent");
		if (cart.val() > 1) {
			cart.val(+cart.val() - 1);
		}
		gNum[gId.indexOf(cart.attr("index"))] = cart.val();
		update();
		updateLocalNum(gNum);
	});
	$(".cartli_number_jia").on("click", function () {
		let cart = $(this).siblings(".cartli_number_cent");
		cart.val(+cart.val() + 1);
		gNum[gId.indexOf(cart.attr("index"))] = cart.val();
		update();
		updateLocalNum(gNum);
	});

	$(".cartli_number_cent").on("input", function () {
		update();
	});

	$(".cartli_delete").on("click", function () {
		if (confirm("您确定要删除吗?")) {
			let cbp = $(this).parents(".cartlist_row");

			let i = gId.indexOf(cbp.attr("index"));
			gId.splice(i, 1);
			gNum.splice(i, 1);
			cbp.remove();
			updateLocal(gId, gNum);
		}
	});
	$(".cartlist_count_text_js").on("click", function () {
		if (confirm("您确定要删除选定项吗?")) {
			let cr = $(".cartlist_row:visible .alone_check:checked").parents(
				".cartlist_row"
			);
			console.log($(".cartlist_row:visible .alone_check:checked"));
			for (let index = 0; index < cr.length; index++) {
				const element = $(cr[index]);
				let i = gId.indexOf(element.attr("index"));
				element.remove();
				gId.splice(i, 1);
				gNum.splice(i, 1);
				updateLocal(gId, gNum);
			}
		}
	});
};
var updateLocal = function (gId, gNum) {
	updateLocalId(gId);
	updateLocalNum(gNum);
};
var updateLocalId = function (gId) {
	localStorage.setItem("goodsSid", gId);
};
var updateLocalNum = function (gNum) {
	localStorage.setItem("goodsNum", gNum);
};
var update = function () {
	let cnc = $(".cartlist_row:visible .cartli_number_cent"); // 数量
	let cni = $(".cartlist_row:visible .cartli_check>input"); // 选中框
	let cpj = $(".cartlist_row:visible .carli_price_js"); // 价格
	let ctp = $(".cartlist_row:visible .carli_total_price"); // 单件商品总价
	let ccj = $(".cartli_count_num_cent_js"); // 总价
	let total = 0;
	for (let index = 0; index < cni.length; index++) {
		const cnii = $(cni[index]); // 选中框
		const cnci = $(cnc[index]); // 数量
		const cpji = $(cpj[index]); // 价格
		const ctpi = $(ctp[index]); // 单件商品总价
		ctpi.text(cnci.val() * cpji.text());
		if (cnii.is(":checked")) {
			total += +ctpi.text();
		}
	}
	ccj.text(total);
};
export { getCartlist };
