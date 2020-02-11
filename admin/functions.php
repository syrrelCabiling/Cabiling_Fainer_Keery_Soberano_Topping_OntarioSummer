<?php
    //require_once 'connect.php';

    // $conn = Database::getInstance()->getConnection();

    // function register($conn, $first_name, $last_name, $email, $country) {
       
    //     $sql = "INSERT INTO tbl_users (firstname, lastname, email) VALUES ('John', 'Doe', 'john@example.com')";
    //     $runQuery = $conn->query($sql);

    //     echo "<p>Record Created</p>";
    // }
    
function register($first_name, $last_name, $email, $country) {

$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "db_register";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO tbl_users (first_name, last_name, email, country) VALUES ($first_name, $last_name, $email, $country)";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

}

?>