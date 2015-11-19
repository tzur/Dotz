(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// server/publications/images.js                                       //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
/**                                                                    //
 * Created by avivhatzir on 26/10/2015.                                //
 */                                                                    //
Meteor.publish('files', function () {                                  // 4
  var data = Files.find({ "userId": this.userId });                    // 5
                                                                       //
  if (data) {                                                          // 7
    return data;                                                       // 8
  }                                                                    //
                                                                       //
  return this.ready();                                                 // 11
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=images.js.map
