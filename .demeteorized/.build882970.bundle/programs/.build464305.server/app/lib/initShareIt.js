(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// lib/initShareIt.js                                                  //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
if (Meteor.isClient) {                                                 // 1
  ShareIt.init({                                                       // 2
    siteOrder: ['facebook', 'twitter'],                                // 3
    iconOnly: true,                                                    // 4
    applyColors: false                                                 // 5
  });                                                                  //
  //Template.registerHelper('shareOnFacebookLink', function() {        //
  //  return 'https://www.facebook.com/sharer/sharer.php?&u=' + this.dot.dotSlug;
  //});                                                                //
}                                                                      //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=initShareIt.js.map
