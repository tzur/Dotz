/**
 * Created by avivhatzir on 10/11/2015.
 */
// This example adds a search box to a map, using the Google Place Autocomplete
// feature. People can enter geographical searches. The search box will return a
// pick list containing a mix of places and predicted search terms.

Template.dotShowMap.onCreated(function(){
  this.autorun(function (c) {
    if (!GoogleMaps.loaded()) {
      GoogleMaps.load({key: "AIzaSyC35BXkB-3zxK89xynEq038-mE6Ts9Dg-0", libraries: 'places', language: 'en'});
      c.stop()
    }
  })
});

Template.dotShowMap.onRendered(function(){
  this.autorun(function () {
    let locationLatLng = [];
    if (GoogleMaps.loaded()) {


      var dotShowMap = new google.maps.Map(document.getElementById('dotShowMap'), {
        center: {lat: _data.dotShow.location.latLng[0], lng: _data.dotShow.location.latLng[1]},
        zoom: 16,
        disableDefaultUI: true
      });

      google.maps.event.addListenerOnce(dotShowMap, 'idle', function () {
        // do something only the first time the map is loaded
        var marker = new google.maps.Marker({
          map: dotShowMap,
          position: {lat: _data.dotShow.location.latLng[0], lng: _data.dotShow.location.latLng[1]}
        });

      });
    }
  })

});
