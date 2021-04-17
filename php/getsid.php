<?php

include "conn.php";

//获取前端出入的sid，利用sql语句找到此条数据返回给前端
if(isset($_GET['dataSid'])){
    $sid = $_GET['dataSid'];
    $result=$conn->query("select * from shoplist where sid=$sid");//返回sid对应的一条数据
    //数据转换成json格式
    echo json_encode($result->fetch_assoc());
}