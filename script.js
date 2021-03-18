
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

