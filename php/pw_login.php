<?php

include "conn.php"; //数据库连接


if (!isset($_POST['tel'])) {
    echo false;
} else if (!isset($_POST['pw'])) {
    echo false;
} else {
    $tel = $_POST['tel'];
    $pw = $_POST['pw'];
    $result = $conn->query("select * from registry where tel='$tel' and password='$pw'");
    if (!($result->fetch_assoc())) {
        echo false;
    } else {
        echo true;
    }
}
