/**
 * Created by avivhatzir on 12/11/2015.
 */
//Move to client side.

let createLocationObject = (locationObject) => {
  locationSchemaObject = {
    latLng: locationObject.locationLatLng,
    name: locationObject.general.name,
    address: locationObject.general.formatted_address,
    googleMapsUrl: locationObject.general.url,
    placeId: locationObject.general.place_id,
    placePhoneNumber: locationObject.general.formatted_phone_number
  };
  return locationSchemaObject;


};
Modules.client.Dotz.createLocationObject = createLocationObject;
