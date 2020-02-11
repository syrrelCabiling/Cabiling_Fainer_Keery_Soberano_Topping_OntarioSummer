<?php

function register($first_name, $last_name, $email, $country)
{
    echo "hello";
    // Connect to the database
    $pdo = Database::getInstance()->getConnection();
  
        $check_exist_query = 'SELECT COUNT(*) FROM tbl_users WHERE email= :email';
        $user_set = $pdo->prepare($check_exist_query);
        $user_set->execute(
            array(
                ':email' => $email,
            ));

        $insert_query = "INSERT INTO tbl_users (first_name, last_name, email, country)
        VALUES ($first_name, $last_name, $email, $country)";
        $insert = $pdo->prepare($insert_query);
        $insert->execute(
            array(
                'first_name' => $first_name,
                'last_name' => $last_name,
                'email' => $email,
                'country' => $country,
            ));

        if ($user_set->fetchColumn() > 0) {
            $get_user_query = 'SELECT * FROM tbl_users WHERE email = :email';
            // $get_user_query .= ' AND user_pass = :password';
            $user_check = $pdo->prepare($get_user_query);
            $user_check->execute(
                array(
                    ':email' => $email,
                )
            );

            if ($found_user = $user_check->fetch(PDO::FETCH_ASSOC)) {
                $id = $found_user['id'];

                $message = "Updated successfully";

                // $update_query = 'UPDATE tbl_users SET last_update = NOW() WHERE id = :id';
                // $update_set = $pdo->prepare($update_query);
                // $update_set->execute(
                //     array(
                //         ':id' => $id,
                //         ':last_update' => NOW(),
                //     )
                // );

                if (isset($id)) {
                    redirect_to('index.php');
                }
            } else {
                $message = 'Password incorrect. Please try again.';
            }

        } else {

            // If no account exists
            $message = "No account with that username";

        }
    

    return $message;
}
