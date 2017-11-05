

$('#e').click(function () {
    console.log($("#id").val())
  var editlat = editlat;
  var editlon = editlon;
  var newposts = {};
  
  newposts.latitude = $("#editlat"+id).val();
  newposts.longitude = $("#editlon"+id).val();
  
  
  var url = "http://localhost:3000/location"+id;
  $.ajax({
     type: 'PUT',
     data: newposts,
     url: url,
     success: function () {
         //no data...just a success (200) status code
         console.log(newposts);
     }
  })
  });