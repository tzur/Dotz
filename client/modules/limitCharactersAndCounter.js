/**
 * Created by avivhatzir on 15/11/2015.
 */
/**
 * Created by avivhatzir on 12/11/2015.
 */
//Move to client side.

let limitCharactersAndCounter = (inputFieldId, maxCharacters, inputFieldFeedbackId) => {
  var text_max = maxCharacters;
  $(inputFieldFeedbackId).html('('+ text_max  + ')');

  $(inputFieldId).keyup(function() {
    var text_length = $(inputFieldId).val().length;
    var text_remaining = text_max - text_length;

    $(inputFieldFeedbackId).html('('+ text_remaining + ')');
  });

};
Modules.client.Dotz.limitCharactersAndCounter = limitCharactersAndCounter;
