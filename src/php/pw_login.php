<?php

include "conn.php"; //数据库连接


if (!isset($_POST['tel'])) {
    echo 1;
} else if (!isset($_POST['pw'])) {
    echo 20;
} else {
    $tel = $_POST['tel'];
    $pw = $_POST['pw'];
    $result = $conn->query("select * from registry where tel='$tel' and password='$pw'");
    if (!($result->fetch_assoc())) {
        echo 21;
    } else {
        echo 101;
    }
}
