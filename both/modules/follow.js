let _followUser = function(followingUserId, followedUserId){
  Meteor.call('followUser', followingUserId, followedUserId)
};
let _unFollowUser =  function(unFollowUserId, followedUserId){
  Meteor.call('unFollowUser', unFollowUserId, followedUserId);
};
Modules.both.Dotz.followUser = _followUser;
