/**
 * Created by avivhatzir on 08/11/2015.
 */
Schema.location = new SimpleSchema({
  name:{
    type: String,
    index: 1
  },

  address:{
    type: String
  },

  placeId:{
    type: String
  },

  googleMapsUrl: {
    type: String
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
