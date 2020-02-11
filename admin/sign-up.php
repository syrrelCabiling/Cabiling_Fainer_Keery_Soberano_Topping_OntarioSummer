<?php
    require_once '../functions.php';
    require_once '../connect.php';

if (isset($_POST['submit'])) {

    $first_name = trim($_POST['first-name']);
    $last_name = trim($_POST['last-name']);
    $email = trim($_POST['email']);
    $country = trim($_POST['country']);

    if (!empty($first_name) && !empty($last_name) && !empty($email) && !empty($country)) {
        // Submit form
        register($first_name, $last_name, $email, $country);
    } else {
        $message = "<p>Please fill out the required fields.</p>";
    }
}
?>