// This example adds a search box to a map, using the Google Place Autocomplete
// feature. People can enter geographical searches. The search box will return a
// pick list containing a mix of places and predicted search terms.

//Template.createDotMap.onCreated(function(){
//  GoogleMaps.load({key: "AIzaSyC35BXkB-3zxK89xynEq038-mE6Ts9Dg-0", libraries: 'places'});
//
//});

Template.createDotMap.onRendered(function(){
  this.autorun(function () {
    let locationLatLng=[];
    if (GoogleMaps.loaded()) {

        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 32.075362, lng: 34.774936},
          zoom: 13,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        });

        // Create the search box and link it to the UI element.
        var input = document.getElementById('pac-input');
        var searchBox = new google.maps.places.SearchBox(input);
        map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

        // Bias the SearchBox results towards current map's viewport.
        map.addListener('bounds_changed', function() {
          searchBox.setBounds(map.getBounds());
        });

        var markers = [];
        // Listen for the event fired when the user selects a prediction and retrieve
        // more details for that place.
        searchBox.addListener('places_changed', function() {
          var places = searchBox.getPlaces();

          if (places.length == 0) {
            return;
          }



          // Clear out the old markers.
          markers.forEach(function(marker) {
            marker.setMap(null);
          });
          markers = [];

          // For each place, get the icon, name and location.
          var bounds = new google.maps.LatLngBounds();
          places.forEach(function(place) {

            locationLatLng[0] = place.geometry.location.lat();
            locationLatLng[1] = place.geometry.location.lng();
            Session.set("locationObject", {general: place, locationLatLng: locationLatLng});

            var icon = {
              url: place.icon,
              size: new google.maps.Size(71, 71),
              origin: new google.maps.Point(0, 0),
              anchor: new google.maps.Point(17, 34),
              scaledSize: new google.maps.Size(25, 25)
            };

            // Create a marker for each place.
            markers.push(new google.maps.Marker({
              map: map,
              icon: icon,
              title: place.name,
              position: place.geometry.location
            }));

            if (place.geometry.viewport) {
              // Only geocodes have viewport.
              bounds.union(place.geometry.viewport);
            } else {
              bounds.extend(place.geometry.location);
            }
          });
          map.fitBounds(bounds);
        });



    }
  });

});
//GoogleMaps.create({
//  name: 'createDotMap',
//  element: document.getElementById('createDotMap'),
//  options: {
//    center: new google.maps.LatLng(32.075362, 34.774936),
//    zoom: 13
//  }
//});


//let input = $("#locationInput").geocomplete({
//  types: ['establishment', 'geocode'],
//  map: document.getElementById('createDotMap')
//}).bind("geocode:result", function(event, result){
//  if(result) {
//    locationLatLng[0] = result.geometry.location.lat();
//    locationLatLng[1] = result.geometry.location.lng();
//    Session.set("locationObject", {general: result, locationLatLng: locationLatLng});
//  }
//});
