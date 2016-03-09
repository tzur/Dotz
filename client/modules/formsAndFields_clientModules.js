

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
  $('#personalDescription').val('');
  $('#url').val('');
  $('#title').val('');
  $('#description').val('');
  $('#webAddress').val('');
  $('#startDate').val('');
  $('#startHour').val('');
  $('#endDate').val('');
  $('#endHour').val('');
  $('#multipleEventsNote').val('');
  $('#currencyField').val('');
  $('#price').val('');
  $('#priceMax').val('');

  //close the modal
  $('#connectTheDot-Box').removeClass('boxToModal');
  //$('body').removeClass('noScroll');
  $('#closeBtnModal').addClass('hidden');
  $('#searchResultsDiv').addClass('hidden');
  $('#dotShowFooter-inListShow').removeClass('background-fa');
  $('#typesAndSearch-div').addClass('hidden');
  $('#footer-createNewDot').addClass('hidden');

  Session.set('lists_DOTZ', undefined);
}


//function updateCreateDotFields(id, title, description, img, linkUrl, personalDescription, toParentDotId, fbAuthor){
function updateCreateDotFields(fields){

  if (fields.personalDescription){
    $('#personalDescription').val(fields.personalDescription);
  }

  if (fields.title){
    $('#title').val(fields.title);
  }

  //console.log("fields.description >>>> " + fields.description)

  if (fields.description){
    //$('#description').val(description).trigger('change'); //TRIGGER CHANGE IS FOR THE AUTO TAGGER NOT THAT RELAVENT.
    $('#description').val(fields.description);
  }

  //Toggle fields on:
  Modules.client.createDotFinishedLoading();

  //img section:
  let dotToEdit = Session.get('editAction_docToEdit');
  if (dotToEdit) {
    //console.log("dotToEdit.coverImageUrl >>>> " + dotToEdit.dot.coverImageUrl)
    Session.set('dotCoverImg', dotToEdit.dot.coverImageUrl);
  } else if (fields.coverImageUrl) { //Support embedly img
    Modules.client.uploadToAmazonViaUrl(fields.coverImageUrl, function (error, url) {
      if (error) {
        console.log("Error on uploadToAmazonViaUrl >>> " + error);
      } else {
        Session.set('dotCoverImg', url);
      }
    });
  }

  // LIST or DOT sections:

      if (dotToEdit.isOpen) {
        Session.set('publicDot', true);
      } else {
        Session.set('closedDot', true);
      }

      //  TODO >>> add solution to bring the hide/show dotz counter
      //console.log("dotToEdit.showDotzCounter is:" + dotToEdit.showDotzCounter)
      //if (dotToEdit.showDotzCounter) {
      //  $('#showDotzCounter').val("Show");
      //} else { //dotToEdit.showDotzCounter === false
      //  $('#showDotzCounter').val("Hide");
      //}

      //Dot only:
      if (fields.linkUrl){
        //$('#url').val(linkUrl).load();
        //$('#url').val(linkUrl).trigger('loading');
        $('#url').val(fields.linkUrl).trigger('click');
      }

      //more details section:
      if (fields._id) {
        let dot = Dotz.findOne(fields._id);
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




function createDotChangeTab(fieldsArray){
  fieldsArray.forEach(function(field){

  })
}


Modules.client.createDotLoading = createDotLoading;
Modules.client.createDotFinishedLoading = createDotFinishedLoading;
Modules.client.createDotClearForm = createDotClearForm;
Modules.client.updateCreateDotFields= updateCreateDotFields;
Modules.client.createDotChangeTab = createDotChangeTab;
