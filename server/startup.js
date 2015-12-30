//Meteor.startup( () => Modules.server.startup() );

Meteor.startup(function () {
  Modules.server.startup();
  process.env.MAIL_URL = "smtp://postmaster%40dotz.city:TLVbeta123@smtp.mailgun.org:587";


  //Meteor.call('convertUsersToRoleOwner', 'Tourism', 'firstGroup', function(error){
  //  if(!error){
  //    console.log('all user have been updated')
  //  }
  //});
  //Meteor.call('convertUsersToRoleOwner', 'Connector', Roles.GLOBAL_GROUP);
  //Meteor.call('addCategoryToDotzByOwner');

});

//Migration methods
Meteor.methods({
  convertUsersToRoleOwner(role, group, userIdOptional){
    check(role, Match.OneOf(String, [String]));
    check(group, Match.OneOf(String, [String])) ;

    if(userIdOptional){
      check(userIdOptional, String);
      Roles.setUserRoles(userIdOptional  ,role, group );
    }
    else{
      let users = Meteor.users.find().fetch();
      if (!users)
        return [];
// it'll only come here after the subscription is ready, no .fetch required
      users.forEach(function(user){
        let userId = user._id;
        console.log(userId) ;
        Roles.setUserRoles(userId  ,role, group );
      });
    }

  },
  addCategoryToDotzByOwner(){
    let dotz = Dotz.find().fetch();
    dotz.forEach(function(dot){
      let user = Meteor.users.findOne(dot.ownerUserId);
      let updateOptions = {
        $set: {category: [user.roles.firstGroup[0]]}
    };
      Dotz.update({_id: dot._id}, updateOptions);
      let newDot = Dotz.findOne(dot._id);
      if(newDot) {
        Meteor.call('addOrEditObjectInAlgolia', newDot.dotSlug, false, function(error){
          if(!error){
            console.log("dot name: " + newDot.title + " Dot category: " + newDot.category[0])
          }
        });
      }
    })
  }
});

