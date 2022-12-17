$(document).ready(function(){
  $('#icon').click(function(){
   $('ul').toggleClass('show');
  });
});

function sendEmail(){
  Email.send({
    SecureToken:"27757254-f7ae-45e6-8b70-baad8f77e355",
    To : 'jnchrstnbst@gmail.com',
    From : "jonbista21.parsu@gmail.com",
    Subject : "New Contact Form Enquiry",
    Body : "Name: " + document.getElementById("name").value
      + "<br> Email: " + document.getElementById("email").value
      + "<br> Phone Number: " + document.getElementById("phone").value
      + "<br> Message: " + document.getElementById("message").value
  }).then(
  message => alert("Message Sent Successfully")
  );
}
