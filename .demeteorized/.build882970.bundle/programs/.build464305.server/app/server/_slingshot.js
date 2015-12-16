(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// server/_slingshot.js                                                //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
/**                                                                    //
 * Created by avivhatzir on 26/10/2015.                                //
 */                                                                    //
Slingshot.fileRestrictions("uploadToAmazonS3", {                       // 4
  allowedFileTypes: ["image/png", "image/jpeg", "image/gif"],          // 5
  maxSize: 1 * 1024 * 1024                                             // 6
});                                                                    //
                                                                       //
var amazonBucket = Meteor.settings.AWSBucket;                          // 9
                                                                       //
Slingshot.createDirective("uploadToAmazonS3", Slingshot.S3Storage, {   // 11
  bucket: amazonBucket,                                                // 12
  acl: "public-read",                                                  // 13
  authorize: function () {                                             // 14
    //let userFileCount = Files.find( { "userId": this.userId } ).count();
    //return userFileCount < 3 ? true : false;                         //
    if (Meteor.userId()) {                                             // 17
      return true;                                                     // 18
    } else {                                                           //
      return false;                                                    // 21
    }                                                                  //
  },                                                                   //
  key: function (file) {                                               // 24
    var user = Meteor.users.findOne(this.userId);                      // 25
    return user._id + "/" + file.name;                                 // 26
  }                                                                    //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=_slingshot.js.map
