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
        required: "Don't be shy... What is your name?",
        minlength: 'Use at least 3 characters, please.'
      },
      emailAddress: {
        required: "Don't forget to add your email.",
        email: 'Is this email address legit?'
      },
      password: {
        required: 'Psssss... You forgot to add a password',
        minlength: 'Use at least 6 characters, please.'
      }
    },
  submitHandler() { _handleSignup( template ); }
  };
};

let _handleSignup = ( template ) => {
  Session.set('spinnerOn', true);
  let user = {
    username: template.find( '[name="userName"]' ).value,
    email: template.find( '[name="emailAddress"]' ).value,
    password: template.find( '[name="password"]' ).value
  };

  Accounts.createUser( user, ( error ) => {
      if ( error ) {
        Bert.alert( error.reason, 'danger' );
        Session.set('spinnerOn', false);
      }
      else {
        Meteor.call('updateUserAfterSignUp',function(error,result){
          if (error){
            console.log('error' + error);
          }
          else{
            Modal.hide('signUpModal');
            console.log(result);
            FlowRouter.go('/' + Meteor.user().profile.userSlug);
            Bert.alert( 'Welcome!', 'success' );
            let userCategory;
            if(!Session.get('landingPageCategory')){
              userCategory = "Tech"
            }
            else{
              userCategory = Session.get('landingPageCategory');
            }
            Meteor.call('convertUsersToRoleOwner', userCategory, 'firstGroup', Meteor.userId() , function(error){
              if(!error){
                //Algolia:
                Meteor.call('addOrEditObjectInAlgolia', Meteor.user().profile.userSlug, true, function(error, result){
                  if (error) {
                    console.log(" addOrEditObjectInAlgolia Error >> " + error);
                  }
                });
              }
            });
          }
        })
    }
  });
};

//add an url-format for UserSlug:

//Create new dot + add the new dot ID to the profileDotId field:
//We need to move this function to the server (and to include some security checks):


Modules.client.signup = signup;

