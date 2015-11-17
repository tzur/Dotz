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
                Bert.alert( 'username slug already exists ', 'danger' );
              }
              else {
                _createNewDotForDotProfile ( Meteor.userId() );
                //tracking the event of singup user
                analytics.identify( Meteor.userId(), {
                  email: Meteor.user().emails[0].address,
                  name: Meteor.user().username
                });
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
                  Bert.alert( 'Welcome!', 'success' );
                  FlowRouter.go('/' + Meteor.user().profile.userSlug);
                }
                else{
                  console.log(" updateUserProfileDotId Error >> " + error);
                }
            });
        }
    });
};

Modules.client.signup = signup;
