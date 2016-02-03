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

function _updateCreateDotFields(title, description, img, linkUrl ,fbAuthour){
  //console.log('sdfdsfsd');
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

}
function _createDotChangeTab(fieldsArray){
  fieldsArray.forEach(function(field){

  })
}

function DotFactory(
  title, description, parentDotId, dotColor, coverImgUrl, locationObject, price, dotSubType,embedlyObj, FBdataObj)
  {
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
}

function _handleCreateSubmit(parentDotId, coverImgUrl, locationObject){
  let title, description, price, dotSubType, redirectAfterCreateSlug;
  if (parentDotId === Meteor.user().profile.profileDotId){
    redirectAfterCreateSlug = Meteor.user().profile.userSlug;
  }else{
    redirectAfterCreateSlug = Dotz.findOne(parentDotId).dotSlug;
  }

  title = $('#title').val();
  description = $('#description').val();
  price =$('#price').val();
  if (price ===""){
    price=undefined
  }

  //Pick random color:
  let colorsArray = ['darkGreenDot','brightGreenDot', 'greenDot', 'purpleDot', 'blueDot', 'redDot','pinkDot', 'orangeDot'];
  let i = Math.floor(Math.random() * 8);
  let dotColor = colorsArray[i];

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

  //TODO CHANGE SESSION TO LOCATION OBJECT WE HAVE IT AS VARIABLE SAME WITH FBPOSTAUTHOUR DATA DONT USE SESSIONS HERE PASS AS VARIABLE @zur
  let dot = new DotFactory(title,description,parentDotId,dotColor,coverImgUrl,Session.get('locationObject'),price,
                                          dotSubType,Session.get('embedlyObj'),Session.get('fbPostAuthorData'));

  Meteor.call('createDot', dot, redirectAfterCreateSlug ,function(error,result){
    if (error){
      console.log(error)
    }else{
      Session.set("parentDot", undefined);
      Session.set("locationObject", undefined);
      Session.set('spinnerOn', false);
      Meteor.call('addOrEditObjectInAlgolia', result, false);
      analytics.track("Dot Created", {
        isDotWithOutLocation: Session.equals("locationObject", undefined),
        dotType: dotSubType
      });
    }
  })
}

Modules.client.handleCreateSubmit = _handleCreateSubmit;
Modules.client.createDotChangeTab = _createDotChangeTab;
Modules.client.updateCreateDotFields= _updateCreateDotFields;
Modules.client.createDotLoading = _createDotLoading;
Modules.client.createDotFinishedLoading = _createDotFinishedLoading;
Modules.client.createDotClearForm = _createDotClearForm;
