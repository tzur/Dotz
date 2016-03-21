
let editDot_settings = ( dot, smartRef ) => {

  //TBD:
  Session.set(dot.dotSubType.toLowerCase(), "active");
  Session.set('selectedType', dot.dotSubType);
  //This session will nullify at the end of editDot method:
  Session.set('editAction_dot', true);

  let objectToEdit = {
    dot: {
      _id: dot._id,
      isOpen: dot.isOpen,
      dotSlug: dot.dotSlug,
      title: dot.title,
      bodyText: dot.bodyText,
      coverImageUrl: dot.coverImageUrl,
      linkUrl: dot.linkUrl,

      mailContact: dot.mailContact,
      facebookContact: dot.facebookContact,
      twitterContact: dot.twitterContact,
      linkedinContact: dot.linkedinContact,

      linkName: dot.linkName,
      startDate: dot.startDate,
      startHour: dot.startDate,
      ebdDate: dot.startDate,
      endHour: dot.startDate,
      multipleEventsNote: dot.multipleEventsNote
    }
  };
  if (smartRef) {
    objectToEdit.smartRef = {
      parentDotId: smartRef.connection.toParentDotId,
      personalDescription: smartRef.connection.personalDescription
    }
  }
  Session.set('editAction_docToEdit', objectToEdit);

  Modal.show('editDot_Modal');


};



Modules.client.editDot_settings = editDot_settings;
