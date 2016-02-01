

// Global Helpers :

//Check if this is a mobile device (or not..):
Template.registerHelper('IS_MOBILE_SHOW', () => {
  let screenWidth = $(window).width();
  //console.log("screenWidth is " + screenWidth);
  if (screenWidth < 767) {
    return true;
  }
});
