
let editDot = ( options ) => {
  _validate( options.form, options.template );
};

let _validate = ( form, template ) => {
  $( form ).validate( validation( template ) );
};

let validation = ( template ) => {
  return {
    rules: {
      listTitle: {
        //required: true,
        //minlength: 3,
        maxlength: 200
      },
      listDescription: {
        maxlength: 2000
      },
      fileChangeCreateDot: {
        extension: "jpg|png|gif"
      }
    },
    messages: {
      listTitle: {
        //minlength: 'Use at least 3 characters, please.',
        maxlength: 'Use maximum 200 characters, please.'
      },
      listDescription: {
        maxlength: 'Use maximum 2000 characters, please.'
      },
      fileChangeCreateDot: {
        extension: 'Only .jpg/.gif/.png files, please.'
      }
    },

    submitHandler() {
      _handleEditDot( template );
    }

  };
};


let _handleEditDot = ( template ) => {
  //Session.set('spinnerOn', true);

  //Types & Open:
  let openOrClosed;
  if (Session.get('publicDot')) {
      openOrClosed = true;
  } else if (Session.get('closedDot')) {
      openOrClosed = false;
  }
  //else if (Session.get('secretList')) {
  //    openOrClosed = false;
  //}


  //TBD:
  //parentDotId & redirectAfterCreateSlug:
  let parentDotId;
  let redirectAfterCreateSlug;
  if ( Session.get('parentDot') ) {
    parentDotId = Session.get('parentDot');
    redirectAfterCreateSlug = Dotz.findOne(parentDotId).dotSlug;
  } else {
    parentDotId = Meteor.user().profile.profileDotId;
    redirectAfterCreateSlug = Meteor.user().profile.userSlug
  }

  let showDotzCounter = true;
  let showDotzCounterField =  template.find( '[name="showDotzCounter"]' );
  if (showDotzCounterField && (showDotzCounterField.value === "true") ) {
    showDotzCounter =  true;
  } else if (showDotzCounterField && (showDotzCounterField.value === "false") ) {
    showDotzCounter =  false;
  }

  let doc = Modules.client.takeInputFromFields();
  let superTagsToFilterConnectedDotz = Modules.client.takeSuperTagsFromFields();
  //if (doc) {
  //  console.log("data.title >>>>> " + doc.title)
  //  console.log("data.price >>>>>> " + doc.price)
  //}

  //dotSubType:
  let selectedSubType;
  if (doc.startDateAndHour) {
    selectedSubType = 'Event';
  } else if (doc.location) {
    selectedSubType = 'Place';
  }

  //title: template.find( '[name="title"]' ).value,
  //bodyText: template.find( '[name="description"]' ).value,
  doc.showDotzCounter = showDotzCounter;
  doc.ownerUserId = Meteor.userId();
  //coverImageUrl: template.find( '[name=""]' ).value,
  //dotType: "List",
  doc.dotSubType = selectedSubType;
  doc.isOpen = openOrClosed;
  //dotColor: dotColor,
  doc.coverImageUrl = Session.get('dotCoverImg');
  doc.superTagsToFilterConnectedDotz = superTagsToFilterConnectedDotz;
  console.log("doc.superTagsToFilterConnectedDotz >>>>>>>>> " + doc.superTagsToFilterConnectedDotz)
  //doc.inDotz = [parentDotId];

  //This is edit action:
  let dotToEdit =  Session.get('editAction_docToEdit');
  if (dotToEdit) {
    Meteor.call('updateDot', doc, dotToEdit.dot._id ,function(error,result){
      if (error){
        console.log("updateDot error >>> " + error)
      } else {
        Modal.hide();
        Session.set("parentDot", undefined);
        Session.set("locationObject", undefined);
        Session.set("editAction_dot", undefined);
        Session.set("editAction_list", undefined);
        Session.set('spinnerOn', false);

        //console.log("updateDot result >>>  " + result);

        Meteor.call('addOrEditObjectInAlgolia', dotToEdit.dot.dotSlug, false);
        //analytics.track("Dot Edited", {
        //  isDotWithOutLocation: Session.equals("locationObject", undefined),
        //  dotType: dotSubType
        //});
      }
    });


  }
};

Modules.client.editDot = editDot;

