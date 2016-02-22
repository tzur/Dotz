function _groupUrlToID(groupUrl, callback){
  var groupName;
  if (groupUrl.indexOf('/groups') > -1){
    groupName = groupUrl.substring(groupUrl.indexOf('groups'));
    groupName = groupName.substring(groupName.indexOf('/') + 1);
    groupName = groupName.substring(0,groupName.indexOf('/'));
    console.log(groupName);
    if (isNaN(groupName)){
      Meteor.call('getFBGroupID', groupName, function(error,result){
        if (error){
          console.warn(error+ 'error')
        }else{
          //TODO: fix it..
          console.log("ftnd >>>>>>> result.data[0].id " + result.data[0].id)
          //callback(undefined, result.data[0].id);
          callback(result.data[0].id, undefined);
        }
      })
    }else {
      console.log("on Else ... ");
      callback(undefined, groupName);
    }
  }else{
    callback({message: "Wrong facebook group post."})
  }
}

function _getPostData(callback){
  var url = $('#url').val();
  console.log("url is >>> " + url);
  //_groupUrlToID(url, function(error, groupID){
  _groupUrlToID(url, function(groupID, error){
    if (error) {
      callback(error);
    } else {
      console.log("_getPostData >>> groupID: " + groupID);
      var postID;
      if (url.substring(url.lastIndexOf('/')+1) === ''){
        url =url.substring(0, url.length-1);
      }
      postID = url.substring(url.lastIndexOf('/') + 1);
      Meteor.call('getPostData',groupID, postID, function(error, data){
        if (error){
          console.warn('error in facebook client' + error);
          callback(error)
        }else{
          callback(undefined, data);

        }
      })
    }

  });
}

Modules.client.facebook = {};
Modules.client.facebook.getPostData =  _getPostData;
Modules.client.facebook.groupUrlToID = _groupUrlToID;
