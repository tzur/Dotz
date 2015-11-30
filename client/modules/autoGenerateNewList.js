let autoGenerateNewLists = (sampleHotelUserName) => {
  let profileDot = Dotz.findOne({title: (sampleHotelUserName + " Dotz")});
  profileDot.connectedDotzArray.forEach(function(smartRef){
    let dot = Dotz.findOne(smartRef.dot._id);
    let newDoc = {
      title: dot.title,
      ownerUserId: Meteor.userId(),
      dotType: "List",
      createdAtDate: new Date(),
      coverImageUrl: dot.coverImageUrl,
      isOpen: false,
      inDotz: [Meteor.user().profile.profileDotId],
      quickStartListId: dot._id
    };

    Meteor.call('createDot', newDoc, function(error, result){
      if(error){
        console.log('Auto generate Lists failed');
      }
    })

  })
};

Modules.client.autoGenerateNewLists = autoGenerateNewLists;

