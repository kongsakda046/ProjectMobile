$(document).ready(function () {
    
     var url = "http://localhost:3000/information";
     console.log("ready!");
   
     $("#look").click(function () {
      
       $.get(url, function (data) {
         for (var i = 0; i < data.length; i++) {
           console.log(data[i].password);
   
           if (data[i].password === $("#pass").val() && data[i].username === $("#user").val()) {
           

           if (data[i].status === "admin"){
            location.replace('home.html'); 
             break;
           }
           if (data[i].status === "user"){
            location.replace('home.html'); 
            
          }
   
           }
         }
       });
   
   
     });
   
   
   
   });