/**
 * Created on 30/12/2015.
 */
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
  },
  updateUsersRolesToAlgolia(){
    let users = Meteor.users.find().fetch();
    users.forEach(function(user){
      Meteor.call('addOrEditObjectInAlgolia', user.profile.userSlug, true, function(error){
        if(!error){
          console.log(user.username + " has been updated in algola")
        }
      })
    })
  },

  convertImagesToImgixUrl(){
    let dotz = Dotz.find( { $and: [ { dotType: { $ne: "_profileDot" } }, { dotType: { $ne: "shareList" } }, {coverImageUrl:{$ne: undefined}} ] }).fetch();
    dotz.forEach(function(dot){
      if(dot.coverImageUrl){
        let convertUrl = dot.coverImageUrl;
        let imgixUrl = convertUrl.replace('dotz.imgix.net', 'dotz-deployment.s3.amazonaws.com');
        Dotz.update({_id: dot._id}, {$set: {"coverImageUrl": imgixUrl}});
        console.log('the dot name is: ' + dot.title + "t\]he new image url: " + dot.coverImageUrl)
      }
    })

  }
});
