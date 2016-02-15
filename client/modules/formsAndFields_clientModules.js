

function createDotLoading(){
  Session.set('spinnerOn', true);
  $('#title').toggleClass('nonEditAble');
  $('#description').toggleClass('nonEditAble');
  //TODO DISABLE MORE FIELDS IF NECCESSARE PAY ATTENTION IT'S ONLY ON LINK TYPE
  //$('._submitBtn').toggleClass('nonEditAble');
}


function createDotFinishedLoading(){
  Session.set('spinnerOn', false);
  $('#title').toggleClass('nonEditAble');
  $('#description').toggleClass('nonEditAble');
  //TODO DISABLE MORE FIELDS IF NECCESSARE PAY ATTENTION IT'S ONLY ON LINK TYPE
}

function _createDotFinishedLoadingImgFromS3(){
  Session.set('spinnerImgUploadedOn', undefined);
  //TODO >>> TBD
  //$('._submitBtn').toggleClass('nonEditAble');
}


function createDotClearForm(){
  Session.set('spinnerOn', false);
  Session.set('dotCoverImg', undefined);
  $('#title').val('');
  $('#description').val('');
  $('#price').val(''); //TODO CLEAR MORE FIELDS SUCH AS DATE ETC
}


function updateCreateDotFields(id, title, description, img, linkUrl ,fbAuthour){

  if (title){
    $('#title').val(title);
  }

  if (description){
    //$('#description').val(description).trigger('change'); //TRIGGER CHANGE IS FOR THE AUTO TAGGER NOT THAT RELAVENT.
    $('#description').val(description);
  }

  //Toggle fields on:
  Modules.client.createDotFinishedLoading();

  //img section:
  let dotToEdit = Session.get('editAction_docToEdit');
  if (dotToEdit) {
    Session.set('dotCoverImg', dotToEdit.coverImageUrl);
  } else if (img) { //Support embedly img
    Modules.client.uploadToAmazonViaUrl(img, function (error, url) {
      if (error) {
        console.log("Error on uploadToAmazonViaUrl >>> " + error);
      } else {
        Session.set('dotCoverImg', url);
      }
    });
  }

  // LIST or DOT sections:

  //List only:
  if (dotToEdit && dotToEdit.dotType === "List") {
      if (dotToEdit.dotSubType === "Public List") {
        Session.set('publicList', "Public");
      } else if (dotToEdit.dotSubType === "Closed List") {
        Session.set('closedList', "Closed");
      }

      if (dotToEdit.showDotzCounter) {
        console.log("dotToEdit.showDotzCounter" + dotToEdit.showDotzCounter)
        $('#showDotzCounter').val(dotToEdit.showDotzCounter);
      }

  //  TODO >>> add solution for hide/show dotz counter

  } else {
      //Dot only:
      if (linkUrl){
        //$('#url').val(linkUrl).load();
        //$('#url').val(linkUrl).trigger('loading');
        $('#url').val(linkUrl).trigger('click');
      }

      //more details section:
      if (id) {
        let dot = Dotz.findOne(id);
        //convert by moment:

        if (dot.startDateAndHour) {
          let startDate = moment(dot.startDateAndHour).format('DD MMMM YYYY');
          let startHour = moment(dot.startDateAndHour).format('hh:mm A');
          $('#startDate').val(startDate);
          $('#startHour').val(startHour);
        }
        if (dot.endDateAndHour) {
          let endDate = moment(dot.endDateAndHour).format('DD MMMM YYYY');
          let endHour = moment(dot.endDateAndHour).format('hh:mm A');
          $('#endDate').val(endDate);
          $('#endHour').val(endHour);
        }
        if (dot.multipleEventsNote) {
          $('#multipleEventsNote').val(dot.multipleEventsNote);
        }

        //personalDescription:
        //TBD: add smartRef
        //if (dot.personalDescription) {
        //  $('#personalDescription').val(dot.personalDescription);
        //}

      }
  }

}




function createDotChangeTab(fieldsArray){
  fieldsArray.forEach(function(field){

  })
}


Modules.client.createDotLoading = createDotLoading;
Modules.client.createDotFinishedLoading = createDotFinishedLoading;
Modules.client.createDotClearForm = createDotClearForm;
Modules.client.updateCreateDotFields= updateCreateDotFields;
Modules.client.createDotChangeTab = createDotChangeTab;
