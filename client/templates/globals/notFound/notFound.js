Template.notFound.onCreated( () => {

  FlowRouter.go('/');
  Bert.alert('Sorry :( Page does not exist (aka 404)', 'danger');

});
