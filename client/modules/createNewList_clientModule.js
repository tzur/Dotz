
let createNewList = ( options ) => {
  _validate( options.form, options.template );
};

let _validate = ( form, template ) => {
  $( form ).validate( validation( template ) );
};

let validation = ( template ) => {
  console.log("here1");
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
    submitHandler() { _handleCreateNewList( template ); }

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

  let doc = {
    title: template.find( '[name="listTitle"]' ).value,
    bodyText: template.find( '[name="listDescription"]' ).value,
    ownerUserId: Meteor.userId(),
    //coverImageUrl: template.find( '[name="password"]' ).value,
    dotType: "List",
    //dotSubType: template.find( '[name="emailAddress"]' ).value,
    dotColor: dotColor,
    coverImageUrl: Session.get('dotCoverImg'),
    inDotz: [Meteor.user().profile.profileDotId]
};


  //
  //Accounts.createUser( user, ( error ) => {
  //  if ( error ) {
  //    Bert.alert( error.reason, 'danger' );
  //    Session.set('spinnerOn', false);
  //  }
  //});

  let redirectAfterCreateSlug = Meteor.user().profile.userSlug;
  console.log("redirectAfterCreateSlug is " + redirectAfterCreateSlug);

  Meteor.call('createDot', doc, redirectAfterCreateSlug ,function(error,result){
    if (error){
      console.log(error)
    }else{
      console.log("not errorrrrrr");
      Session.set("parentDot", undefined);
      Session.set("locationObject", undefined);
      Session.set('spinnerOn', false);
      Meteor.call('addOrEditObjectInAlgolia', result, false);
      analytics.track("Dot Created", {
        isDotWithOutLocation: Session.equals("locationObject", undefined),
        dotType: undefined
      });
    }
  })



};

Modules.client.createNewList = createNewList;

