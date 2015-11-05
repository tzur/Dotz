/**
 * Created by avivhatzir on 05/11/2015.
 */

let dotShowMap = function() {


  var dotShowMap = new google.maps.Map(document.getElementById('dotShowMap'), {
    center: {lat: _data.dotShow.locationLatLng[0], lng: _data.dotShow.locationLatLng[1]},
    zoom: 16
  });

  var marker = new google.maps.Marker({
    map: dotShowMap,
    position: {lat: _data.dotShow.locationLatLng[0], lng: _data.dotShow.locationLatLng[1]}
  });


};

Modules.client.Dotz.dotShowMap = dotShowMap;
