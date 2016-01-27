function _createDotLoading(){
  Session.set('spinnerOn', true);
  $('#titleField').toggleClass('nonEditAble');
  $('#descriptionField').toggleClass('nonEditAble');
  $('#tagsInput').toggleClass('nonEditAble');
}
function _createDotFinishedLoading(){
  Session.set('spinnerOn', false);
  $('#titleField').toggleClass('nonEditAble');
  $('#descriptionField').toggleClass('nonEditAble');
  $('#tagsInput').toggleClass('nonEditAble');
}
function _createDotClearForm(){
  Session.set('spinnerOn', false);
  Session.set('coverImageUrl', undefined);
  $('#titleField').val('');
  $('#descriptionField').val('');
  $('#tagsInput').val('');

}
Modules.client.createDotLoading = _createDotLoading;
Modules.client.createDotFinishedLoading = _createDotFinishedLoading;
Modules.client.createDotClearForm = _createDotClearForm;
