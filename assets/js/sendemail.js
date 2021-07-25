
//emailjs function

function sendMail(contactForm) {
    emailjs.send("service_sxkwv68","template_lwjzstp", {
        "from_name": contactForm.fname.value,
        "second_name":contactForm.lname.value,
        "enquiry_type":contactForm.enquiry.value,
        "from_email": contactForm.email.value,
        "sight_request": contactForm.message.value,
   })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;
}