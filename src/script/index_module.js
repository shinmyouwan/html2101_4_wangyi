import {} from "https://cdn.bootcdn.net/ajax/libs/jquery/1.12.4/jquery.min.js";
import {} from "https://cdn.bootcdn.net/ajax/libs/jquery.lazyload/1.9.1/jquery.lazyload.min.js";
import { href } from "./constant_module.js"; // 引入网址
var getIndex = function () {
	let contentData = {
		cont: [
			{
				title: "运动户外",
				resou: [
					"阿迪达斯",
					"耐克",
					"斯凯奇",
					"安德玛"
				],
				cLeft: "https://kaola-haitao.oss.kaolacdn.com/4O1yWA5GGK2deliT06U9x6wSNf_330_542T1811012029_330_542.jpg?x-oss-process=image/resize,w_330/quality,q_95",
				cCenter: [
					"https://kaola-haitao.oss.kaolacdn.com/Mw0P2sxDT1t6CO1WSBJz1T1811012031_180_144.jpg?x-oss-process=image/resize,w_180/quality,q_95"
				],
				cRight: [
					"https://kaola-pop.oss.kaolacdn.com/d50d2e71a0964b23a6cd15f2b3a56217_800_800.jpg?x-oss-process=image/resize,w_75/quality,q_95",
					"https://kaola-haitao.oss.kaolacdn.com/f3547adfa17d465982ed3d09a113f7a51541409163257jo437u9313967.jpg?x-oss-process=image/resize,w_75/quality,q_95",
					"https://kaola-pop.oss.kaolacdn.com/f6075e08544447eb8cbcc6b20b9e3919_800_800.jpg?x-oss-process=image/resize,w_75/quality,q_95"
				],
				cBottom: [
					"https://kaola-haitao.oss.kaolacdn.com/ii02po4970_300_300.jpg?x-oss-process=image/resize,w_120/quality,q_95"
				]
			},
			{
				title: "美妆专区",
				resou: [
					"面膜",
					"面膜",
					"面膜",
					"面膜"
				],
				cLeft: "https://kaola-haitao.oss.kaolacdn.com/baf3e28a-5f93-4afa-8170-5d0de7595c3fT19010151349_330_542.jpg?x-oss-process=image/resize,w_330/quality,q_95",
				cCenter: [
					"https://kaola-haitao.oss.kaolacdn.com/2bEI4TPTFTbcefQgssLIT1811261707_180_144.jpg?x-oss-process=image/resize,w_180/quality,q_95"
				],
				cRight: [
					"https://kaola-haitao.oss.kaolacdn.com/1999fb01d7ba4074a3be3def56009286161649696690316C49F9E02EDA58676FAA004E3553D0C.jpg?x-oss-process=image/resize,w_75/quality,q_95",
					"https://kaola-pop.oss.kaolacdn.com/6c3ae568da0147e79d0209e1c14faf97_800_800.jpg?x-oss-process=image/resize,w_75/quality,q_95",
					"https://kaola-haitao.oss.kaolacdn.com/f6301175f47e492ab18a7962a99d32761565262946012jz2l56ti11741.jpg?x-oss-process=image/resize,w_75/quality,q_95"
				],
				cBottom: [
					"https://kaola-haitao.oss.kaolacdn.com/1bk8ndmup45_300_300.jpg?x-oss-process=image/resize,w_120/quality,q_95"
				]
			},
			{
				title: "个人家清",
				resou: [
					"秀发滋养",
					"秀发滋养",
					"秀发滋养",
					"秀发滋养"
				],
				cLeft: "https://kaola-haitao.oss.kaolacdn.com/ea4c0ff8-83af-495d-8823-0c96642370bbT2001201852_330_542.jpg?x-oss-process=image/resize,w_330/quality,q_95",
				cCenter: [
					"https://kaola-haitao.oss.kaolacdn.com/add22730-9873-4a9d-b2b0-676d04d1c496T2005111157_180_144.jpg?x-oss-process=image/resize,w_180/quality,q_95"
				],
				cRight: [
					"https://kaola-haitao.oss.kaolacdn.com/9f43b28130e2418283d5778a3e0eb18a1578623515277k57jok1l10149.jpg?x-oss-process=image/resize,w_75/quality,q_95",
					"https://kaola-haitao.oss.kaolacdn.com/fca289f9c45742668c697541a8cb016715913290449246668D143C0C5DA2FA2354BC82A9F3EA5.jpg?x-oss-process=image/resize,w_75/quality,q_95",
					"https://kaola-haitao.oss.kaolacdn.com/973ecd5a1d084b10a20e44b90502686415913288035992E94D7C8DEA5B3A3263D1602391340FC.jpg?x-oss-process=image/resize,w_75/quality,q_95"
				],
				cBottom: [
					"https://kaola-haitao.oss.kaolacdn.com/ieww1xa027_300_300.jpg?x-oss-process=image/resize,w_120/quality,q_95"
				]
			},
			{
				title: "奢品馆",
				resou: [
					"GUCCI",
					"GUCCI",
					"GUCCI",
					"GUCCI",
					"GUCCI",
					"GUCCI"
				],
				cLeft: "https://kaola-haitao.oss.kaolacdn.com/8afaae29-a31c-4dab-b89d-138b2f70fee4T21011116010_330_542.jpg?x-oss-process=image/resize,w_330/quality,q_95",
				cCenter: [
					"https://kaola-haitao.oss.kaolacdn.com/69f487ad-3f20-4cd5-ba28-87d922c7a8c2T1909161114_180_144.jpg?x-oss-process=image/resize,w_180/quality,q_95"
				],
				cRight: [
					"https://kaola-pop.oss.kaolacdn.com/633b29006b1c482b836c261b49f4076c_800_800.jpg?x-oss-process=image/resize,w_75/quality,q_95",
					"https://kaola-pop.oss.kaolacdn.com/da505073-a6a0-4228-a207-817c0d1cedf6?x-oss-process=image/resize,w_75/quality,q_95",
					"https://kaola-haitao.oss.kaolacdn.com/902463bbb73c41ddb8f0fd48383303911576677568018k4bd45i610161.jpg?x-oss-process=image/resize,w_75/quality,q_95"
				],
				cBottom: [
					"https://kaola-haitao.oss.kaolacdn.com/j1hk9xa040_300_300.jpg?x-oss-process=image/resize,w_120/quality,q_95"
				]
			},
			{
				title: "手表配饰",
				resou: [
					"施华洛世奇",
					"施华洛世奇",
					"施华洛世奇",
					"施华洛世奇"
				],
				cLeft: "https://kaola-haitao.oss.kaolacdn.com/7ShrbiO5blFkRpBisIbCT1811271509_330_542.jpg?x-oss-process=image/resize,w_330/quality,q_95",
				cCenter: [
					"https://kaola-haitao.oss.kaolacdn.com/Mw0P2sxDT1t6CO1WSBJz1T1811012031_180_144.jpg?x-oss-process=image/resize,w_180/quality,q_95"
				],
				cRight: [
					"https://kaola-pop.oss.kaolacdn.com/d50d2e71a0964b23a6cd15f2b3a56217_800_800.jpg?x-oss-process=image/resize,w_75/quality,q_95",
					"https://kaola-haitao.oss.kaolacdn.com/f3547adfa17d465982ed3d09a113f7a51541409163257jo437u9313967.jpg?x-oss-process=image/resize,w_75/quality,q_95",
					"https://kaola-pop.oss.kaolacdn.com/f6075e08544447eb8cbcc6b20b9e3919_800_800.jpg?x-oss-process=image/resize,w_75/quality,q_95"
				],
				cBottom: [
					"https://kaola-haitao.oss.kaolacdn.com/ii02po4970_300_300.jpg?x-oss-process=image/resize,w_120/quality,q_95"
				]
			},
			{
				title: "美食生鲜",
				resou: [
					"巧克力",
					"巧克力",
					"巧克力",
					"巧克力"
				],
				cLeft: "https://kaola-haitao.oss.kaolacdn.com/yS4rMviMybWqfgScidc9PCfxd8T1811272039_330_542.jpg?x-oss-process=image/resize,w_330/quality,q_95",
				cCenter: [
					"https://kaola-haitao.oss.kaolacdn.com/Mw0P2sxDT1t6CO1WSBJz1T1811012031_180_144.jpg?x-oss-process=image/resize,w_180/quality,q_95"
				],
				cRight: [
					"https://kaola-pop.oss.kaolacdn.com/d50d2e71a0964b23a6cd15f2b3a56217_800_800.jpg?x-oss-process=image/resize,w_75/quality,q_95",
					"https://kaola-haitao.oss.kaolacdn.com/f3547adfa17d465982ed3d09a113f7a51541409163257jo437u9313967.jpg?x-oss-process=image/resize,w_75/quality,q_95",
					"https://kaola-pop.oss.kaolacdn.com/f6075e08544447eb8cbcc6b20b9e3919_800_800.jpg?x-oss-process=image/resize,w_75/quality,q_95"
				],
				cBottom: [
					"https://kaola-haitao.oss.kaolacdn.com/ii02po4970_300_300.jpg?x-oss-process=image/resize,w_120/quality,q_95"
				]
			},
			{
				title: "服饰鞋靴",
				resou: [
					"阿玛尼",
					"阿玛尼",
					"阿玛尼",
					"阿玛尼"
				],
				cLeft: "https://kaola-haitao.oss.kaolacdn.com/bea0bb34-ad80-4d9c-8451-15970511d69bT19010111903_330_542.jpg?x-oss-process=image/resize,w_330/quality,q_95",
				cCenter: [
					"https://kaola-haitao.oss.kaolacdn.com/Mw0P2sxDT1t6CO1WSBJz1T1811012031_180_144.jpg?x-oss-process=image/resize,w_180/quality,q_95"
				],
				cRight: [
					"https://kaola-pop.oss.kaolacdn.com/d50d2e71a0964b23a6cd15f2b3a56217_800_800.jpg?x-oss-process=image/resize,w_75/quality,q_95",
					"https://kaola-haitao.oss.kaolacdn.com/f3547adfa17d465982ed3d09a113f7a51541409163257jo437u9313967.jpg?x-oss-process=image/resize,w_75/quality,q_95",
					"https://kaola-pop.oss.kaolacdn.com/f6075e08544447eb8cbcc6b20b9e3919_800_800.jpg?x-oss-process=image/resize,w_75/quality,q_95"
				],
				cBottom: [
					"https://kaola-haitao.oss.kaolacdn.com/ii02po4970_300_300.jpg?x-oss-process=image/resize,w_120/quality,q_95"
				]
			},
			{
				title: "家居生活",
				resou: [
					"碧然德",
					"碧然德",
					"碧然德",
					"碧然德"
				],
				cLeft: "https://kaola-haitao.oss.kaolacdn.com/4e33f8d0-6ff3-4053-a4d2-0f6c487438e7T1908091341_330_542.jpg?x-oss-process=image/resize,w_330/quality,q_95",
				cCenter: [
					"https://kaola-haitao.oss.kaolacdn.com/Mw0P2sxDT1t6CO1WSBJz1T1811012031_180_144.jpg?x-oss-process=image/resize,w_180/quality,q_95"
				],
				cRight: [
					"https://kaola-pop.oss.kaolacdn.com/d50d2e71a0964b23a6cd15f2b3a56217_800_800.jpg?x-oss-process=image/resize,w_75/quality,q_95",
					"https://kaola-haitao.oss.kaolacdn.com/f3547adfa17d465982ed3d09a113f7a51541409163257jo437u9313967.jpg?x-oss-process=image/resize,w_75/quality,q_95",
					"https://kaola-pop.oss.kaolacdn.com/f6075e08544447eb8cbcc6b20b9e3919_800_800.jpg?x-oss-process=image/resize,w_75/quality,q_95"
				],
				cBottom: [
					"https://kaola-haitao.oss.kaolacdn.com/ii02po4970_300_300.jpg?x-oss-process=image/resize,w_120/quality,q_95"
				]
			},
			{
				title: "数码家电",
				resou: [
					"电动牙刷",
					"电动牙刷",
					"电动牙刷",
					"电动牙刷"
				],
				cLeft: "https://kaola-haitao.oss.kaolacdn.com/w9QMIELQZvS6g0t6AStTT1811261533_330_542.png?x-oss-process=image/resize,w_330/quality,q_95",
				cCenter: [
					"https://kaola-haitao.oss.kaolacdn.com/Mw0P2sxDT1t6CO1WSBJz1T1811012031_180_144.jpg?x-oss-process=image/resize,w_180/quality,q_95"
				],
				cRight: [
					"https://kaola-pop.oss.kaolacdn.com/d50d2e71a0964b23a6cd15f2b3a56217_800_800.jpg?x-oss-process=image/resize,w_75/quality,q_95",
					"https://kaola-haitao.oss.kaolacdn.com/f3547adfa17d465982ed3d09a113f7a51541409163257jo437u9313967.jpg?x-oss-process=image/resize,w_75/quality,q_95",
					"https://kaola-pop.oss.kaolacdn.com/f6075e08544447eb8cbcc6b20b9e3919_800_800.jpg?x-oss-process=image/resize,w_75/quality,q_95"
				],
				cBottom: [
					"https://kaola-haitao.oss.kaolacdn.com/ii02po4970_300_300.jpg?x-oss-process=image/resize,w_120/quality,q_95"
				]
			},
			{
				title: "母婴专区",
				resou: [
					"花王旗舰",
					"花王旗舰",
					"花王旗舰",
					"花王旗舰"
				],
				cLeft: "https://kaola-haitao.oss.kaolacdn.com/PqSa1JgeRiGhlQcpKNu7T1811261632_330_542.jpg?x-oss-process=image/resize,w_330/quality,q_95",
				cCenter: [
					"https://kaola-haitao.oss.kaolacdn.com/Mw0P2sxDT1t6CO1WSBJz1T1811012031_180_144.jpg?x-oss-process=image/resize,w_180/quality,q_95"
				],
				cRight: [
					"https://kaola-pop.oss.kaolacdn.com/d50d2e71a0964b23a6cd15f2b3a56217_800_800.jpg?x-oss-process=image/resize,w_75/quality,q_95",
					"https://kaola-haitao.oss.kaolacdn.com/f3547adfa17d465982ed3d09a113f7a51541409163257jo437u9313967.jpg?x-oss-process=image/resize,w_75/quality,q_95",
					"https://kaola-pop.oss.kaolacdn.com/f6075e08544447eb8cbcc6b20b9e3919_800_800.jpg?x-oss-process=image/resize,w_75/quality,q_95"
				],
				cBottom: [
					"https://kaola-haitao.oss.kaolacdn.com/ii02po4970_300_300.jpg?x-oss-process=image/resize,w_120/quality,q_95"
				]
			},
			{
				title: "营养保健",
				resou: [
					"女性健康",
					"女性健康",
					"女性健康",
					"女性健康"
				],
				cLeft: "https://kaola-haitao.oss.kaolacdn.com/2b442d8f-d886-4916-a84b-1e93d5af8801T1912021646_330_542.jpg?x-oss-process=image/resize,w_330/quality,q_95",
				cCenter: [
					"https://kaola-haitao.oss.kaolacdn.com/Mw0P2sxDT1t6CO1WSBJz1T1811012031_180_144.jpg?x-oss-process=image/resize,w_180/quality,q_95"
				],
				cRight: [
					"https://kaola-pop.oss.kaolacdn.com/d50d2e71a0964b23a6cd15f2b3a56217_800_800.jpg?x-oss-process=image/resize,w_75/quality,q_95",
					"https://kaola-haitao.oss.kaolacdn.com/f3547adfa17d465982ed3d09a113f7a51541409163257jo437u9313967.jpg?x-oss-process=image/resize,w_75/quality,q_95",
					"https://kaola-pop.oss.kaolacdn.com/f6075e08544447eb8cbcc6b20b9e3919_800_800.jpg?x-oss-process=image/resize,w_75/quality,q_95"
				],
				cBottom: [
					"https://kaola-haitao.oss.kaolacdn.com/ii02po4970_300_300.jpg?x-oss-process=image/resize,w_120/quality,q_95"
				]
			}
		]
	};
	let html = $("html");
	let contLeft = $(".cont_left"); // 左侧浮动框主体
	let contLLi = $(".cont_l_li"); // 左侧浮动框列表
	let indexCentWrap = $(".index_cent_wrap"); // 内容主体框架
	let contentModuleHide = $(".content_module:hidden"); // 用户克隆的隐藏内容
	for (let index = 0; index < contentData.cont.length; index++) {
		const element = contentData.cont[index];
		let str = "";
		// 克隆
		const cmc = contentModuleHide.clone();
		// 设置标题
		cmc.find(".cm_title").text(element.title);
		// 设置热搜词
		for (const iterator of element.resou) {
			str += `<a href="#" class="cm_small_a">${iterator}</a>`;
		}
		str += `<a href="#" class="cm_more_btn">更多好货</a>`;
		cmc.find(".cm_top").append(str);
		// 左侧图片
		cmc.find(".cm_left img").attr("data-original", element.cLeft);
		// 中间图片
		for (let index = 0; index < 4; index++) {
			cmc.find(".cm_center img").eq(index).attr("data-original", element.cCenter[0]);
		}
		// 右侧图片
		for (let index = 0; index < element.cRight.length; index++) {
			cmc.find(".cm_right").eq(index).find("img").attr("data-original", element.cRight[index]);
		}
		// 底部图片
		for (let index = 0; index < 5; index++) {
			cmc.find(".cm_b_ul img").eq(index).attr("data-original", element.cBottom[0]);
		}
		cmc.show();
		if (index < 1) {
			indexCentWrap.prepend(cmc);
		} else {
			indexCentWrap.append(cmc);
		}
		$("img.lazy").lazyload({ effect: "fadeIn" });
	}
	
	// 渲染首页数据
	// 滚动判断浮动效果
	window.onscroll = function () {
		let s = html.scrollTop();
		if (s > 80) {
			$(".head_cent").addClass("head_cent_flxed");
		} else {
			$(".head_cent").removeClass("head_cent_flxed");
		}
		if (s > 646) {
			$(".cont_left, .cont_right").css("top", "70px");
			$(".cont_left, .cont_right").css("position", "fixed");
		} else {
			$(".cont_left, .cont_right").css("top", "20px");
			$(".cont_left, .cont_right").css("position", "absolute");
		}
	};
	// 轮播图控制属性和方法
	let imgIndex = 0;
	let maxIndex = 2;
	let lunboTimer = null;
	let cb = $(".cotl_btn"); // 轮播图下方控制按钮
	let cl = $(".cotl_left"); // 轮播图左侧控制
	let cr = $(".cotl_right"); // 轮播图右侧控制
	let crlt = $(".cont_r_li_top"); // 右侧浮动框按钮
	let imgLi = $(".img_li"); // 轮播图图片
	let clh = $(".cont_l_hot"); // 左侧浮动栏的 
	// 同时改变图片和下方按钮, 会对参数进行处理, 保证取值在 0 - 2 之间
	let changeImgAndBtn = function (i) {
		if (i !== imgIndex) {
			imgLi.eq(imgIndex).fadeOut(300);
			cb.eq(imgIndex).css("background-color", "rgb(255,255,255)");
			if (i < 0) {
				imgIndex = maxIndex;
				i = imgIndex;
			} else if (i > maxIndex) {
				imgIndex = 0;
				i = imgIndex;
			} else {
				imgIndex = i;
			}
			imgLi.eq(imgIndex).fadeIn(300); //淡入
			cb.eq(imgIndex).css("background-color", "rgb(255,35,55)");
		}
	};
	// 热门品牌按钮
	clh.on("click", function () {
		html.scrollTop(
			+$(".content_hot_module")
				.offset().top - 60
		);
	});
	// 电梯按钮
	contLLi.on("click", function () {
		html.scrollTop(
			+$(".content_module:visible")
				.eq($(this).index("p") - 1)
				.offset().top - 60
		);
	});
	// 返回首页按钮
	crlt.on("click", function () {
		html.scrollTop(0);
	});


	// 轮播图计时
	let timerSet = function () {
		window.clearInterval(lunboTimer);
		lunboTimer = window.setInterval(function () {
			changeImgAndBtn(imgIndex + 1);
		}, 2333);
	};
	timerSet();
	// 轮播图效果底部按钮
	cb.hover(
		function () {
			changeImgAndBtn($(this).index());
			window.clearInterval(lunboTimer);
		},
		function () {
			timerSet();
		}
	);
	// 轮播图效果-
	cl.on("click", function () {
		changeImgAndBtn(imgIndex - 1);
		timerSet();
	});
	// 轮播图效果+
	cr.on("click", function () {
		changeImgAndBtn(imgIndex + 1);
		timerSet();
	});
};
export { getIndex };
