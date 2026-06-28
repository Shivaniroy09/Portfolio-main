<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect and sanitize form data
    $name = trim($_POST['contact-name']);
    $email = trim($_POST['contact-email']);
    $company = trim($_POST['contact-company']);
    $message = trim($_POST['contact-message']);

    // Basic validation
    if (empty($name) || empty($email) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Please fill out the form correctly.";
        exit;
    }

    // Set the recipient email address
    $to = "shivaniroy2309@gmail.com"; // Updated recipient email

    // Set the email subject
    $subject = "New Contact Form Submission from " . $name;

    // Build the email content
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Company: $company\n\n";
    $email_content .= "Message:\n$message\n";

    // Set the email headers
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Send the email
    if (mail($to, $subject, $email_content, $headers)) {
        echo "Thank you! Your message has been sent.";
    } else {
        echo "Oops! Something went wrong, and we couldn't send your message.";
    }
} else {
    echo "There was a problem with your submission, please try again.";
}
?>
