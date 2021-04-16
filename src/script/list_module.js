import {} from "https://cdn.bootcdn.net/ajax/libs/jquery/1.12.4/jquery.min.js";
import {} from "https://cdn.bootcdn.net/ajax/libs/jquery.lazyload/1.9.1/jquery.lazyload.min.js";
import { href } from "./constant_module.js"; // 引入网址
import {} from "./jquery.pagination.js"; //引入分页插件
let sid = location.search.substring(1).split("=")[1];
if (!sid) {
	sid = 1;
}
var getList = function () {
	let mod = 0;
    let array_list = [];
    let array_list_price = [];
	$.ajax({
		type: "get",
		url: href + "/php/list.php",
		data: {
			page: sid,
		},
		success: (data) => {
			let json = JSON.parse(data);
            array_list = json.pagecontent;
            setHtml(array_list);
            
            $(".page").pagination({
                // pageCount: 16, // 总页数
                pageCount: json.pagesize, // 总页数
                jump: false, // 是否显示跳转
                current: sid,
                keepShowPN: true, // 是否一直显示上下页 
                prevContent: "上一页", // 上一页的样式
                nextContent: "下一页", // 下一页的样式
                coping: true, // 是否显示首尾页
                homePage: "1", // 首页显示
                endPage: String(json.pagesize), // "尾页显示"
                // mode: "fixed",
                count: 4,
                callback: function (api) {
                    window.location.search = "?sid=" + api.getCurrent();
                },
                })
		},
    });
    $(".paging_num_btn").on("click", function () {
        
    })
	// 恢复默认排序
    $(".goods_sort_btn_def")
        .on("click", function () {
            mod = 0;
            setHtml(array_list);
        })
	// 进行排序
	$(".goods_sort_btn_price")
        .on("click", function () {
            if (mod = 0) {
                mod = 1;
            } else if (mod = 1) {
                mod = 2;
            } else if (mod = 2) {
                mod = 1;
            }
            array_list_price = array_list.concat();
            for (let i = 0, l = array_list_price.length - 1; i < l; i++) {
                for (let j = 0, l = array_list_price.length - 1 - i; j < l; j++) {
                    if (Number(array_list_price[j]["price"]) > Number(array_list_price[j + 1]["price"])) {
                        let t = array_list_price[j];
                        array_list_price[j] = array_list_price[j + 1];
                        array_list_price[j + 1] = t;
                    }
                }
            }
            setHtml(array_list_price);
        });
    
};
var setHtml = function (liarr) {
    
    let str = '';
    for (const iterator of liarr) {
        str += `
        <li class="li_goods">
            <div class="goods_wrap">
                <a href=detail.html?sid=${iterator.sid} class="goods_imga">
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
                    <a  href=detail.html?sid=${iterator.sid} class="goods_title_a">${iterator.title}</a>
                </div>
            </div>
        </li>`
    }
    $(".list_goods").html(str);
    $("img.lazy").lazyload({ effect: "fadeIn" });
};
export { getList };
