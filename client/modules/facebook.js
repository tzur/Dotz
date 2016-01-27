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
          callback(result.data[0].id);
        }
      })
    }else {
      callback(groupName);
    }
  }else{
    console.warn('its not facebook group.')
  }
}
function _getPostData(){
  var url = $('#url').val();
  _groupUrlToID(url, function(groupID){
    var postID;
    if (url.substring(url.lastIndexOf('/')+1) === ''){
      url =url.substring(0, url.length-1);
    }
    postID = url.substring(url.lastIndexOf('/') + 1);
    Meteor.call('getPostData',groupID, postID, function(error, data){
      if (error){
        console.warn('error in facebook client' + error)
      }else{
        var dataParser = JSON.stringify(data);
        $("#descriptionField").val(data.message).trigger('change');
        Session.set('fbPostAuthorData', data.from);
      }
    })
  });
}

Modules.client.facebook = {};
Modules.client.facebook.getPostData =  _getPostData;
Modules.client.facebook.groupUrlToID = _groupUrlToID;
