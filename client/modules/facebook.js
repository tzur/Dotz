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
          callback(undefined, result.data[0].id);
        }
      })
    }else {
      callback(undefined, groupName);
    }
  }else{
    callback({message: "Wrong facebook group post."})
  }
}
function _getPostData(callback){
  var url = $('#url').val();
  _groupUrlToID(url, function(error, groupID){
    if (error){
      callback(error)
    }else{
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
