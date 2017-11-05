$(document).ready(function () {
    $.ajax({
      url: "http://localhost:3000/posts",
      method: "GET",
      success: function (data, status, xhr) {
        console.log(data);
        var template = $('#template').html();
        for(var i=0;i<data.length;i++){
        var rendered = Mustache.render(template, data[i]);
            $("#posts").append(rendered);
          }
        }
    })

    $("#postpin").click(function () {
        console.log($("#desc").val());
        var url = "http://localhost:3000/posts";
       $.post(url, {
           desc: $("#desc").val(),
           picture: $("#picture").val()
       });
       alert('UPDATE COMPLETE');
         setTimeout(window.location.href = "index.html");
   
   
     });
  });



$(function () {
  
    $("#hello").click(function(){        
        navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
            destinationType: Camera.DestinationType.FILE_URI });
        
        function onSuccess(imageURI) {
            var image = document.getElementById('preview');
            image.src = imageURI;
        }
        
        function onFail(message) {
            alert('Failed because: ' + message);
        }
    }); 
      

 });