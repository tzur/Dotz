Template.index.onCreated( () => {
  DocHead.setTitle("Dotz");
  var metaInfo = {name: "Dotz | Connect The City. ", content: "Discover The Most Inspiring Dotz Around You."};
  DocHead.addMeta(metaInfo);

  if ( Meteor.user() ) {
    FlowRouter.go('/' + Meteor.user().profile.userSlug);
  }
  //Template.instance().subscribe( 'template' );

});

