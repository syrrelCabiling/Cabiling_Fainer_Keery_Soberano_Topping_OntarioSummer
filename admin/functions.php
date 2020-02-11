<?php
    require('connect.php');

    function register($conn, $first_name, $last_name, $email, $country) {
        $table = "table_users";
        $register_query = "INSERT INTO tbl_users VALUES ('$first_name', '$lastname', '$email', '$country')";
        $runQuery = $conn->query($register_query);

        echo "Registered";
    }
?>