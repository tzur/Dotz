(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// server/seo/layout.js                                                //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
SSR.compileTemplate('seoLayout', Assets.getText('layout.html'));       // 1
// Blaze does not allow to render templates with DOCTYPE in it.        //
// This is a trick to made it possible                                 //
Template.seoLayout.helpers({                                           // 4
  getDocType: function () {                                            // 5
    return "<!DOCTYPE html>";                                          // 6
  }                                                                    //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=layout.js.map
