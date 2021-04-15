<?php

/**
 * 数字验证码生成
 */
// 开启session
session_start();


// 创建一个4位验证码
$captcha = mt_rand(1000, 9999);
$_SESSION["captcha"] = $captcha;


// 输出
echo $_SESSION["captcha"];
