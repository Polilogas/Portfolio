<?php
  // Check if the form has been submitted
  if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Get the form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Set the recipient email address
    $to = 'kamixalis@gmail.com';

    // Set the subject and message
    $subject = 'New message from contact form';
    $msg = "Name: $name\n\nEmail: $email\n\nMessage: $message";

    // Send the email
    mail($to, $subject, $msg);

    // Redirect to the thank you page
    header('Location: index.html');
  }
?>