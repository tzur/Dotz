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
var amazonBucket = undefined;                                          // 9
if (process.env.NODE_ENV === "production") {                           // 10
  amazonBucket = "dotz-deployment";                                    // 11
} else {                                                               //
  amazonBucket = "dotz-dev-images";                                    // 14
}                                                                      //
Slingshot.createDirective("uploadToAmazonS3", Slingshot.S3Storage, {   // 16
  bucket: amazonBucket,                                                // 17
  acl: "public-read",                                                  // 18
  authorize: function () {                                             // 19
    //let userFileCount = Files.find( { "userId": this.userId } ).count();
    //return userFileCount < 3 ? true : false;                         //
    if (Meteor.userId()) {                                             // 22
      return true;                                                     // 23
    } else {                                                           //
      return false;                                                    // 26
    }                                                                  //
  },                                                                   //
  key: function (file) {                                               // 29
    var user = Meteor.users.findOne(this.userId);                      // 30
    return user._id + "/" + file.name;                                 // 31
  }                                                                    //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=_slingshot.js.map
