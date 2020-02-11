<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);


    require_once 'connect.php';
    require_once 'functions.php';

if (isset($_POST['submit'])) {

    $first_name = trim($_POST['first-name']);
    $last_name = trim($_POST['last-name']);
    $email = trim($_POST['email']);
    $country = trim($_POST['country']);

    register($first_name, $last_name, $email, $country);

    // if (!empty($first_name) && !empty($last_name) && !empty($email) && !empty($country)) {
        
    //     register($first_name, $last_name, $email, $country);

    // } else {
    //     $message = "<p>Please fill out the required fields.</p>";
    // }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ontario Summer | Register</title>
</head>
<body>
<?php echo !empty($message) ? $message : ''; ?>
</body>
</html>