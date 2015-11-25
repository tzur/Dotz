Template.signInWithEmailModal.events(
  'click .btn-create-account': ->
    Session.set 'createOrSignIn', 'create'

  'click .btn-sign-in': ->
    Session.set 'createOrSignIn', 'signin'

  'submit form': (e)->
    e.preventDefault()
)
