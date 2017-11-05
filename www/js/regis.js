$(document).ready(function () {
    var url = "http://localhost:3000/information";
$("#btnRegis").click(function () {
   
    console.log("ready");
    $.post(url, {
        username : $("#user").val(),
        password : $("#pass").val(),
        name: $("#nameu").val(),
        status : "user"
    });
   alert('Complete go');
    location.replace('index.html');
   
  });
});