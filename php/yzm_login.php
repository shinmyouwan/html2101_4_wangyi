<?php

include "conn.php"; //数据库连接
session_start();


if (!isset($_POST['tel'])) {
    echo 1;
} else if (!isset($_POST['yzm']) || $_POST['yzm'] == "") {
    // 如果验证码为空, 会报错
    echo 10;
} else {
    $tel = $_POST['tel'];
    $yzm = $_POST['yzm'];
    if (strtolower($_SESSION["captcha"]) == strtolower($yzm)) {
        $result = $conn->query("select * from registry where tel='$tel'");
        if ($result->fetch_assoc()) {
            echo 101;
        } else {
            $conn->query("insert into registry value(null,'wy',null,'$tel',NOW())");
            echo 100;
        }
    } else {
        echo 11;
    }
}
