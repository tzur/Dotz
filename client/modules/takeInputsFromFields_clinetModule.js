
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
  data.price = parseInt(price, 10);
  if (data.price === ""){
    data.price = undefined;
  }

  data.priceMax =$('#priceMax').val();
  if (data.priceMax === ""){
    data.priceMax = undefined
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




Modules.client.takeInputFromFields = takeInputFromFields;
