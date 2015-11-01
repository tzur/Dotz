/**
 * Created by avivhatzir on 29/10/2015.
 */
let mapOptions = () =>  {
  // Make sure the maps API has loaded
  if (GoogleMaps.loaded()) {
    // Map initialization options
    return {
      center: new google.maps.LatLng(32.075362, 34.774936),
      zoom: 10
    };
  }
};

Template.registerHelper("dotShowMapOptions", mapOptions)
