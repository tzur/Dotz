Template.dotShowMap.onCreated(function() {
  // We can use the `ready` callback to interact with the map API once the map is ready.
  GoogleMaps.ready('dotShowMap', function(map) {
    var dotPosition = _data.dot.locationLatLng
    // Add a marker to the map once it's ready
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(dotPosition[0], dotPosition[1]),
      map: map.instance
    });
  });
});
