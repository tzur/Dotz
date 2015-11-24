let signup = ( options ) => {
  _validate( options.form, options.template );
};

let _validate = ( form, template ) => {
  $( form ).validate( validation( template ) );
};

let validation = ( template ) => {
  return {
    rules: {
      userName: {
        required: true,
        minlength: 3
      },
      emailAddress: {
        required: true,
        email: true
      },
      password: {
        required: true,
        minlength: 6
      }
    },
    messages: {
      userName: {
        required: 'Need a User Name here.',
        minlength: 'Use at least 3 characters, please.'
      },
      emailAddress: {
        required: 'Need an email address here.',
        email: 'Is this email address legit?'
      },
      password: {
        required: 'Need a password here.',
        minlength: 'Use at least six characters, please.'
      }
    },
    submitHandler() { _handleSignup( template ); }
  };
};

let _handleSignup = ( template ) => {
  let user = {
    username: template.find( '[name="userName"]' ).value,
    email: template.find( '[name="emailAddress"]' ).value,
    password: template.find( '[name="password"]' ).value
  };

  Accounts.createUser( user, ( error ) => {
      if ( error ) {
        Bert.alert( error.reason, 'danger' );
      }

      else {
          let username = Meteor.user().username;
          let slug = username.replace(/ /g, "").toLowerCase();
          Meteor.call('updateUserSlug', Meteor.userId(), slug, function(error, result) {
              //TBD:
              if (error) {
                Bert.alert( 'Username Slug (aka url address ;) already exists ', 'danger' ); //TBD
              }
              else {
                //TBD: this steps here (for better ux) OR later (for batter safety/stability)
                _createNewDotForDotProfile ( Meteor.userId() );
                Modal.hide('signUpModal');
                FlowRouter.go('/' + Meteor.user().profile.userSlug);
                Bert.alert( 'Welcome!', 'success' );
              }
          });
    }
  });
};

//Create new dot + add the new dot ID to the profileDotId field:
//We need to move this function to the server (and to include some security checks):
let _createNewDotForDotProfile = ( userId ) => {
    let profileDotDoc = {
        dotType: "_profileDot",
        ownerUserId: userId,
        title: Meteor.user().username + " Dotz",
        createdAtDate: new Date(),
        isOpen: false
    };
    check(profileDotDoc, Schema.dotSchema);
    Meteor.call('insertDot', profileDotDoc, function(error, result){
        if (result){
            Meteor.call('updateUserProfileDotId', Meteor.userId(), result, function(error, result){
                if (!error) {

                    //APIs:

                    //Mixpanel tracking the event of singup user
                    analytics.identify( Meteor.userId(), {
                      email: Meteor.user().emails[0].address,
                      name: Meteor.user().username
                    });

                    //Algolia:
                    Meteor.call('addOrEditObjectInAlgolia', Meteor.user().profile.userSlug, true, function(error, result){
                        if (error) {
                          console.log(" addOrEditObjectInAlgolia Error >> " + error);
                        }
                    });

                } else {
                  //TBD: We need to give a good solution for this error :(
                  console.log(" updateUserProfileDotId Error >> " + error);
                }
            });
        } else {
          console.log(" insertDot Error >> " + error);
        }
    });
};

Modules.client.signup = signup;
