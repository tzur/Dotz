
Template.dotCard.helpers({

  isItMobileoShow: function() {
    let screenWidth = $(window).width();
    //console.log("screenWidth is " + screenWidth);
    if (screenWidth < 767) {
      return true;
    }
  }

});
