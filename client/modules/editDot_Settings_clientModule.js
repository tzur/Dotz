


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
    Session.set('editAction_docToEdit', dot);

    Modal.show('createNewDot_Modal',{
      initialDataForFormFields: {
        id: dot._id,
        title: dot.title,
        description: dot.bodyText,
        img: dot.coverImageUrl,
        linkUrl: dot.linkUrl
        //linkName: dot.linkName,
        //startDate: dot.startDate,
        //startHour: dot.startDate,
        //ebdDate: dot.startDate,
        //endHour: dot.startDate,
        //multipleEventsNote: dot.multipleEventsNote
      },
      parentDotId: dot._id

    });

  } else if ( dot.dotType === "List" ) {
    //This session will nullify at the end of editDot method:

    //Session.set('editAction_list', true);
    Session.set('editAction_docToEdit', dot);

    Session.set('editAction_list', dot);

    console.log("is LIST >>>>>>> dot.title: " + dot.title);

    //console.log("is LIST >>>>>>> dot.description: " + dot.description);


    Modal.show('createNewList_modal', {
      //initialDataForFormFields: {
      //  title: dot.title,
      //  description: dot.description,
      //  img: dot.coverImageUrl
      //},
      //parentDotId: dot._id
      //Meteor.user().profile.profileDotId
    });
  }

};



Modules.client.editDot_settings = editDot_settings;
