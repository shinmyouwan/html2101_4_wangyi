<?php

include "conn.php"; //数据库连接
if (!isset($_POST['tel'])) {
    echo 1;
} else {
    $tel = $_POST['tel'];
    $result = $conn->query("select * from registry where tel='$tel'");
    if (!($result->fetch_assoc())) {
        echo 2;
    } else {
        echo 102;
    }
}
