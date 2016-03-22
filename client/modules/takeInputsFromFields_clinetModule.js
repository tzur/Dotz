
let takeInputFromFields = function() {

  let data = {};
  //let linkUrl, title, description, price, priceMax, currency, dotSubType, redirectAfterCreateSlug;
  //if (parentDotId === Meteor.user().profile.profileDotId){
  //  redirectAfterCreateSlug = Meteor.user().profile.userSlug;
  //}else{
  //  redirectAfterCreateSlug = Dotz.findOne(parentDotId).dotSlug;
  //}

  data.linkUrl = $('#url').val();
  if (data.linkUrl === ""){
    data.linkUrl = undefined
  }

//TODO: add a systematic solution.. @otni
//if (linkUrl === undefined){
//  linkUrl = $('#webAddress').val();
//}

//connectionReason (personalDescription...)
//  data.personalDescription = $('#personalDescription').val();
//if (personalDescription === ""){
//  personalDescription = "@" + Meteor.user().username;
//}

  data.title = $('#title').val();
  //if (!data.title || data.title === ""){
  //  data.title = personalDescription;
  //  //personalDescription = "";
  //}

  data.bodyText = $('#description').val();
  let price = $('#price').val();
  if (price === ""){
    data.price = undefined;
  } else if (price) {
    data.price = parseInt(price, 10);
  }

  let priceMax =$('#priceMax').val();
  if (priceMax === ""){
    data.priceMax = undefined
  } else if (priceMax) {
    data.priceMax = parseInt(priceMax, 10);
  }

  data.currency = $('#currencyField').val();

  let startDate = $('#startDate').val();
  let startHour = $('#startHour').val();
  let endDate = $('#endDate').val();
  let endHour = $('#endHour').val();
  data.multipleEventsNote = $('#multipleEventsNote').val();

//convert by moment:
//  data.startDateAndHour;
  if (startDate) {
    let startDateAndHour = moment(startDate + " " + startHour, "DD MMMM YYYY hh:mm A");
    data.startDateAndHour = new Date(startDateAndHour);
  }
  //let endDateAndHour;
  if (endDate) {
    let endDateAndHour = moment(endDate + " " + endHour, "DD MMMM YYYY hh:mm A");
    data.endDateAndHour = new Date(endDateAndHour);
    //console.log("data.endDateAndHour >>>>>> " + data.endDateAndHour);
  }

  //location object:
  let locationObject = Session.get('locationObject');
  let location;
  if (locationObject){
    data.location = {
      latLng: locationObject.locationLatLng,
      name: locationObject.general.name,
      address: locationObject.general.formatted_address,
      googleMapsUrl: locationObject.general.url,
      placeId: locationObject.general.place_id,
      placePhoneNumber: locationObject.general.formatted_phone_number
    };
  }

  return data;
};


//takeSuperTagsFromFields
let takeSuperTagsFromFields = function() {

  //let data = {};
  let parentDot = Session.get('editAction_docToEdit');
  let parentDotId;
  if (parentDot.smartRef) {
    parentDotId = parentDot.smartRef.connection.toParentDotId;
  } else {
    parentDotId = parentDot.dot._id;
  }
  console.log("parentDotId >>>>>>>>>>> " + parentDotId);
  parentDot = Dotz.findOne(parentDotId);
  let selfSuperTags = [];

  //super Tags:
  parentDot.superTagsToFilterConnectedDotz.forEach(function (superTag) {

    let superTagToPush = {};
    superTagToPush.parentTag = superTag.parentTag;
    superTagToPush.subTags = $('#' + superTag._id + '_subTags').val();
    console.log("superTagToPush.subTags >>>>>>>>>>> " + superTagToPush.subTags)
    selfSuperTags.push();
  });



  //let priceMax = $('#priceMax').val();
  //if (priceMax === ""){
  //  data.priceMax = undefined
  //} else if (priceMax) {
  //  data.priceMax = parseInt(priceMax, 10);
  //}


  return selfSuperTags;
};


Modules.client.takeInputFromFields = takeInputFromFields;
Modules.client.takeSuperTagsFromFields = takeSuperTagsFromFields;
