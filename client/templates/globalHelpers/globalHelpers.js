

// Global Helpers :

//"show more description" session:
Template.registerHelper('MOBILE_SHOW', () => {
  let screenWidth = $(window).width();
  //console.log("screenWidth is " + screenWidth);
  if (screenWidth < 767) {
    return true;
  }
});
