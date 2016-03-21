

function _DotFactory(
  linkUrl, title, description, parentDotId, dotColor, coverImgUrl,
  locationObject, price, dotSubType,
  embedlyObj, FBdataObj,
  startDateAndHour, endDateAndHour, multipleEventsNote, priceMax, currency)
  {
    this.linkUrl = linkUrl;
    this.title= title;
    this.bodyText = description;
    this.inDotz = [parentDotId];
    if (locationObject){
      this.location = {
        latLng: locationObject.locationLatLng,
        name: locationObject.general.name,
        address: locationObject.general.formatted_address,
        googleMapsUrl: locationObject.general.url,
        placeId: locationObject.general.place_id,
        placePhoneNumber: locationObject.general.formatted_phone_number
      };
    }
    this.dotType = 'Dot';
    this.dotSubType = dotSubType;
    this.isOpen = true;
    this.dotColor = dotColor;
    this.coverImageUrl = coverImgUrl;
    if (price){//TODO CHECK IF IT'S NUMBER @zur
      this.price = parseInt(price);
    }
    if (priceMax){//TODO CHECK IF IT'S NUMBER @zur
      this.priceMax = parseInt(priceMax);
    }
    this.currency = currency;
    this.ownerUserId = Meteor.userId();
    this.createdAtDate = new Date();
    this.embedlyObj = embedlyObj;
    if (FBdataObj){
      this.linkAuthorName = FBdataObj.name;
      this.linkAuthorUrl = 'https://www.facebook.com/' + FBdataObj.id;
      this.facebookAuthorId = FBdataObj.id;
    }
    //event:
    this.startDateAndHour = startDateAndHour;
    this.endDateAndHour = endDateAndHour;
    this.multipleEventsNote = multipleEventsNote;
  }


function handleCreateSubmit(parentDotId, coverImgUrl, locationObject){
  let linkUrl, title, description, price, priceMax, currency, dotSubType, webAddress, facebookAddress, twitterAddress, redirectAfterCreateSlug;
  if (parentDotId === Meteor.user().profile.profileDotId){
    redirectAfterCreateSlug = Meteor.user().profile.userSlug;
  }else{
    redirectAfterCreateSlug = Dotz.findOne(parentDotId).dotSlug;
  }

  linkUrl = $('#url').val();
  if (linkUrl === ""){
    linkUrl = undefined
  }

  //TODO: add a systematic solution.. @otni
  //if (linkUrl === undefined){
  //  linkUrl = $('#webAddress').val();
  //}

  //connectionReason (personalDescription...)
  //let personalDescription = $('#personalDescription').val();
  //if (personalDescription === ""){
  //  personalDescription = "@" + Meteor.user().username;
  //}

  title = $('#title').val();
  //if (!title || title === ""){
  //  title = personalDescription;
  //  //personalDescription = "";
  //}

  description = $('#description').val();
  price =$('#price').val();
  if (price === ""){
    price = undefined
  }

  priceMax =$('#priceMax').val();
  if (priceMax === ""){
    priceMax = undefined
  }

  currency = $('#currencyField').val();

  let startDate = $('#startDate').val();
  let startHour = $('#startHour').val();
  let endDate = $('#endDate').val();
  let endHour = $('#endHour').val();
  let multipleEventsNote = $('#multipleEventsNote').val();

  //convert by moment:
  let startDateAndHour;
  if (startDate) {
    startDateAndHour = moment(startDate + " " + startHour, "DD MMMM YYYY hh:mm A");
    startDateAndHour = new Date(startDateAndHour);
  }
  let endDateAndHour;
  if (endDate) {
    endDateAndHour = moment(endDate + " " + endHour, "DD MMMM YYYY hh:mm A");
    endDateAndHour = new Date(endDateAndHour);
  }




  //dotSubType:
  if (Session.get('link')){
    dotSubType = 'Link';
  }else if(Session.get('place')){
    dotSubType = 'Place';
  }else if(Session.get('event')){
    dotSubType = 'Event';
  }else if(Session.get('person')){
    dotSubType = 'Person';
  }else if(Session.get('product')){
    dotSubType = 'Product';
  }else if(Session.get('media')){
    dotSubType = 'Media';
  //}else if(Session.get('image')){
  //  dotSubType = 'StartDot';
  }else{
    dotSubType = 'StartDot'; // it is default to be ?.
  }

  webAddress = $('#webAddress').val();
  if (webAddress === ""){
    webAddress = undefined
  }

  facebookAddress = $('#facebookAddress').val();
  if (facebookAddress === ""){
    facebookAddress = undefined
  }

  twitterAddress = $('#twitterAddress').val();
  if (twitterAddress === ""){
    twitterAddress = undefined
  }




  //Check IF edit OR create action:

  //TODO: this if-else help us to separate between create/edit actions >> TBD... @otni
  if ( Session.get('editAction_dot') ) {

    let editedDot = Dotz.findOne(parentDotId);
    console.log("editedDot._Id >>> " + editedDot._id);

    let locationObject = Session.get('locationObject');
    let location;
    if (locationObject){
      location = {
          latLng: locationObject.locationLatLng,
          name: locationObject.general.name,
          address: locationObject.general.formatted_address,
          googleMapsUrl: locationObject.general.url,
          placeId: locationObject.general.place_id,
          placePhoneNumber: locationObject.general.formatted_phone_number
      };
    }

    let FBdataObj = Session.get('fbPostAuthorData');
    let linkAuthorName, linkAuthorUrl, facebookAuthorId;

    if (FBdataObj){
      linkAuthorName = FBdataObj.name;
      //TODO >> TBD how FBdataObj.id gives us the link*Author*Url... @otni
      linkAuthorUrl = 'https://www.facebook.com/' + FBdataObj.id;
      facebookAuthorId = FBdataObj.id;
    }

    let editedDoc = {
      ownerUserId: Meteor.userId(),
      title: title,
      bodyText: description,
      dotSubType: dotSubType,
      coverImageUrl: coverImgUrl,

      //links:
      linkUrl: linkUrl,
      embedlyObj: Session.get('embedlyObj'),
      linkAuthorName: linkAuthorName,
      linkAuthorUrl: linkAuthorUrl,
      facebookAuthorId: facebookAuthorId,

      //location:
      location: location,

      //event:
      multipleEventsNote: multipleEventsNote,
      startDateAndHour: startDateAndHour,
      endDateAndHour: endDateAndHour
    };

    //let editedDotId = editedDot._id.toString();

    Meteor.call('updateDot', editedDoc, editedDot._id ,function(error,result){
      if (error){
        console.log("updateDot error >>> " + error)
      } else {
        Modal.hide();
        Session.set("parentDot", undefined);
        Session.set("locationObject", undefined);
        Session.set("editAction_dot", undefined);
        Session.set("editAction_list", undefined);
        Session.set('spinnerOn', false);

        //console.log("updateDot result >>>  " + result);


        Meteor.call('addOrEditObjectInAlgolia', editedDot.dotSlug, false);
        //analytics.track("Dot Edited", {
        //  isDotWithOutLocation: Session.equals("locationObject", undefined),
        //  dotType: dotSubType
        //});
      }
    });



  //  This is the create-action section...:
  } else {

      //Pick random color:
      let dotColor = Modules.client.randomColor();

    //TODO CHANGE SESSION TO LOCATION OBJECT WE HAVE IT AS VARIABLE SAME WITH FBPOSTAUTHOUR DATA DONT USE SESSIONS HERE PASS AS VARIABLE @zur

      let dot = new _DotFactory (
        linkUrl, title, description, parentDotId, dotColor, coverImgUrl,
        Session.get('locationObject'),
        price,
        dotSubType,
        Session.get('embedlyObj'),
        Session.get('fbPostAuthorData'),
        startDateAndHour, endDateAndHour, multipleEventsNote, priceMax, currency
      );

      //Go create:
    //console.log("BC personalDescription >> " + personalDescription)
      Meteor.call('createDot', dot, redirectAfterCreateSlug ,function(error,result){
        if (error){
          console.log(error)
        } else {
          Session.set("parentDot", undefined);
          Session.set("locationObject", undefined);
          Session.set('spinnerOn', false);
          Meteor.call('addOrEditObjectInAlgolia', result, false);
          analytics.track("Dot Created", {
            isDotWithOutLocation: Session.equals("locationObject", undefined),
            dotType: "Dot"
          });
        }
      })
  }
}


Modules.client.handleCreateSubmit = handleCreateSubmit;
