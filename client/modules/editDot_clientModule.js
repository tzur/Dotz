


let editDot_settings = ( dot ) => {
  //Session.set("parentDot", undefined);
  //Session.set("locationObject", undefined);
  //Session.set("editAction_dot", undefined);
  //Session.set("editAction_list", undefined);
  Session.set(dot.dotSubType.toLowerCase(), "active");
  Session.set('selectedType', dot.dotSubType);


  if ( dot.dotType === "Dot" ) {

    //This session will nullify at the end of editDot method:
    Session.set('editAction_dot', true);

    Modal.show('createNewDot_Modal',{
      initialDataForFormFields: {
        id: dot._id,
        title: dot.title,
        description: dot.description,
        img: dot.coverImageUrl,
        //linkName: dot.linkName,
        linkUrl: dot.linkUrl
        //startDate: dot.startDate,
        //startHour: dot.startDate,
        //ebdDate: dot.startDate,
        //endHour: dot.startDate,
        //multipleEventsNote: dot.multipleEventsNote
        //  TODO >>> add location, event, and more...
      },
      parentDotId: dot._id

    });

  } else if ( dot.dotType === "List" ) {
    //This session will nullify at the end of editDot method:
    Session.set('editAction_list', true);

    Modal.show('createNewList_modal', {
      initialDataForFormFields: {
        title: dot.title,
        description: dot.description,
        img: dot.coverImageUrl
      },
      parentDotId: dot._id
      //Meteor.user().profile.profileDotId
    });
  }

};



Modules.client.editDot_settings = editDot_settings;
