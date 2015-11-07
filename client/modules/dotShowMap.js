/**
 * Created by avivhatzir on 05/11/2015.
 */

let dotShowMap = function() {

  var map = new google.maps.Map(document.getElementById('dotShowMap'), {
    center: {lat: _data.dotShow.locationLatLng[0], lng: _data.dotShow.locationLatLng[1]},
    zoom: 16
  });

  google.maps.event.addListenerOnce(map, 'idle', function(){
    // do something only the first time the map is loaded


    var marker = new google.maps.Marker({
      map: map,
      position: {lat: _data.dotShow.locationLatLng[0], lng: _data.dotShow.locationLatLng[1]}
    });

  });
};

Modules.client.Dotz.dotShowMap = dotShowMap;
