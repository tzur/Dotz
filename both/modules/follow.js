let _followUser =(followingUserId, followedUserId) ->{
  Meteor.call('followUser', followingUserId, followedUserId)

};
let _unFollowUser = ()
Modules.both.Dotz.followUser = _followUser;
