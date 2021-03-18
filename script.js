// function myMap() {
//    var mapCanvas = document.getElementById("map");
//    var myCenter = new google.maps.LatLng(51.508742, -0.120850); //координаты
//    var mapOptions = { center: myCenter, zoom: 15 }; //зум
//    var map = new google.maps.Map(mapCanvas, mapOptions);
//    var marker = new google.maps.Marker({
//       position: myCenter,
//       animation: google.maps.Animation.BOUNCE //анимация булавки
//    });
//    marker.setMap(map);
// }

/* Always set the map height explicitly to define the size of the div
 * element that contains the map. */

"use strict";

// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.
var map, infoWindow, marker;

function initMap() {
   map = new google.maps.Map(document.getElementById("map"), {
      center: {
         lat: -34.397,
         lng: 150.644,
      },
      zoom: 15,
   });


   infoWindow = new google.maps.InfoWindow();
   var locationButton = document.createElement("button");
   locationButton.textContent = "НАЖМИ МЕНЯ, я тебя найду";
   locationButton.classList.add("custom-map-control-button");
   map.controls[google.maps.ControlPosition.TOP_CENTER].push(
      locationButton
   );
   locationButton.addEventListener("click", function () {
      // Try HTML5 geolocation.
      if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition(
            function (position) {
               var pos = {
                  lat: position.coords.latitude,
                  lng: position.coords.longitude,
               };
               infoWindow.setPosition(pos);
               infoWindow.setContent("Ты тут.");
               infoWindow.open(map, );
               map.setCenter(pos);

            },
            function () {
               handleLocationError(true, infoWindow, map.getCenter());
            }
         );
      } else {
         // Browser doesn't support Geolocation
         handleLocationError(false, infoWindow, map.getCenter());
      }
   });
}

// function handleLocationError(browserHasGeolocation, infoWindow, pos) {
//    infoWindow.setPosition(pos);
//    infoWindow.setContent(
//       browserHasGeolocation ?
//       "Error: The Geolocation service failed." :
//       "Error: Your browser doesn't support geolocation."
//    );
//    infoWindow.open(map);

// }


// function myMap() {