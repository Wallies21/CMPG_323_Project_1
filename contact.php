<?php

$name = $_POST['name'];
$visitor_email = $_POST['email'];
$message = $_POST['message'];

$email_from = 'waldoackerman25@gmail.com';

$emai_subject = "New";

$emal_body = "User Name: ".$name.".\n\n"."User Email: ".$visitor_email.".\n\n"."User Message: ".$message;

$to = "waldoackerman@gmail.com";
$headers = "From: ".$email_from."\r\n";
$headers = "Reply To: ".$visitor_email."\r\n";

mail($to,$emai_subject,$emal_body,$headers);

header("Location: index.html");


?>