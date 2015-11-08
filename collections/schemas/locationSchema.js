/**
 * Created by avivhatzir on 08/11/2015.
 */
Schema.location = new SimpleSchema({
  name:{
    type: String,
    optional: true
  },

  address:{
    type: String,
    optional: true
  },

  placeId:{
    type: String,
    optional: true
  },

  googleMapsUrl: {
    type: String,
    optional: true

  },

  latLng: {
    type: [Number],
    decimal:true,
    optional: true
  },

  placePhoneNumber: {
    type: String,
    optional: true
  }
});
