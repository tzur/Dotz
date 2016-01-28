
Template.dotShow.helpers({

  isItMobileoShow: function() {
    let screenWidth = $(window).width();
    //console.log("screenWidth is " + screenWidth);
    if (screenWidth < 767) {
      return true;
    }
  }
});



// Global Helpers (for dotShow area..) :

Template.registerHelper('isListShow', ( dotType ) => {
  if ( dotType ) {
    return (dotType === "List" || dotType ==="shareList");
  }
});

//"show more description" session:
Template.registerHelper('userClickOnShowMoreButton', () => {
  return Session.get('userClickOnShowMoreButton');
});

//"show more" session:
Template.registerHelper('userClickOnTheYesButton', () => {
  return Session.get('userClickOnTheYesButton');
});

