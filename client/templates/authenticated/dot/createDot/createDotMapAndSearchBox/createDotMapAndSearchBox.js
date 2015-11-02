// This example adds a search box to a map, using the Google Place Autocomplete
// feature. People can enter geographical searches. The search box will return a
// pick list containing a mix of places and predicted search terms.

Template.createDotMap.onCreated(function(){
  GoogleMaps.load({key: "AIzaSyC35BXkB-3zxK89xynEq038-mE6Ts9Dg-0", libraries: 'places', language:'en'});

});

Template.createDotMap.onRendered(function(){
  this.autorun(function () {
    let locationLatLng=[];
    let locationLat;
    let locationLng;
    if (GoogleMaps.loaded()) {
      GoogleMaps.create({
        name: 'createDotMap',
        element: document.getElementById('createDotMap'),
        options: {
          center: new google.maps.LatLng(32.075362, 34.774936),
          zoom: 13
        }
      });
      $("#locationInput").geocomplete({
        types: ['establishment', 'geocode'],
        map: document.getElementById('createDotMap')
      }).bind("geocode:result", function(event, result){
        if(result) {
          locationLatLng[0] = result.geometry.location.lat();
          locationLatLng[1] = result.geometry.location.lng();
          Session.set("locationObject", {general: result, locationLatLng: locationLatLng});
        }
      });
    }
  });

});

