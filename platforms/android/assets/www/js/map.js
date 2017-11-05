


// document.addEventListener("deviceready", onDeviceReady, false);
// function onDeviceReady() {
//     alert("navigator.geolocation works well");


//     var onSuccessTest = function(position) {
//       alert('Latitude: '          + position.coords.latitude          + '\n' +
//             'Longitude: '         + position.coords.longitude         + '\n' +
//             'Altitude: '          + position.coords.altitude          + '\n' +
//             'Accuracy: '          + position.coords.accuracy          + '\n' +
//             'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
//             'Heading: '           + position.coords.heading           + '\n' +
//             'Speed: '             + position.coords.speed             + '\n' +
//             'Timestamp: '         + position.timestamp                + '\n');
//     };
    
//     // onError Callback receives a PositionError object
//     //
//     function onErrorTest(error) {
//       alert('code: '    + error.code    + '\n' +
//             'message: ' + error.message + '\n');
//     }

//     navigator.geolocation.getCurrentPosition(onSuccessTest, onErrorTest);
// }

$(function () {


  
  
  


  

  $("#loadmap").click(function initMap() {
    $("#soon").empty();

    map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 7.894443, lng: 98.352760 },
      zoom: 13,
      mapTypeId: 'roadmap'
    });
    //map button
    var a = '<div class="contain">' +
      '<div class="pin">' +
      '<div class="circle">' +
      '</div>' +
      '</div>' + '<button id="location"class="button button--material" style=" height: 10%;width: 95%;">Location</button>';
    var del = '<br>' + '<br>';
    $("#clear").empty(del);

    $("#location").append(a);
    $("#clear").append(del);
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  });
});
///get location
$(function () {
  var url = ' http://localhost:3000/location';
  $("#location").click(function () {
    var onSuccess = function (position) {
      alert('Latitude: ' + position.coords.latitude + '\n' +
        'Longitude: ' + position.coords.longitude + '\n' +
        'Altitude: ' + position.coords.altitude + '\n' +
        'Accuracy: ' + position.coords.accuracy + '\n' +
        'Altitude Accuracy: ' + position.coords.altitudeAccuracy + '\n' +
        'Heading: ' + position.coords.heading + '\n' +
        'Speed: ' + position.coords.speed + '\n' +
        'Timestamp: ' + position.timestamp + '\n');
      $.post(url, {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      });
      alert('get location complete');
    };
    // onError Callback receives a PositionError object
    infoWindow = new google.maps.InfoWindow;
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        infoWindow.setPosition(pos);
        var marker = new google.maps.Marker({
          position: pos,
          animation: google.maps.Animation.BOUNCE,
        });
        marker.setMap(map);
        var infowindow = new google.maps.InfoWindow({
          content: 'You are Here!'
        });
        infowindow.open(map, marker);
        google.maps.event.addListener(marker, 'click', function () {
          infowindow.open(map, marker);
        });
        infowindow.open(map, marker);
        map.setCenter(pos);
      }, function () {
        handleLocationError(true, infoWindow, map.getCenter());
      });
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
    function onError(error) {
      alert('code: ' + error.code + '\n' +
        'message: ' + error.message + '\n');
    }

  });
});






function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);

  infoWindow.setContent(browserHasGeolocation ?
    'Error: The Geolocation service failed.' :
    'Error: Your browser doesn\'t support geolocation.');

  infoWindow.open(map);
}