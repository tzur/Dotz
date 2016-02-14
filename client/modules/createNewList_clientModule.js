
let createNewList = ( options ) => {
  _validate( options.form, options.template );
};

let _validate = ( form, template ) => {
  $( form ).validate( validation( template ) );
};

let validation = ( template ) => {
  return {
    rules: {
      listTitle: {
        required: true,
        //minlength: 3,
        maxlength: 100
      },
      listDescription: {
        maxlength: 200
      },
      fileChangeCreateDot: {
        extension: "jpg|png|gif"
      }
    },
    messages: {
      listTitle: {
        //minlength: 'Use at least 3 characters, please.',
        maxlength: 'Use maximum 100 characters, please.'
      },
      listDescription: {
        maxlength: 'Use maximum 200 characters, please.'
      },
      fileChangeCreateDot: {
        extension: 'Only .jpg/.gif/.png files, please.'
      }
    },

    submitHandler() {
      _handleCreateNewList( template );
    }

  };
};

let _handleCreateNewList = ( template ) => {
  Session.set('spinnerOn', true);

  //let dot11Color = Modules.client.randomColor;

  //Pick random color:
  let colorsArray = ['darkGreenDot', 'greenDot', 'purpleDot', 'blueDot', 'redDot', 'orangeDot'];
  let i = Math.floor(Math.random() * 8);
  let dotColor = colorsArray[i];
  //console.log("dotcolor: " + dotColor);

  //Types & Open:
  let selectedSubType;
  let openOrClosed;
  if (Session.get('publicList')) {
      selectedSubType = "Public List";
      openOrClosed = true;
  } else if (Session.get('closedList')) {
      selectedSubType = "Closed List";
      openOrClosed = false;
  } else if (Session.get('secretList')) {
      selectedSubType = "Secret List";
      openOrClosed = false;
  }

  //parentDotId & redirectAfterCreateSlug:
  let parentDotId;
  let redirectAfterCreateSlug;
  if ( Session.get('parentDot') ) {
    parentDotId = Session.get('parentDot');
    redirectAfterCreateSlug = Dotz.findOne(parentDotId).dotSlug;
  } else {
    parentDotId = Meteor.user().profile.profileDotId;
    redirectAfterCreateSlug = Meteor.user().profile.userSlug
  }

  let doc = {
      title: template.find( '[name="listTitle"]' ).value,
      bodyText: template.find( '[name="listDescription"]' ).value,
      ownerUserId: Meteor.userId(),
      //coverImageUrl: template.find( '[name="password"]' ).value,
      dotType: "List",
      dotSubType: selectedSubType,
      isOpen: openOrClosed,
      dotColor: dotColor,
      coverImageUrl: Session.get('dotCoverImg'),
      inDotz: [parentDotId]
  };

  //This is edit action:
  if ( Session.get('editAction_dot') ) {


  //This is create action:
  } else {
      Meteor.call('createDot', doc, redirectAfterCreateSlug ,function(error,result){
        if (error){
          console.log(error);
        } else {
          Session.set("parentDot", undefined);
          Session.set("locationObject", undefined);
          Session.set('spinnerOn', false);
          Session.set('dotCoverImg', undefined);

          //listSubType sessions:
          Session.set('publicList', undefined);
          Session.set('closedList', undefined);
          Session.set('secretList', undefined);

          Meteor.call('addOrEditObjectInAlgolia', result, false);
          analytics.track("Dot Created", {
            isDotWithOutLocation: Session.equals("locationObject", undefined),
            dotType: undefined
          });
        }
      })
  }
};




//TODO >>>>> I am here @otni


let _editList = (param) => {

  let editedDot = Dotz.findOne(parentDotId);
  console.log("editedDot._Id >>> " + editedDot._id);


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
  });

};


Modules.client.createNewList = createNewList;

