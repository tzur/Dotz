let preventEnterByElementId = ( elementId ) => {
  $(elementId).on('keyup keypress', function(e) {
    var keyCode = e.keyCode || e.which;
    if (keyCode === 13) {
      e.preventDefault();
      return false;
    }
  });
};

Modules.client.preventEnterByElementId = preventEnterByElementId;
