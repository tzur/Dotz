let preventEnterByElementId = ( elementId ) => {
  //$(elementId).on('keyup keypress', function(e) {
  //  var keyCode = e.keyCode || e.which;
  //  if (keyCode === 13) {
  //    e.preventDefault();
  //    return false;
  //  }
  //});

  $(elementId).on("keypress", ":input:not(textarea)", function(event) {
    return event.keyCode != 13;
  });

};

Modules.client.preventEnterByElementId = preventEnterByElementId;
