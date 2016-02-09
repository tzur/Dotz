
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
  let colorsArray = ['darkGreenDot','brightGreenDot', 'greenDot', 'purpleDot', 'blueDot', 'redDot','pinkDot', 'orangeDot'];
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

};

Modules.client.createNewList = createNewList;

