

function fbQuery(query, accessToken){

  var options = {
    timout: 300,
    pool:{
      maxSockets: Infinity
    },
    headers:{
      connection: "keep-alive"
    }
  };
  FBGraph.setAccessToken(accessToken).setOptions(options);
  var data = Meteor.sync(function(done){
    FBGraph.get(query, function(err,res){
      done(null, res)
    })
  });
  return data.result
}

Meteor.methods({
  getUserData(postId){
    check(postId, String);
    console.log(Meteor.user().services.facebook.accessToken);
    return fbQuery('434228236734415_'+ postId+'?fields=from,message', Meteor.user().services.facebook.accessToken);
  }
});





//Meteor.methods(
//  getUserData: ->
//fb = new Facebook(Meteor.user().services.facebook.accessToken)
//FBQuery '/me', 'get', fb
//
//getUserEvents: ->
//fb = new Facebook(Meteor.user().services.facebook.accessToken)
//FBQuery '/' + Meteor.user().services.facebook.id + '/events', 'get', fb
//
//getUserGroups: ->
//fb = new Facebook(Meteor.user().services.facebook.accessToken)
//FBQuery '/' + Meteor.user().services.facebook.id + '/groups?fields=name&limit=1000', 'get', fb
//)/**
// * Created by ZurTene on 12/29/2015.
// */
