import {} from "https://cdn.bootcdn.net/ajax/libs/jquery/1.12.4/jquery.min.js";
import {} from "https://cdn.bootcdn.net/ajax/libs/jquery.lazyload/1.9.1/jquery.lazyload.min.js";
import { href } from "./constant_module.js"; // 引入网址
import {} from "./jquery.pagination.js"; //引入分页插件
var getList = function () {
	$.ajax({
		type: "get",
		url: href + "/php/list.php",
		data: {},
		success: (data) => {
			var json = JSON.parse(data);

			let lg = $(".list_goods");
			let str = "";
			for (const iterator of json.pagecontent) {
				console.log(iterator);
				str += `
                <li class="li_goods">
                <div class="goods_wrap">
                    <a href="${iterator.sid}" class="goods_imga">
                        <img data-original="${iterator.picurl}" alt="" class="lazy">
                    </a>
                    <div class="goods_switch clear">
                        <img data-original="${iterator.picurl}" alt="" class="lazy">
                    </div>
                    <div class="goods_price">
                        <i class="price_i">¥</i>
                        <span class="price_show">${iterator.price}</span>
                    </div>
                    <div class="goods_title">
                        <a  href="${iterator.sid}" class="goods_title_a">${iterator.title}</a>
                    </div>
                </div>
            </li>
            `;
			}
			lg.html(str);
			// 图片懒加载
			$(function () {
				$("img.lazy").lazyload({ effect: "fadeIn" });
			});
		},
		error: (data) => {
			console.log(data);
			console.log("getList:error: " + data);
		},
	});
};
export { getList };
