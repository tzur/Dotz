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
let createGroupList = function(FBGroupKey){
  let groupInfo = fbQuery(FBGroupKey +'/?fields=name,description,cover');
  let groupList = new Modules.both.Dotz.DotFactory("List", Meteor.userId(), groupInfo.name, new Date(),
            true, groupInfo.description, groupInfo.id, groupInfo.name, groupInfo.cover.source, Meteor.user().profileDotId);
  Meteor.call('createDot', groupList, function(error, result){
    if (error){
      console.log("ERROR createGroupList >>> createDot : " + error);
    }
    else{
      console.log("created the fu**ing list")
    }
  });

};
let _getGroupPosts = function(listSlug, groupId, startRangeDate, endRangeDate, callback){

  //Convert Dates to UNIX Timestamp:
  let startDateUnixTimestamp = (new Date(startRangeDate).getTime() / 1000).toFixed(0);
  let endDateUnixTimestamp = (new Date(endRangeDate).getTime() / 1000).toFixed(0);
  console.log("startDateUnixTimestamp  >>> " + startDateUnixTimestamp)
  console.log("endDateUnixTimestamp  >>> " + endDateUnixTimestamp)

  let listId = Dotz.findOne({dotSlug: listSlug})._id;
  console.log(listId);
  let fbFilteredPosts = [];
  let fbDotz = [];
  let fbPost = function (ownerName, ownerFbId, likes, content, createdTime) {
    this.ownerName = ownerName;
    this.ownerFbId = ownerFbId;
    this.likes = likes;
    this.content = content;
    this.createdTime = new Date(createdTime);
    this.connectTo = listId;
  };

  //title,
  var query = groupId + '/feed?fields=likes,comments,message,from,created_time' +
    '&since=' + startDateUnixTimestamp + '&until=' + endDateUnixTimestamp + '&limit=300';
  //434228236734415/feed?fields=likes,message,from,created_time&limit=100
  var pagesCounter = 0;
  while (query && fbFilteredPosts.length < 500) {
    pagesCounter++;
    let result = fbQuery(query, Meteor.user().services.facebook.accessToken);
    if (result.data) {
      result.data.forEach(function (fbData) {
          //fbData.comments.data.length > 4

          let likesLength;
          if (fbData.likes && fbData.likes.data) {
            likesLength = fbData.likes.data.length;
          }
          let commentsLength;
          if (fbData.comments && fbData.comments.data) {
            commentsLength = fbData.comments.data.length;
          }
          if ( (likesLength > 10) || (commentsLength > 4) ) {
            fbFilteredPosts.push(new fbPost(fbData.from.name, fbData.from.id, likesLength, fbData.message, fbData.created_time))
          }
      });
    } else {
      console.log("There is no result from FB... (Maybe Error) ")
    }
    if (result.paging) {
      console.log("result.paging.next: " + result.paging.next)
      query = result.paging.next;
    }
    else {
      query = undefined;
    }
    console.log("Took data from " + pagesCounter + " Pages on facebook.");
  }
  fbFilteredPosts.forEach(function (filteredPost) {
    fbDotz.push(new Modules.both.Dotz.DotFactory('FBDot', Meteor.userId(), 'Post: ', filteredPost.createdTime, false,
      filteredPost.content, filteredPost.ownerFbId, filteredPost.ownerName,undefined, filteredPost.connectTo));

  });
  let amountOfDotz = fbDotz.length;
  fbDotz.forEach(function(fbDot){
    let counter = 0;
    counter++;
    Meteor.call('createDot', fbDot, function(error, result){
      if (error){
        console.log(error + "error from insert now");
      }
      else{
        callback(amountOfDotz);
      }
    })
  });
};


Meteor.methods({
  getFBGroupID(groupName){
    check(groupName, String);
    return fbQuery('search?q='+ groupName +'&type=group', Meteor.user().services.facebook.accessToken)
  },
  getPostData(groupID, postID){
    check(postID, String);
    check(groupID, String);
    return fbQuery(groupID + '_'+ postID+'?fields=from,message', Meteor.user().services.facebook.accessToken);
  },
  /*
   * Just give this Method an FB group key - it will create a list for the FB Group with default number of 100 Dotz
   * just change "DEFAULT_NUMBER" in order to increase/decrease the number of the dotz. (it's not exact science because
   * it really depends on how many "good" posts there are per page. but it defines the minimum with + of maximum 99 :)
   *
   * RETURNS GROUP LIST SLUG AS CALLBACK TO NOTIFY THE CLIENT WHEN THE LIST IS READY.
   * in order to give those posts a tag as well, use tagFaceboolDotz at this method callback with the given result!
   * Neat ah? :) lol.
   */
  createGroupList(FBGroupKey, startRangeDate, endRangeDate){
    //First we will create the "lidt/dot" for the facebook group:
    console.log("FBGroupKey is: >>>> " + FBGroupKey)
    check(FBGroupKey, String);
    check(startRangeDate, String);
    check(endRangeDate, String);

    let fbFuture = Meteor.npmRequire('fibers/future');
    let fbResult = new fbFuture();
    let groupInfo = fbQuery(FBGroupKey +'/?fields=name,description,cover', Meteor.user().services.facebook.accessToken);
    let groupNameAndDates = "Facebook Group: " + groupInfo.name + "(" + startRangeDate + " - " + endRangeDate + ")";
    let groupList = new Modules.both.Dotz.DotFactory("List", Meteor.userId(), groupNameAndDates , new Date(),
      true, groupInfo.description, groupInfo.id, groupInfo.name, groupInfo.cover.source, Meteor.user().profile.profileDotId);

    console.log("groupList >>>>>> is : " + groupList);

    Meteor.call('createDot', groupList, function(error, listSlug){
      if (error){
        console.log("ERROR at createDot of facebook group " + error);
        fbResult.throw(error);
      }
      else {
        //Created the group list now lets put the pots inside:
        var addedDotzCounter = 0; // will keep the number of all the dotz that were already added.
        _getGroupPosts(listSlug, FBGroupKey, startRangeDate, endRangeDate, function(amountOfDotz){
          addedDotzCounter++;
          console.log("Finished connecting dot number "  +  addedDotzCounter + " need total of " + amountOfDotz);
          if (amountOfDotz === addedDotzCounter){
            console.log("FINISHED CONNECTING ALL FACEBOOK POSTS TO THE GROUP");
            fbResult.return(listSlug);
          }
        })
      }
    });
    return fbResult.wait()
  },
  /*
   * Use this Method in order to tag your facebookDotz, it receives that listSlug. (should be used just after
   * createGroupList method in general.
   */
  tagFacebookDotz(listSlug){
    check(listSlug, String);
    let groupList = Dotz.findOne({dotSlug: listSlug});
    let dot, dotTitle, dotBodyText;
    groupList.connectedDotzArray.forEach(function(smartRefDot){
      dot = Dotz.findOne(smartRefDot.dot._id);
      dotTitle = dot.title;
      dotBodyText = dot.bodyText;
      let tagsObject = _getTaggers(dotTitle, dotBodyText);

      let title = "@" + dot.facebookAuthorName  + tagsObject.stringTags;
      let tagsUpdate = {
        $set: {tags: tagsObject.arrayTags, title: title}
      };
      Meteor.call('updateDot', tagsUpdate, dot._id, function(error, result){
        if (error){
          console.log("Error on tagFacebookDotz" + error);
        }
        else{
          console.log("updated certain dot");
        }
      })
    })
  }

});
let _getTaggers = function(title, text){
  let selectedTagsSet = new Set();
  let arrayTags = [];
  let stringTags = ": ";
  Tags.find().forEach(function(tagDict){
    //Hebrew tags logic - need to make it a method and reuse on english tags when they eventually will come
    for (let tag in tagDict.hebrewTags){
      tagDict.hebrewTags[tag].forEach(function(tagValue){
        if (text.indexOf(tagValue) > -1){
          selectedTagsSet.add(tag);
          stringTags += tag + ", "
        }
      });
    }
  });
  selectedTagsSet.forEach(function(value, key, setObj){
    arrayTags.push(key);
  });
  return {
    arrayTags: arrayTags,
    stringTags: stringTags
  };
};
