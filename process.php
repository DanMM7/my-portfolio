

<?php

    $to = "dmalengela@yahoo.com";
    $subject = "Enquiry from website";
    $sender = $_POST['name'];
    $senderPhone = $_POST['phone'];
    $senderEmail = $_POST['email'];
    $message = $_POST['message'];

    
    
    if (mail($to, $subject, $sender, $senderPhone, $senderEmail, $message))
    {
    	echo '<script type="text/javascript">
        alert("Your message has been sent, We will be in touch with you ASAP");
       
        </script>'; 
    } 	
        else
        {
    // 	echo"Email not sent";
    
    
    }
 ?>







