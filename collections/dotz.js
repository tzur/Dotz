/**
 * Created by avivhatzir on 26/10/2015.
 */
Dotz = new Meteor.Collection( 'dotz' );

//Dotz.allow({
//  insert: () => true,
//  update: () => true,
//  remove: () => false
//});
//
//Dotz.deny({
//  insert: () => true,
//  update: () => true,
//  remove: () => true
//});

let DotzSchema = new SimpleSchema({
  type: {
    type: String,
    allowedValues: ['Event', 'Place', 'Concept Dot', 'Text', 'Link', 'Product'],
    autoform: {
      options: [
        {label: "Event", value: "Event"},
        {label: "Place", value: "Place"},
        {label: "Concept Dot", value: "Concept Dot"},
        {label: "Text", value: "Text"},
        {label: "Link", value: "Link"},
        {label: "Product", value: "Product"}
      ]
    },
    label: "The Dot type:"
  },

  ownerUserId: {
    type: String,
    autoValue: function(){
      return Meteor.userId()
    }
  },

  title: {
    type: String,
    label: "Dot title"
  },

  bodyText: {
    type: String,
    label: "Dot body"
  },

  createdAtDate:{
    type: Date,
    autoValue: function(){
      return new Date();
    }
  },

  modifiedAt:{
    type: Date,
    optional: true
  },

  //****The images Section

  coverImageUrl: {
    type: String,
    optional: true
  },

  dotImagesUrls:{
    type: [String],
    optional: true
  },

  //Image Section End****

  linkUrl: {
    type: String,
    regEx: SimpleSchema.RegEx.Url,
    optional: true
  },

  //****The Location Section

  locationName: {
    type: String,
    optional: true
  },

  locationAddress: {
    type: String,
    optional: true
  },

  locationLat:{
    type: Number,
    optional: true
  },

  locationLng: {
    type: Number,
    optional: true
  },

  //Location Section End****

  //****The Event Fields Section

  startDateAndHour: {
    type: Date,
    optional: true
  },

  endDateAndHour: {
    type: Date,
    optional: true
  },

  repeated:{
    type: String,
    allowedValues: ['daily', 'weekly', 'yearly', 'monthly'],
    optional: true
  },

  endRepeatedDate: {
    type: Date,
    optional: true
  },

  //Event Fields Section End****

  //****Price Fields Section

  price: {
    type: Number,
    optional: true
  },

  currency: {
    type:String,
    allowedValues: ['Dollar', 'Shekels'],
    defaultValue: "Shekels",
    optional: true
  },

  //Price Fields Section End****

  //**** The Smart Reff for the dotz inside the dot =>
  //**** THAT THE DOT OWNER ADDED Section

  dotzConnectedByOwner: {
    type: [Object],
    optional: true
  },

  "dotzConnectedByOwner.$.dotId": {
    type: String,
    optional: true
  },

  "dotzConnectedByOwner.$.connectedToDotId":{
    type: String,
    optional: true
  },

  "dotzConnectedByOwner.$.connectedByUserId": {
    type: String,
    optional: true
  },

  "dotzConnectedByOwner.$.upVote": {
    // get the id's of the users that up vote this connection
    type: [String],
    optional: true
  },

  "dotzConnectedByOwner.$.personalDescription": {
    type: String,
    optional: true
  },

  "dotzConnectedByOwner.$.actionName": {
    type: String,
    allowedValues: ['Connect', 'Edit', 'Create'],
    optional: true
  },


  // The Smart Reff for the dotz inside the dot Fields Section End ****
  // THAT THE DOT OWNER ADDED Section ****


  //****The Smart Reff for the dotz inside the dot Section
  //****THAT OTHER USERS ADDED

  dotzConnectedByOthers: {
    type: [Object],
    optional: true
  },

  "dotzConnectedByOthers.$.dotId": {
    type: String,
    optional: true
  },

  "dotzConnectedByOthers.$.connectedToDotId":{
    type: String,
    optional: true
  },

  "dotzConnectedByOthers.$.connectedByUserId": {
    type: String,
    optional: true
  },

  "dotzConnectedByOthers.$.upVote": {
    // get the id's of the users that up vote this connection
    type: [String],
    optional: true
  },

  "dotzConnectedByOthers.$.personalDescription": {
    type: String,
    optional: true
  },

  "dotzConnectedByOthers.$.actionName": {
    type: String,
    allowedValues: ['Connect', 'Edit', 'Create'],
    optional: true
  },


  //The Smart Reff for the dotz inside the dot Fields Section End****
  //THAT OTHER USERS ADDED*****

  //**** The id's of the dotz that this current dot is inside them ("in mexes")

  isConnectedToDotzId: {
    type: [String],
    optional: true
  }
  //The id's of the dotz that this current dot is inside them ("in mexes")****
});

Dotz.attachSchema( DotzSchema );
