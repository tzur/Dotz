Template.index.onCreated( () => {
  DocHead.setTitle("Dotz");
  var metaInfo = {name: "Dotz | Connect The City. ", content: "Discover The Most Inspiring Dotz Around You."};
  DocHead.addMeta(metaInfo);

  //TBD:
  FlowRouter.go('/');

  //if ( Meteor.user() ) {
  //  FlowRouter.go('/');
  //}
  //Template.instance().subscribe( 'template' );

});

