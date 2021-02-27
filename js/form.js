 $(document).ready(function () {
            $("#submit_contact").click(function () {
                // debugger;
                let name = $("#name").val();
                let email = $("#email").val();
                let message = $("#message").val();
                let subject = $("#subject").val();
                let nameRegex = /^[a-z A-Z,.'-]+$/;
                let emailRegex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
            if( (!nameRegex.test(name))|| (!emailRegex.test(email)) || (!nameRegex.test(subject)) || (message == "" || message == undefined)) 
            {
                if (!nameRegex.test(name)) {
                    $("#name-error-message").html("Please enter the Name");
                } else {
                    $("#name-error-message").hide();
                }
                if (!emailRegex.test(email)) {
                    $("#email-error-message").html("Please enter the valid Email");
                } else {
                    $("#email-error-message").hide();
                } 
                if (!nameRegex.test(subject)) {
                    $("#subject-error-message").html("Please enter the Subject");
                } else {
                    $("#subject-error-message").hide();
                }
                
                if (message == "" || message == undefined) {
                    $("#message-error-message").html("Please enter the Message");
                }
                else {
                    $("#message-error-message").hide();
                }
            }
            else {
                 $("#form-hide").hide();
                 $("#alert").html("Your message has been sent. We will reply soon. Thank you!");
                let contact =
                {
                    websiteName: "Upley Traders",
                    name: name,
                    emailId: email,
                    subject: subject,
                    message: message
                };
                  
                  fetch('https://website-mail-service.vercel.app/',{
                    method: "POST",
                    body: JSON.stringify(contact),
                    headers: {"Content-type": "application/json; charset=UTF-8"}
                  })
                  .then(response => response.json()) 
                  .then(json => console.log(json));
            } 
            });
        });
