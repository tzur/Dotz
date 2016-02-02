
let createNewList = ( options ) => {
  //_validate( options.form, options.template );
};

let _validate = ( form, template ) => {
  $( form ).validate( validation( template ) );
};

let validation = ( template ) => {
  return {
    rules: {
      url: {
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
      url: {
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
    submitHandler() { _handleCreateNewList( template ); }
  };
};

let _handleCreateNewList = ( template ) => {
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
  });
};

Modules.client.createNewList = createNewList;

