function _createDotLoading(){
  Session.set('spinnerOn', true);
  $('#title').toggleClass('nonEditAble');
  $('#description').toggleClass('nonEditAble');//TODO DISABLE MORE FIELDS IF NECCESSARE PAY ATTENTION IT'S ONLY ON LINK TYPE
}

function _createDotFinishedLoading(){
  Session.set('spinnerOn', false);
  $('#title').toggleClass('nonEditAble');
  $('#description').toggleClass('nonEditAble');  //TODO DISABLE MORE FIELDS IF NECCESSARE PAY ATTENTION IT'S ONLY ON LINK TYPE

}

function _createDotClearForm(){
  Session.set('spinnerOn', false);
  Session.set('dotCoverImg', undefined);
  $('#title').val('');
  $('#description').val('');
  $('#price').val(''); //TODO CLEAR MORE FIELDS SUCH AS DATE ETC
}

function _updateCreateDotFields(id, title, description, img, linkUrl ,fbAuthour){
  console.log('dot id is ' + id);

  let dot = Dotz.findOne(id);

  if (title){
    $('#title').val(title);
  }

  if (description){
    $('#description').val(description).trigger('change'); //TRIGGER CHANGE IS FOR THE AUTO TAGGER NOT THAT RELAVENT.
  }

  if (linkUrl){
    $('#url').val(linkUrl);
  }

  if (img) {//Support embedly img
    Modules.client.uploadToAmazonViaUrl(img, function (error, url) {
      if (error) {
        Modules.client.createDotFinishedLoading();
      } else {
        Session.set('dotCoverImg', url);
        Modules.client.createDotFinishedLoading();
      }
    });
  }else{
    Modules.client.createDotFinishedLoading();
  }

  //convert by moment:
  //let startDateAndHour = moment(startDate + " " + startHour, "DD MMMM YYYY hh:mm A");
  //startDateAndHour = new Date(startDateAndHour);
  if (dot.startDateAndHour) {
    let startDate = moment(dot.startDateAndHour).format('DD MMMM YYYY');
    let startHour = moment(dot.startDateAndHour).format('hh:mm A');
    $('#startDate').val(startDate);
    $('#startHour').val(startHour);
  }
  if (dot.endDateAndHour) {
    let endDate = moment(dot.endDateAndHour).format('DD MMMM YYYY');
    let endHour = moment(dot.endDateAndHour).format('hh:mm A');
    $('#endDate').val(endDate);
    $('#endHour').val(endHour);
  }
  if (dot.multipleEventsNote) {
    $('#multipleEventsNote').val(dot.multipleEventsNote);
  }

}


function _createDotChangeTab(fieldsArray){
  fieldsArray.forEach(function(field){

  })
}

function DotFactory(
  linkUrl, title, description, parentDotId, dotColor, coverImgUrl,
  locationObject, price, dotSubType,
  embedlyObj, FBdataObj,
  startDateAndHour, endDateAndHour, multipleEventsNote)
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

function _handleCreateSubmit(parentDotId, coverImgUrl, locationObject){
  let linkUrl, title, description, price, dotSubType, redirectAfterCreateSlug;
  if (parentDotId === Meteor.user().profile.profileDotId){
    redirectAfterCreateSlug = Meteor.user().profile.userSlug;
  }else{
    redirectAfterCreateSlug = Dotz.findOne(parentDotId).dotSlug;
  }

  linkUrl = $('#url').val();
  title = $('#title').val();
  description = $('#description').val();
  price =$('#price').val();
  if (price ===""){
    price=undefined
  }

  let startDate = $('#startDate').val();
  let startHour = $('#startHour').val();
  let endDate = $('#endDate').val();
  let endHour = $('#endHour').val();
  let multipleEventsNote = $('#multipleEventsNote').val();

  //convert by moment:
  let startDateAndHour = moment(startDate + " " + startHour, "DD MMMM YYYY hh:mm A");
  startDateAndHour = new Date(startDateAndHour);

  let endDateAndHour = moment(endDate + " " + endHour, "DD MMMM YYYY hh:mm A");
  endDateAndHour = new Date(endDateAndHour);


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
  }else{
    dotSubType = 'Link'; // it is default to be link.
  }


  //TODO: this if-else help us to separate between create/edit actions >> TBD... @otni
  if ( Session.get('editAction_dot') || Session.get('editAction_list')) {

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


        //Meteor.call('addOrEditObjectInAlgolia', result, false);
        //analytics.track("Dot Edited", {
        //  isDotWithOutLocation: Session.equals("locationObject", undefined),
        //  dotType: dotSubType
        //});
      }
    })

  } else {

      //Pick random color:
      let colorsArray = ['darkGreenDot','brightGreenDot', 'greenDot', 'purpleDot', 'blueDot', 'redDot','pinkDot', 'orangeDot'];
      let i = Math.floor(Math.random() * 8);
      let dotColor = colorsArray[i];

      //TODO CHANGE SESSION TO LOCATION OBJECT WE HAVE IT AS VARIABLE SAME WITH FBPOSTAUTHOUR DATA DONT USE SESSIONS HERE PASS AS VARIABLE @zur
      let dot = new DotFactory(linkUrl,title,description,parentDotId, dotColor, coverImgUrl,
        Session.get('locationObject'),price,
        dotSubType,Session.get('embedlyObj'),Session.get('fbPostAuthorData'),
        startDateAndHour, endDateAndHour, multipleEventsNote);

      //Go create:
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

Modules.client.handleCreateSubmit = _handleCreateSubmit;
Modules.client.createDotChangeTab = _createDotChangeTab;
Modules.client.updateCreateDotFields= _updateCreateDotFields;
Modules.client.createDotLoading = _createDotLoading;
Modules.client.createDotFinishedLoading = _createDotFinishedLoading;
Modules.client.createDotClearForm = _createDotClearForm;
