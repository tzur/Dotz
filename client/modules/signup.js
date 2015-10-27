let signup = ( options ) => {
  _validate( options.form, options.template );
};

let _validate = ( form, template ) => {
  $( form ).validate( validation( template ) );
};

let validation = ( template ) => {
  return {
    rules: {
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
    email: template.find( '[name="emailAddress"]' ).value,
    password: template.find( '[name="password"]' ).value
  };

  Accounts.createUser( user, ( error ) => {
    if ( error ) {
      Bert.alert( error.reason, 'danger' );
    } else {
      Bert.alert( 'Welcome!', 'success' );

      //Create new dot + add the new dot ID to the profileDotId field:
      //to add meteorCall!!

      let userId = Meteor.users.findOne({"emails.address": user.email})._Id;
      console.log("iserId is " + userId);

      let profileDotDoc = {
        dotType: "profileDot",
        ownerUserId: userId,
        dotzConnectedByOthers: [],
        title: "My Dotz",

      };
      dotId = Dotz.insert(profileDotDoc);
      console.log("dotId is " + dotId);

    }
  });
};

Modules.client.signup = signup;
