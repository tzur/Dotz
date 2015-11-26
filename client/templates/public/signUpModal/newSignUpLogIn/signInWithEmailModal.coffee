Template.signInWithEmailModal.events(
  'click .btn-create-account': ->
    Session.set 'createOrSignIn', 'create'

  'click .btn-sign-in': ->
    Session.set 'createOrSignIn', 'signin'

  'submit form': (e)->
    e.preventDefault()
)




submitHandler: ->
  createOrSignIn = Session.get 'createOrSignIn'

  user =
    email: $('[name="emailAddress"]').val()
    password: $('[name="password"]').val()

  if createOrSignIn == "create"
    Meteor.call 'validateEmailAddress', user.email, (error,response)->
# We'll handle any errors and create the user's account here.
  else
    Meteor.loginWithPassword(user.email, user.password, (error)->
      if error
        alert error.reason
      else
        $('.modal-backdrop').hide()
    )
